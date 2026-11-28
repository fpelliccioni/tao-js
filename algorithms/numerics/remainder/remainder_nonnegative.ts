// Reference: Elements of Programming, ch. 5, p. 72.

// Doc (es): Calcula el resto duplicando el divisor por recursión.
// Doc (en): Computes the remainder by recursively doubling the divisor.
function remainder_nonnegative<T>(a: T, b: T, monoid: ArchimedeanMonoid<T>): T {
    // Precondition: monoid models the indicated concept, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && monoid.less(monoid.zero, b),
        "The dividend must be nonnegative and the divisor must be positive.");
    function remaining(divisor: T): T {
        if (monoid.less(a, divisor)) return a;
        const difference = monoid.subtract(a, divisor);
        if (monoid.less(difference, divisor)) return difference;

        const result = remaining(monoid.add(divisor, divisor));
        return monoid.less(result, divisor) ? result : monoid.subtract(result, divisor);
    }

    const result = remaining(b);
    post(() => {
        const [, expected] = quotient_remainder_nonnegative(a, b, monoid);
        return monoid_equal(result, expected, monoid);
    }, "The result must be the nonnegative remainder.");
    return result;
}

function __remainder_nonnegative_usage() {
    const a = 137;
    const b = 12;
    const result = remainder_nonnegative(a, b, integer_monoid);
    print("Result: " + result);
}

function __remainder_nonnegative_attributes() {
}
