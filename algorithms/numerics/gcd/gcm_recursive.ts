// Reference: From Mathematics to Generic Programming, ch. 3, §3.5, p. 34 (gcm in ch03.h).

// Doc (es): Calcula la mayor medida común de dos segmentos positivos restando el menor del mayor en cada llamada recursiva.
// Doc (en): Computes the greatest common measure of two positive segments by subtracting the smaller from the larger at each recursive call.
function gcm_recursive<T>(a: T, b: T, monoid: ArchimedeanMonoid<T>): T {
    // Precondition: monoid is Archimedean, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && monoid.less(monoid.zero, a) && monoid.less(monoid.zero, b),
        "Both segment lengths must be positive.");

    function measure(x: T, y: T): T {
        if (monoid.less(y, x)) return measure(monoid.subtract(x, y), y);
        if (monoid.less(x, y)) return measure(x, monoid.subtract(y, x));
        return x;
    }

    const result = measure(a, b);
    post(() => gcd_matches(a, b, result, monoid), "The result must be the greatest common measure.");
    return result;
}

function __gcm_recursive_usage() {
    const result = gcm_recursive(196, 42, integer_monoid);
    print("Greatest common measure: " + result);
}

function __gcm_recursive_attributes() {
}
