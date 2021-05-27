function multiply1(n, a) {
    snapshot();
    if (n == 1) return a;
    var product = multiply1(half(n),  add(a, a));
    if (odd(n)) {
        product = add(product, a);
    }
    return product;

}


function usage() {
    var n = 41;
    var a = 59;

    track_variable("n", 10);
    track_variable("n", 2);
    track_variable("a", 10);

    var p = multiply1(n, a);
    print(p);

    // Then go to multiply_accumulate0
    // http://componentsprogramming.com/algorithms/?repo=tao-js&snippet=multiply_accumulate0
}

function attributes() {

}

