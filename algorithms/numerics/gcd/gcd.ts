// Reference: From Mathematics to Generic Programming, ch. 4, §4.6, pp. 57–58 (ch04.h).

function gcd(a: number, b: number) {
    while (b != 0) {
        const r = remainder(a, b);
        a = b;
        b = r;
    }
    return a;
}

function __gcd_usage() {
    const a = random_int();
    const b = random_int();

    const g = gcd(a, b);
    print(g);
}

function __gcd_attributes() {
}
