// Euclid's algorithm

function gcd0(a, b) {
    while (a != b) {
        if (b < a) a -= b;
        else       b -= a;
    }
    return a;
}

function usage() {
    var a = random_int();
    var b = random_int();

    var d = gcd0(a, b);
    print(d);
}

function attributes() {

}

