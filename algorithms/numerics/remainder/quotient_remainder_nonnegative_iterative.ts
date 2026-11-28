// Reference: Elements of Programming, ch. 5, p. 80.

// Doc (es): Calcula cociente y resto al reducir por mitades los múltiplos del divisor. El cociente debe caber en un entero seguro.
// Doc (en): Computes quotient and remainder by halving multiples of the divisor. The quotient must fit in a safe integer.
function quotient_remainder_nonnegative_iterative<T>(a: T, b: T, monoid: HalvableMonoid<T>): [quotient: number, remainder: T] {
    // Precondition: monoid models the indicated concept, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && monoid.less(monoid.zero, b),
        "The dividend must be nonnegative and the divisor must be positive.");
    let result: [number, T] = [0, a];
    if (!monoid.less(a, b)) {
        let chunk = monoid_largest_doubling(a, b, monoid);
        let remainder = monoid.subtract(a, chunk);
        let quotient = 1;
        while (!monoid_equal(chunk, b, monoid)) {
            chunk = monoid.half(chunk);
            quotient *= 2;
            if (!monoid.less(remainder, chunk)) {
                remainder = monoid.subtract(remainder, chunk);
                ++quotient;
            }
        }
        result = [quotient, remainder];
    }
    post(() => division_matches(a, b, result[0], result[1], monoid),
        "The quotient and remainder must reconstruct the dividend.");
    return result;
}

function __quotient_remainder_nonnegative_iterative_usage() {
    const a = 137;
    const b = 12;
    const [q, r] = quotient_remainder_nonnegative_iterative(a, b, integer_monoid);
    print("Quotient: " + q + ", remainder: " + r);
}

function __quotient_remainder_nonnegative_iterative_attributes() {
}
