function remainder_slow(a, b) {
    while (b < a) a -= b;
    return a;
}

function usage() {
    var a = random_int();
    var b = random_int();

    var r = remainder_slow(a, b);
    print(r);
}

function attributes() {

}

