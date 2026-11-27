function gcd3(a: number, b: number) {
    while (a !== b && b !== 0) {
        a = remainder(a, b);
        const tmp = a;
        a = b;
        b = tmp;
    }
    return a;
}

function __gcd3_usage() {
    const a = random_int();
    const b = random_int();

    const d = gcd3(a, b);
    print(d);
}

function __gcd3_attributes() {
}
