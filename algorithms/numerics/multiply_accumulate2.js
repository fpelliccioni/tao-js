function multiply_accumulate2(r, n, a) {
    if (odd(n)) {
        r += a;
        if (n == 1) return r;
    }
    return multiply_accumulate2(r, half(n),  a + a);
}

function usage() {
    var n = random_int();
    var a = random_int();

    var p = multiply_accumulate2(0, n, a);
    print(p);
}

function attributes() {

}

