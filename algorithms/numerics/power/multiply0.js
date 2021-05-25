function multiply0(n, a) {
    if (n == 1) return a;
    var product = multiply0(n - 1, a)
    product = add(product, a);
    return product;
}

function usage() {
    var n = 41;
    var a = 59;

    var p = multiply0(n, a);
    print(p);
}

function attributes() {

}

