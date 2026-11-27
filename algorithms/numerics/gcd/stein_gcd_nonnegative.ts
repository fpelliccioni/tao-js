// Reference: Elements of Programming, ch. 5, p. 79, exercise 5.3 (companion implementation in eop.h).

function stein_gcd_nonnegative(a: number, b: number): number {
    pre(
        () => Number.isSafeInteger(a) && Number.isSafeInteger(b) && a >= 0 && b >= 0 && (a !== 0 || b !== 0),
        "Inputs must be nonnegative safe integers and at least one must be nonzero.",
    );
    if (a === 0) return b;
    if (b === 0) return a;

    let scale = 1;
    while (a % 2 === 0 && b % 2 === 0) {
        a /= 2;
        b /= 2;
        scale *= 2;
    }
    while (a % 2 === 0) a /= 2;

    while (b !== 0) {
        while (b % 2 === 0) b /= 2;
        if (b < a) [a, b] = [b, a];
        b -= a;
    }
    return scale * a;
}

function __stein_gcd_nonnegative_usage() {
    const gcd = stein_gcd_nonnegative(48, 18);
    print("Greatest common divisor: " + gcd);
}

function __stein_gcd_nonnegative_attributes() {
}
