// Reference: From Mathematics to Generic Programming, ch. 2, §2.2, pp. 11–14 (mult_acc0 in ch02.h).

function multiply_accumulate0(r: number, n: number, a: number) {
    if (n == 1) return add(r, a);
    if (odd(n)) {
        return multiply_accumulate0(add(r, a), half(n), add(a, a));
    }
    return multiply_accumulate0(r, half(n), add(a, a));
}

function __multiply_accumulate0_usage() {
    const n = 41;
    const a = 59;

    const p = multiply_accumulate0(0, n, a);
    print(p);
}

function __multiply_accumulate0_attributes() {
}
