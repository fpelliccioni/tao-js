function rotate_cycles(f, m, l, from) {
    var m_l = distance(m, l);
    var f_m = distance(f, m);
    var d = gcd(f_m, m_l);

    while (d != 0) {
        cycle_from(successor(f, d), from);
        --d;
    }
    return successor(f, m_l);
}

function usage() {

    function k_rotate_from_permutation_random_access(f, m, l) {
        var k = distance(m, l);
        var n_minus_k = distance(f, m);
        var m_prime = successor(f, k);

        return function (x) {
            if (x < m_prime) {
                return successor(x, n_minus_k);
            }
            return predecessor(x, k);
        }
    }

    function k_rotate_from_permutation_indexed(f, m, l) {
        var k = distance(m, l);
        var n_minus_k = distance(f, m);

        return function (x) {
            var i = distance(f, x);
            if (i < k) {
                return successor(x, n_minus_k);
            }
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

