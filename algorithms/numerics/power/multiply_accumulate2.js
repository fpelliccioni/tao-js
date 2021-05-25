function multiply_accumulate2(r, n, a) {
    if (odd(n)) {
        r = add(r, a);
        if (n == 1) return r;
    }
    return multiply_accumulate2(r, half(n),  add(a, a));
}

function usage() {
    var n = 41;
    var a = 59;


    var p = multiply_accumulate2(0, n, a);
    print(p);
}

function attributes() {

}

