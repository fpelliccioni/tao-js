// Reference: From Mathematics to Generic Programming, ch. 4, §4.2, pp. 45–49 (ch04.h).

// Doc (es): Calcula la mayor medida común de dos segmentos positivos usando un resto que nunca es cero.
// Doc (en): Computes the greatest common measure of two positive segments using a remainder that never becomes zero.
function fast_segment_gcm(a: number, b: number): number {
    pre(() => Number.isSafeInteger(a) && Number.isSafeInteger(b) && a > 0 && b > 0,
        "Both segment lengths must be positive safe integers.");
    const first = a;
    const second = b;
    while (a !== b) {
        const remainder = remainder_fast0(a, b);
        a = b;
        b = remainder;
    }
    post(() => gcd_matches(first, second, a, integer_monoid), "The result must be the greatest common measure.");
    return a;
}

function __fast_segment_gcm_usage() {
    const result = fast_segment_gcm(196, 42);
    print("Greatest common measure: " + result);
}

function __fast_segment_gcm_attributes() {
}
