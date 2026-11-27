function multiply_accumulate1(r: number, n: number, a: number) {
    if (n == 1) return add(r, a);
    if (odd(n)) {
        r = add(r, a);
    }
    return multiply_accumulate1(r, half(n), add(a, a));
}

function __multiply_accumulate1_usage() {
    const n = 41;
    const a = 59;

    const p = multiply_accumulate1(0, n, a);
    print(p);
}

function __multiply_accumulate1_attributes() {
}
