function gcd(a, b) {
    while (b != 0) {
        var r = remainder(a, b);
        a = b;
        b = r;
    }
    return a;
}

function usage() {
    var a = random_int();
    var b = random_int();
    
    var g = gcd(a, b);
    print(g);
}

function attributes() {

}

