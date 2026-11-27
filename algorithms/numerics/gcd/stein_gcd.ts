// Reference: Elements of Programming, ch. 5, p. 79, exercise 5.3 (signed inputs).

function stein_gcd(a: number, b: number): number {
    return stein_gcd_nonnegative(Math.abs(a), Math.abs(b));
}

function __stein_gcd_usage() {
    const gcd = stein_gcd(-48, 18);
    print("Greatest common divisor: " + gcd);
}

function __stein_gcd_attributes() {
}
