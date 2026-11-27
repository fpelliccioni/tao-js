function remainder(a: number, b: number) {
    // precondition: b != 0
    if (a < b) return a;
    let c = largest_doubling(a, b);
    a -= c;
    while (c != b) {
        c = half(c);
        if (c <= a) a -= c;
    }
    return a;
}

function __remainder_usage() {
    function largest_doubling(a: number, b: number) {
        // precondition: b != 0
        while (a - b >= b) b += b;
        return b;
    }

    const a = random_int();
    const b = random_int();

    const r = remainder(a, b);
    print(r);
}

function __remainder_attributes() {
}
