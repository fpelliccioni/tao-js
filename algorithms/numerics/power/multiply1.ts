// Reference: From Mathematics to Generic Programming, ch. 2, §2.1, pp. 8–10 (ch02.h).

function multiply1(n: number, a: number): number {
    snapshot();
    if (n == 1) return a;
    let product = multiply1(half(n), add(a, a));
    if (odd(n)) {
        product = add(product, a);
    }
    return product;

}


function __multiply1_usage() {
    const n = 41;
    const a = 59;

    track_variable("n", 10);
    track_variable("n", 2);
    track_variable("a", 10);

    const p = multiply1(n, a);
    print(p);

    // Then go to multiply_accumulate0
    // http://componentsprogramming.com/algorithms/?repo=tao-js&snippet=multiply_accumulate0
}

function __multiply1_attributes() {
}
