function multiply2(n, a) {
    if (n == 1) return a;
    return multiply_accumulate4(a, n - 1, a);

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

    var n = 41;
    var a = 59;

    var p = multiply2(n, a);
    print(p);
}

function attributes() {

}

