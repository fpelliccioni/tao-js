// Algorithm discovered by Robert Floyd and Donald Knuth
function quotient_fibonacci(a, b) {
    // precondition: b > 0
    if (a < b) return a;
    var c = b;
    do {
        var tmp = c;
        c += b;
        b = tmp;
    } while (a >= c);

    var n = 1;
    do {
        if (a >= b) a -= b;
        var tmp = c - b;
        c = b;
        b = tmp;
        ++n;
    } while (b < c);
    return n;
}

function usage() {
    // var a = random_int();
    // var b = random_int();
    var a = 45;
    var b = 6;

    var q = quotient_fibonacci(a, b);
    print(q);
}

function attributes() {

}

