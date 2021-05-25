function multiply1(n, a) {
    if (n == 1) return a;
    var product = multiply1(half(n),  a + a);
    if (odd(n)) {
        product = add(product, a);
    }
    return product;

}

function usage() {
    var n = 41;
    var a = 59;

    var p = multiply1(n, a);
    print(p);
}

function attributes() {

}

