function multiply_accumulate1(r, n, a) {
    if (n == 1) return add(r, a);
    if (odd(n)) {
        r = add(r, a);
    }
    return multiply_accumulate1(r, half(n),  add(a, a));
}

function usage() {
    var n = 41;
    var a = 59;

    var p = multiply_accumulate1(0, n, a);
    print(p);
}

function attributes() {

}

