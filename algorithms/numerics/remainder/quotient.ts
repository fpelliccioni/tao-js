// Reference: From Mathematics to Generic Programming, ch. 4, §4.5, pp. 53–56 (ch04.h).

function quotient(a: number, b: number) {
    // precondition: b > 0
    if (a < b) return 0;
    let c = largest_doubling(a, b);
    let n = 1;
    a -= c;
    while (c != b) {
        c = half(c);
        n += n;
        if (c <= a) {
            a -= c;
            ++n;
        }
    }
    return n;
}

function __quotient_usage() {
    function largest_doubling(a: number, b: number) {
        // precondition: b != 0
        while (a - b >= b) b += b;
        return b;
    }

    const a = random_int();
    const b = random_int();

    const q = quotient(a, b);
    print(q);
}

function __quotient_attributes() {
}
