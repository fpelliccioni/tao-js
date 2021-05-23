function multiply_accumulate3(r, n, a) {
    if (odd(n)) {
        r += a;
        if (n == 1) return r;
    }
    n = half(n);
    a =+ a;
    return multiply_accumulate3(r, n,  a);
}

function usage() {
    var n = random_int();
    var a = random_int();

    var p = multiply_accumulate3(0, n, a);
    print(p);
}

function attributes() {

}

