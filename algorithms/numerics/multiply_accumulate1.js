function multiply_accumulate1(r, n, a) {
    if (n == 1) return r + a;
    if (odd(n)) r += a;
    return multiply_accumulate1(r, half(n),  a + a);
}

function usage() {
    var n = random_int();
    var a = random_int();

    var p = multiply_accumulate1(0, n, a);
    print(p);
}

function attributes() {

}

