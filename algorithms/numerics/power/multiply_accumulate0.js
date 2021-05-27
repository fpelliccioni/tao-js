function multiply_accumulate0(r, n, a) {
    if (n == 1) return add(r, a);
    if (odd(n)) {
        return multiply_accumulate0(add(r, a), half(n), add(a, a));
    }
    return multiply_accumulate0(r, half(n), add(a, a));
}

function usage() {
    var n = 41;
    var a = 59;

    var p = multiply_accumulate0(0, n, a);
    print(p);
}

function attributes() {

}

