function rotate_cycles(f, m, l, from) {
    var l_m = distance(l, m);
    var d = gcd(distance(m, f), l_m);

    while (d != 0) {
        cycle_from(successor(f, d), from);
        --d;
    }
    return successor(f, l_m);
}

function usage() {

    function k_rotate_from_permutation_random_access(f, m, l) {
        var k = distance(l, m);
        var n_minus_k = distance(m, f);
        var m_prime = successor(f, k);

        return function (x) {
            if (x < m_prime) return successor(x, n_minus_k);
            return predecessor(x, k);
        }
    }

    function k_rotate_from_permutation_indexed(f, m, l) {
        var k = distance(l, m);
        var n_minus_k = distance(m, f);

        return function (x) {
            var i = distance(x, f);
            if (i < k) return successor(x, n_minus_k);
            return successor(f, i - k);
        }
    }

    var s = sequence(array_random(), "s");
    print(s);

    var f = begin(s);
    var m = successor(begin(s), 3);
    var l = end(s);
    var from = k_rotate_from_permutation_indexed(f, m, l);
    rotate_cycles(f, m, l, from);
    print(s);
    print('...');
}

function attributes() {

}

