// Greeks "had no notion of zero".
function remainder_fast0(a: number, b: number) {
    if (a <= b) return a;
    if (a - b <= b) return a - b;
    a = remainder_fast0(a, b + b);
    if (a <= b) return a;
    return a - b
}

function __remainder_fast0_usage() {
    const a = random_int();
    const b = random_int();

    const r = remainder_fast0(a, b);
    print(r);
}

function __remainder_fast0_attributes() {
}
