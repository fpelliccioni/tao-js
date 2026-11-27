function multiply2(n: number, a: number) {
    if (n == 1) return a;
    return multiply_accumulate4(a, n - 1, a);

}

function __multiply2_usage() {
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

    const p = multiply2(n, a);
    print(p);
}

function __multiply2_attributes() {
}
