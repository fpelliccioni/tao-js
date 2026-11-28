// Reference: Elements of Programming, ch. 5, p. 72.

// Doc (es): Calcula el resto iterando sobre múltiplos del divisor desde el mayor hasta el divisor original.
// Doc (en): Computes the remainder by iterating over divisor multiples from the largest down to the original divisor.
function remainder_nonnegative_iterative<T>(a: T, b: T, monoid: HalvableMonoid<T>): T {
    // Precondition: monoid models the indicated concept, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && monoid.less(monoid.zero, b),
        "The dividend must be nonnegative and the divisor must be positive.");
    let result = a;
    if (!monoid.less(a, b)) {
        let chunk = monoid_largest_doubling(a, b, monoid);
        result = monoid.subtract(result, chunk);
        while (!monoid_equal(chunk, b, monoid)) {
            chunk = monoid.half(chunk);
            if (!monoid.less(result, chunk)) result = monoid.subtract(result, chunk);
        }
    }
    post(() => {
        const [, expected] = quotient_remainder_nonnegative(a, b, monoid);
        return monoid_equal(result, expected, monoid);
    }, "The result must be the nonnegative remainder.");
    return result;
}

function __remainder_nonnegative_iterative_usage() {
    const a = 137;
    const b = 12;
    const result = remainder_nonnegative_iterative(a, b, integer_monoid);
    print("Result: " + result);
}

function __remainder_nonnegative_iterative_attributes() {
}
