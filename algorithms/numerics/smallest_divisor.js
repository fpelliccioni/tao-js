function smallest_divisor(n) {
    //precondition: n > 0
    if (even(n)) return 2;

    for (var i = 3; i * i <= n; i += 2) {
        if (divides(i, n)) {
            return i;
        }
    }
    return n;
}

function usage() {
    var n = random_int();
    print(smallest_divisor(n));

    n = 15;
    print(smallest_divisor(n));
}

function attributes() {

}

