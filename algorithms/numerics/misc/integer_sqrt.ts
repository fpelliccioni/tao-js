function integer_sqrt(n: number) {
    //precondition: n >= 0
    if (n < 2) {
        return n;
    }

    // Find the shift amount.
    // shift = ceil(log2(n) * 0.5) * 2
    let shift = 2
    while ((n >> shift) != 0) {
        shift += 2;
    }


    // Unroll the bit-setting loop.
    let result = 0
    while (shift >= 0) {
        result = result << 1;
        const large_cand = result ^ 1;
        // large_cand = result + 1;
        if (large_cand * large_cand <= n >> shift) {
            result = large_cand;
        }
        shift -= 2;
    }

    return result;
}


function __integer_sqrt_usage() {
    const n = random_int();
    // var n = 53;
    const i = integer_sqrt(n);
    print(i);
    const expected = Math.floor(Math.sqrt(n));
    print(expected);
}

function __integer_sqrt_attributes() {
}
