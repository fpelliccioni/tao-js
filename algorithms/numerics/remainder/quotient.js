function quotient(a, b) {
    // precondition: b > 0
    if (a < b) return 0;
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
    return n;
}

function usage() {
    function largest_doubling(a, b) {
        // precondition: b != 0
        while (a - b >= b) b += b;
        return b;
    }

    var a = random_int();
    var b = random_int();

    var q = quotient(a, b);
    print(q);
}

function attributes() {

}

