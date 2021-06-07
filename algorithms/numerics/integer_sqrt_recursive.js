function integer_sqrt_recursive(n) {
    //precondition: n >= 0
    if (n < 2) {
        return n
    }

    var tmp = n >> 2;
    var small_cand = integer_sqrt_recursive(n >> 2);
    var small_cand = small_cand << 1;
    var large_cand = small_cand + 1
    if (large_cand * large_cand > n) {
        return small_cand;
    }

    return large_cand;
}

function usage() {
    var n = random_int();
    // var n = 53;
    var i = integer_sqrt_recursive(n);
    print(i);
    print(Math.floor(Math.sqrt(n)));
}

function attributes() {

}

