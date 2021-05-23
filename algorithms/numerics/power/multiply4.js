function multiply4(n, a) {
    while (even(n)) {
        a += a;
        n = half(n);
    }
    if (n == 1) return a;
    // even(n - 1) ==> n - 1 != 1
    return multiply_accumulate4(a, half(n - 1), a + a);

}

function usage() {
    function multiply_accumulate4(r, n, a) {
        while (true) {
            if (odd(n)) {
                r += a;
                if (n == 1) return r;
            }
            n = half(n);
            a += a;
        }
    }

    var n = random_int();
    var a = random_int();

    var p = multiply4(n, a);
    print(p);
}

function attributes() {

}

