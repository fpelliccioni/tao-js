function largest_doubling(a, b) {
    // precondition: b != 0
    while (a - b >= b) b += b;
    return b;
}

function usage() {

    var a = random_int();
    var b = random_int();

    var r = largest_doubling(a, b);
    print(r);
}

function attributes() {

}

