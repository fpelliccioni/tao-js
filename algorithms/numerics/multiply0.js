function multiply0(n, a) {
    if (n == 1) return a;
    return multiply0(n - 1, a) + a;
}

function usage() {
    var n = random_int();
    var a = random_int();

    var p = multiply0(n, a);
    print(p);
}

function attributes() {

}

