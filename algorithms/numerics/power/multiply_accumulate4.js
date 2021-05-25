function multiply_accumulate4(r, n, a) {
    while (true) {
        if (odd(n)) {
            r = add(r, a);
            if (n == 1) return r;
        }
        n = half(n);
        a = add(a, a);
    }
}

function usage() {
    var n = 41;
    var a = 59;

    var p = multiply_accumulate4(0, n, a);
    print(p);

    // Then go to multiply2
    // http://componentsprogramming.com/algorithms/?repo=tao-js&snippet=multiply2

}

function attributes() {

}

