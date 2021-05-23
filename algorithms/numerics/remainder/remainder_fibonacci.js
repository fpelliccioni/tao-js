// Algorithm discovered by Robert Floyd and Donald Knuth
function remainder_fibonacci(a, b) {
    // precondition: b > 0
    if (a < b) return a;
    var c = b;
    do {
        var tmp = c;
        c += b;
        b = tmp;
    } while (a >= c);
    do {
        if (a >= b) a -= b;
        var tmp = c - b;
        c = b;
        b = tmp;
    } while (b < c);
    return a;
}

function usage() {
    var a = random_int();
    var b = random_int();

    var r = remainder_fibonacci(a, b);
    print(r);
}

function attributes() {

}

