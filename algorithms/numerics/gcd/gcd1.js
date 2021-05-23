function gcd1(a, b) {
    while (a != b) {
        while (b < a) a -= b;
        //swap(a, b) not possible in ES5
        var tmp = a;
        a = b;
        b = tmp;
    }
    return a;
}

function usage() {
    var a = random_int();
    var b = random_int();

    var d = gcd1(a, b);
    print(d);
}

function attributes() {

}

