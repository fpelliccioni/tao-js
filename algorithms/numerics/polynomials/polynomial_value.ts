// Reference: From Mathematics to Generic Programming, ch. 8, §8.1, p. 132 (ch08.h).

// Doc (es): Evalúa un polinomio con la regla de Horner. Recibe los coeficientes desde el de mayor grado hasta el término constante. Un rango vacío representa el polinomio cero.
// Doc (en): Evaluates a polynomial using Horner's rule. Coefficients run from the highest degree to the constant term. An empty range represents the zero polynomial.
function polynomial_value<I extends Iter<unknown>>(
    f: I, l: I, x: ValueOf<I>, ring: Semiring<ValueOf<I>>,
): ValueOf<I> {
    // Precondition: the supplied operations satisfy the semiring laws.
    const coefficients: ValueOf<I>[] = [];
    pre(() => {
        if (!is_bounded_range(f, l)) return false;
        for (let i = f; !equal(i, l); i = successor(i)) {
            coefficients.push(source(i));
        }
        return true;
    }, "The iterators must delimit a readable range of coefficients.");

    let result = ring.zero;
    if (!equal(f, l)) {
        result = source(f);
        for (let i = successor(f); !equal(i, l); i = successor(i)) {
            result = ring.add(ring.multiply(result, x), source(i));
        }
    }

    post(() => {
        let expected = ring.zero;
        let power = ring.one;
        for (let i = coefficients.length - 1; i >= 0; --i) {
            const term = ring.multiply(coefficients[i], power);
            expected = ring.add(term, expected);
            if (i > 0) power = ring.multiply(power, x);
        }
        return ring.equal(result, expected);
    }, "The result must equal the sum of the coefficient terms.");
    return result;
}

function __polynomial_value_usage() {
    const add = binary_operation<number>((l, r) => l + r);
    const multiply = binary_operation<number>((l, r) => l * r);
    const ring = { zero: 0, one: 1, add, multiply, equal: (l: number, r: number) => l === r };

    const d = seq([2, -3, 5]);
    const [f, l] = rng(d);
    const value = polynomial_value(f, l, 4, ring);
    print("Polynomial value at 4: " + value);
}

function __polynomial_value_attributes() {
}
