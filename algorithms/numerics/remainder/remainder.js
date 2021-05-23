function remainder(a, b) {
    // precondition: b != 0
    if (a < b) return a;
    var c = largest_doubling(a, b);
    a -= c;
    while (c != b) {
        c = half(c);
        if (c <= a) a -= c;
    }
    return a;
}

function usage() {
    function largest_doubling(a, b) {
        // precondition: b != 0
        while (a - b >= b) b += b;
        return b;
    }

    var a = random_int();
    var b = random_int();

    var r = remainder(a, b);
    print(r);
}

function attributes() {

}

