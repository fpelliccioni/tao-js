// Reference: Elements of Programming, ch. 10, p. 179.

function rotate_random_access_nontrivial<T>(f: Iter<T>, m: Iter<T>, l: Iter<T>) {
    const p = k_rotate_from_permutation_random_access(f, m, l);
    return rotate_cycles(f, m, l, p);
}

function __rotate_random_access_nontrivial_usage() {
    function cycle_from<T>(i: Iter<T>, f: IteratorPermutation<T>) {
        const tmp = source(i);
        let j = i;
        let k = f(i);
        while ( ! equal(k, i)) {
            sink(j, source(k));
            j = k;
            k = f(k);
        }
        sink(j, tmp);
    }

    function rotate_cycles<T>(f: Iter<T>, m: Iter<T>, l: Iter<T>, from: IteratorPermutation<T>) {
        let d = gcd(distance(f, m), distance(m, l));

        while (d != 0) {
            --d;
            cycle_from(successor(f, d), from);
        }
        return successor(f, distance(m, l));
    }

    function k_rotate_from_permutation_random_access<T>(f: Iter<T>, m: Iter<T>, l: Iter<T>) {
        const k = distance(m, l);
        const n_minus_k = distance(f, m);
        const m_prime = successor(f, distance(m, l));

        return function(x: Iter<T>) {
            if ( distance(x, m_prime) > 0) return successor(x, n_minus_k);
            return predecessor(x, k);
        };
    }

    const s = sequence(array_random(12), "s");
    rotate_random_access_nontrivial(begin(s), successor(begin(s), 3), end(s));
    print(s);
}

function __rotate_random_access_nontrivial_attributes() {
}
