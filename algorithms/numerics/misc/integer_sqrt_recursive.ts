function integer_sqrt_recursive(n: number): number {
    //precondition: n >= 0
    if (n < 2) {
        return n;
    }

    const tmp = n >> 2;
    const small_cand = integer_sqrt_recursive(tmp) << 1;
    const large_cand = small_cand + 1
    if (large_cand * large_cand > n) {
        return small_cand;
    }

    return large_cand;
}

function __integer_sqrt_recursive_usage() {
    const n = random_int();
    // var n = 53;
    const i = integer_sqrt_recursive(n);
    print(i);
    const expected = Math.floor(Math.sqrt(n));
    print(expected);
}

function __integer_sqrt_recursive_attributes() {
}
