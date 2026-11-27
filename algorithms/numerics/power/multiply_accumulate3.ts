// Reference: From Mathematics to Generic Programming, ch. 2, §2.2, pp. 11–14 (mult_acc3 in ch02.h).

function multiply_accumulate3(r: number, n: number, a: number) {
    if (odd(n)) {
        r = add(r, a);
        if (n == 1) return r;
    }
    n = half(n);
    a = add(a, a);
    return multiply_accumulate3(r, n,  a);
}

function __multiply_accumulate3_usage() {
    const n = 41;
    const a = 59;

    const p = multiply_accumulate3(0, n, a);
    print(p);
}

function __multiply_accumulate3_attributes() {
}
