function remainder(a, b) {
    return a % b;
}

function gcd(a, b) {
    while (b != 0) {
        var r = remainder(a, b);
        a = b;
        b = r;
    }
    return a;
}

function cycle_from(i, f) {
    var tmp = source(i);
    var j = i;
    var k = f(i);
    while ( ! equal(k, i)) {
        sink(j, source(k));
        j = k;
        k = f(k);
    }
    sink(j, tmp);
}

function rotate_cycles(f, m, l, from) {
    var d = gcd(distance(f, m), distance(m, l));

    while (d != 0) {
        --d;
        cycle_from(successor(f, d), from);
    }
    return successor(f, distance(m, l));
}

function k_rotate_from_permutation_random_access(f, m, l) {
    var k = distance(m, l);
    var n_minus_k = distance(f, m);
    var m_prime = successor(f, distance(m, l));

    return function(x) {
        if ( distance(x, m_prime) > 0) return successor(x, n_minus_k);
        return predecessor(x, k);
    };
}

function rotate_random_access_nontrivial(f, m, l) {
    var p = k_rotate_from_permutation_random_access(f, m, l);
    return rotate_cycles(f, m, l, p);
}

function usage() {
    
    
    var s = sequence(array_random(12), "s");
    print(s);
    rotate_random_access_nontrivial(begin(s), successor(begin(s), 3), end(s));
    print(s);
    print('...');

}

function attributes() {

}

