function multiply0(n, a) {
    if (n == 1) return a;
    var product = multiply0(n - 1, a)
    product = add(product, a);
    return product;
}

function usage() {
    var n = random_int();
    var a = random_int();

    var p = multiply0(n, a);
    print(p);
}

function attributes() {

}

