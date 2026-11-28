// Reference: Elements of Programming, ch. 5, p. 74 (subtractive_gcd_nonzero with the same positive-input precondition).
// Reference: From Mathematics to Generic Programming, ch. 4, §4.2, pp. 45–49 (gcm0 in ch04.h).

// Euclid's algorithm

function gcd0(a: number, b: number) {
    while (a != b) {
        if (b < a) a -= b;
        else       b -= a;
    }
    return a;
}

function __gcd0_usage() {
    const a = random_int();
    const b = random_int();

    const d = gcd0(a, b);
    print(d);
}

function __gcd0_attributes() {
}
