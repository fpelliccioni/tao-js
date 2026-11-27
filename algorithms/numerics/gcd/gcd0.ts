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
