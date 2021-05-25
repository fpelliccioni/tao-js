function multiply1(n, a) {
    if (n == 1) return a;
    var product = multiply1(half(n),  a + a);
    if (odd(n)) {
        product = add(product, a);
    }
    return product;

}

function usage() {
    var n = random_int();
    var a = random_int();

    var p = multiply1(n, a);
    print(p);
}

function attributes() {

}

