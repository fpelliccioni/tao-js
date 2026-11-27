// Reference: Elements of Programming, ch. 10, pp. 178–179 (variant).

function rotate_cycles<T>(f: Iter<T>, m: Iter<T>, l: Iter<T>, from: IteratorPermutation<T>) {
    const m_l = distance(m, l);
    const f_m = distance(f, m);
    let d = gcd(f_m, m_l);

    while (d != 0) {
        cycle_from(successor(f, d), from);
        --d;
    }
    return successor(f, m_l);
}

function __rotate_cycles_usage() {
    function k_rotate_from_permutation_random_access<T>(f: Iter<T>, m: Iter<T>, l: Iter<T>) {
        const k = distance(m, l);
        const n_minus_k = distance(f, m);
        const m_prime = successor(f, k);

        return function (x: Iter<T>) {
            if (x < m_prime) {
                return successor(x, n_minus_k);
            }
            return predecessor(x, k);
        }
    }

    function k_rotate_from_permutation_indexed<T>(f: Iter<T>, m: Iter<T>, l: Iter<T>) {
        const k = distance(m, l);
        const n_minus_k = distance(f, m);

        return function (x: Iter<T>) {
            const i = distance(f, x);
            if (i < k) {
                return successor(x, n_minus_k);
            }
            return successor(f, i - k);
        }
    }

    const s = sequence(array_random(), "s");

    const f = begin(s);
    const m = successor(begin(s), 3);
    const l = end(s);
    const from = k_rotate_from_permutation_indexed(f, m, l);
    rotate_cycles(f, m, l, from);
    print(s);
}

function __rotate_cycles_attributes() {
}
