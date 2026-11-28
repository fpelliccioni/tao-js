// Reference: Elements of Programming, ch. 5, p. 71.

// Doc (es): Cuenta cuántas veces se puede restar el divisor al dividendo. El cociente debe caber en un entero seguro.
// Doc (en): Counts how many times the divisor can be subtracted from the dividend. The quotient must fit in a safe integer.
function slow_quotient<T>(a: T, b: T, monoid: ArchimedeanMonoid<T>): number {
    // Precondition: monoid models the indicated concept, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && monoid.less(monoid.zero, b),
        "The dividend must be nonnegative and the divisor must be positive.");
    let remainder = a;
    let result = 0;
    while (!monoid.less(remainder, b)) {
        remainder = monoid.subtract(remainder, b);
        ++result;
    }
    post(() => division_matches(a, b, result, remainder, monoid),
        "The quotient and remainder must reconstruct the dividend.");
    return result;
}

function __slow_quotient_usage() {
    const a = 137;
    const b = 12;
    const result = slow_quotient(a, b, integer_monoid);
    print("Result: " + result);
}

function __slow_quotient_attributes() {
}
