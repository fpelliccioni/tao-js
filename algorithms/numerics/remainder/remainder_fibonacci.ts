// Algorithm discovered by Robert Floyd and Donald Knuth
function remainder_fibonacci(a: number, b: number) {
    // precondition: b > 0
    if (a < b) return a;
    let c = b;
    do {
        const tmp = c;
        c += b;
        b = tmp;
    } while (a >= c);
    do {
        if (a >= b) a -= b;
        const tmp = c - b;
        c = b;
        b = tmp;
    } while (b < c);
    return a;
}

function __remainder_fibonacci_usage() {
    const a = random_int();
    const b = random_int();

    const r = remainder_fibonacci(a, b);
    print(r);
}

function __remainder_fibonacci_attributes() {
}
