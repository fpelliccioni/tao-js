function gcd3(a, b) {
    while (a != b) {
        a = remainder(a, b);
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

    var d = gcd3(a, b);
    print(d);
}

function attributes() {

}

