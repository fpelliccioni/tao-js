function multiply3(n: number, a: number) {
    while (even(n)) {
        a = add(a, a);
        n = half(n);
    }
    if (n == 1) return a;
    return multiply_accumulate4(a, n - 1, a);

}

function __multiply3_usage() {
    function multiply_accumulate4(r: number, n: number, a: number) {
        while (true) {
            if (odd(n)) {
                r = add(r, a);
                if (n == 1) return r;
            }
            n = half(n);
            a = add(a, a);
        }
    }

    const n = 41;
    const a = 59;

    const p = multiply3(n, a);
    print(p);
}

function __multiply3_attributes() {
}
