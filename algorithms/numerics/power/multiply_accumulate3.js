function multiply_accumulate3(r, n, a) {
    if (odd(n)) {
        r = add(r, a);
        if (n == 1) return r;
    }
    n = half(n);
    a = add(a, a);
    return multiply_accumulate3(r, n,  a);
}

function usage() {
    var n = 41;
    var a = 59;

    var p = multiply_accumulate3(0, n, a);
    print(p);
}

function attributes() {

}

