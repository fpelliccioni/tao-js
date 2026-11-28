// Reference: Elements of Programming, ch. 5, pp. 79–80.

// Doc (es): Calcula cociente y resto duplicando el divisor por recursión. El cociente debe caber en un entero seguro.
// Doc (en): Computes quotient and remainder by recursively doubling the divisor. The quotient must fit in a safe integer.
function quotient_remainder_nonnegative<T>(a: T, b: T, monoid: ArchimedeanMonoid<T>): [quotient: number, remainder: T] {
    // Precondition: monoid models the indicated concept, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && monoid.less(monoid.zero, b),
        "The dividend must be nonnegative and the divisor must be positive.");
    function divide(divisor: T): [number, T] {
        if (monoid.less(a, divisor)) return [0, a];
        const difference = monoid.subtract(a, divisor);
        if (monoid.less(difference, divisor)) return [1, difference];

        const [q, r] = divide(monoid.add(divisor, divisor));
        if (monoid.less(r, divisor)) return [2 * q, r];
        return [2 * q + 1, monoid.subtract(r, divisor)];
    }

    const result = divide(b);
    post(() => division_matches(a, b, result[0], result[1], monoid),
        "The quotient and remainder must reconstruct the dividend.");
    return result;
}

function __quotient_remainder_nonnegative_usage() {
    const a = 137;
    const b = 12;
    const [q, r] = quotient_remainder_nonnegative(a, b, integer_monoid);
    print("Quotient: " + q + ", remainder: " + r);
}

function __quotient_remainder_nonnegative_attributes() {
}
