// Now we do have a notion of zero, so ...

function remainder_fast1(a, b) {
    // precondition: b != 0

    if (a < b) return a;
    if (a - b < b) return a - b;
    a = remainder_fast1(a, b + b);
    if (a < b) return a;
    return a - b
}

function usage() {
    var a = random_int();
    var b = random_int();

    var r = remainder_fast1(a, b);
    print(r);
}

function attributes() {

}

