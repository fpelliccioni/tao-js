function multiply_accumulate4(r, n, a) {
    while (true) {
        if (odd(n)) {
            r += a;
            if (n == 1) return r;
        }
        n = half(n);
        a =+ a;
    }
}

function usage() {
    var n = random_int();
    var a = random_int();

    var p = multiply_accumulate4(0, n, a);
    print(p);
}

function attributes() {

}

