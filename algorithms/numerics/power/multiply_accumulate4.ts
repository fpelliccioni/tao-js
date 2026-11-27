// Reference: From Mathematics to Generic Programming, ch. 2, §2.2, pp. 11–14 (mult_acc4 in ch02.h).

function multiply_accumulate4(r: number, n: number, a: number) {
    while (true) {
        if (odd(n)) {
            r = add(r, a);
            if (n == 1) return r;
        }
        n = half(n);
        a = add(a, a);
    }
}

function __multiply_accumulate4_usage() {
    const n = 41;
    const a = 59;

    const p = multiply_accumulate4(0, n, a);
    print(p);

    // Then go to multiply2
    // http://componentsprogramming.com/algorithms/?repo=tao-js&snippet=multiply2

}

function __multiply_accumulate4_attributes() {
}
