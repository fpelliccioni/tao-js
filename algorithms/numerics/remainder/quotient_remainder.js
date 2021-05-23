function quotient_remainder(a, b) {
    // precondition: b > 0
    if (a < b) return [0, a];
    var c = largest_doubling(a, b);
    var n = 1;
    a -= c;
    while (c != b) {
        c = half(c);
        n += n;
        if (c <= a) {
            a -= c;
            ++n;
        }
    }
    return [n, a];
}

function usage() {
    function largest_doubling(a, b) {
        // precondition: b != 0
        while (a - b >= b) b += b;
        return b;
    }

    var a = random_int();
    var b = random_int();

    var res = quotient_remainder(a, b);
    var q = res[0];
    var r = res[1];
    print(q);
    print(r);
}

function attributes() {

}

