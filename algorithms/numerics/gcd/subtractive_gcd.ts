// Reference: Elements of Programming, ch. 5, pp. 75–76.

// Doc (es): Obtiene el MCD por restas sucesivas. Admite un operando cero.
// Doc (en): Computes GCD by repeated subtraction. Allows one zero operand.
function subtractive_gcd<T>(a: T, b: T, monoid: ArchimedeanMonoid<T>): T {
    // Precondition: monoid is Archimedean, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && !monoid.less(b, monoid.zero)
        && (!monoid_equal(a, monoid.zero, monoid) || !monoid_equal(b, monoid.zero, monoid)),
        "The operands must be nonnegative and at least one must be positive.");
    const first = a;
    const second = b;
    while (!monoid_equal(b, monoid.zero, monoid)) {
        while (!monoid.less(a, b)) a = monoid.subtract(a, b);
        if (monoid_equal(a, monoid.zero, monoid)) break;
        while (!monoid.less(b, a)) b = monoid.subtract(b, a);
    }
    const result = monoid_equal(a, monoid.zero, monoid) ? b : a;
    post(() => gcd_matches(first, second, result, monoid), "The result must be the greatest common divisor.");
    return result;
}

function __subtractive_gcd_usage() {
    const result = subtractive_gcd(196, 42, integer_monoid);
    print("Greatest common divisor: " + result);
}

function __subtractive_gcd_attributes() {
}
