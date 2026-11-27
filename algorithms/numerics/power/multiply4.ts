function multiply4(n: number, a: number) {
    while (even(n)) {
        a = add(a, a);
        n = half(n);
    }
    if (n == 1) return a;
    // even(n - 1) ==> n - 1 != 1
    return multiply_accumulate4(a, half(n - 1), add(a, a));

}

function __multiply4_usage() {
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

    const p = multiply4(n, a);
    print(p);
}

function __multiply4_attributes() {
}
