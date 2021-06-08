function integer_sqrt(n) {
    //precondition: n >= 0
    if (n < 2) {
        return n;
    }

    // Find the shift amount.
    // shift = ceil(log2(n) * 0.5) * 2
    var shift = 2
    while ((n >> shift) != 0) {
        shift += 2;
    }


    // Unroll the bit-setting loop.
    var result = 0
    while (shift >= 0) {
        result = result << 1;
        var large_cand = result ^ 1;
        // large_cand = result + 1;
        if (large_cand * large_cand <= n >> shift) {
            result = large_cand;
        }
        shift -= 2;
    }

    return result;
}


function usage() {
    var n = random_int();
    // var n = 53;
    var i = integer_sqrt(n);
    print(i);
    print(Math.floor(Math.sqrt(n)));
}

function attributes() {

}

