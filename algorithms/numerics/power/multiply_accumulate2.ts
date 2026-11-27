function multiply_accumulate2(r: number, n: number, a: number) {
    if (odd(n)) {
        r = add(r, a);
        if (n == 1) return r;
    }
    return multiply_accumulate2(r, half(n), add(a, a));
}

function __multiply_accumulate2_usage() {
    const n = 41;
    const a = 59;


    const p = multiply_accumulate2(0, n, a);
    print(p);
}

function __multiply_accumulate2_attributes() {
}
