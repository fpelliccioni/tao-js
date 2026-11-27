function quotient_remainder(a: number, b: number) {
    // precondition: b > 0
    if (a < b) return [0, a];
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
    return [n, a];
}

function __quotient_remainder_usage() {
    function largest_doubling(a: number, b: number) {
        // precondition: b != 0
        while (a - b >= b) b += b;
        return b;
    }

    const a = random_int();
    const b = random_int();

    const res = quotient_remainder(a, b);
    const q = res[0];
    const r = res[1];
    print(q);
    print(r);
}

function __quotient_remainder_attributes() {
}
