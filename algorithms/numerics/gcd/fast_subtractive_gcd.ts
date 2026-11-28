// Reference: Elements of Programming, ch. 5, p. 76.

// Doc (es): Obtiene el MCD por restos calculados con duplicación. Admite un operando cero.
// Doc (en): Computes GCD with remainders calculated by doubling. Allows one zero operand.
function fast_subtractive_gcd<T>(a: T, b: T, monoid: ArchimedeanMonoid<T>): T {
    // Precondition: monoid is Archimedean, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && !monoid.less(b, monoid.zero)
        && (!monoid_equal(a, monoid.zero, monoid) || !monoid_equal(b, monoid.zero, monoid)),
        "The operands must be nonnegative and at least one must be positive.");
    const first = a;
    const second = b;
    while (!monoid_equal(b, monoid.zero, monoid)) {
        a = remainder_nonnegative(a, b, monoid);
        if (monoid_equal(a, monoid.zero, monoid)) break;
        b = remainder_nonnegative(b, a, monoid);
    }
    const result = monoid_equal(a, monoid.zero, monoid) ? b : a;
    post(() => gcd_matches(first, second, result, monoid), "The result must be the greatest common divisor.");
    return result;
}

function __fast_subtractive_gcd_usage() {
    const result = fast_subtractive_gcd(196, 42, integer_monoid);
    print("Greatest common divisor: " + result);
}

function __fast_subtractive_gcd_attributes() {
}
