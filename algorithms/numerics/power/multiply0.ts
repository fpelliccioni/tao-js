// Reference: From Mathematics to Generic Programming, ch. 2, §2.1, pp. 8–10 (ch02.h).

function multiply0(n: number, a: number): number {
    if (n == 1) return a;
    let product = multiply0(n - 1, a)
    product = add(product, a);
    return product;
}

function __multiply0_usage() {
    const n = 41;
    const a = 59;

    const p = multiply0(n, a);
    print(p);
}

function __multiply0_attributes() {
}
