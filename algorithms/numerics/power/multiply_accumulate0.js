function multiply_accumulate0(r, n, a) {
    if (n == 1) return r + a;
    if (odd(n)) {
        return multiply_accumulate0(r + a, half(n),  a + a);
    }
    return multiply_accumulate0(r, half(n),  a + a);
}

function usage() {
    var n = random_int();
    var a = random_int();

    var p = multiply_accumulate0(0, n, a);
    print(p);
}

function attributes() {

}

