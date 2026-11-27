// Reference: Elements of Programming, ch. 10, p. 175.
// Reference: From Mathematics to Generic Programming, ch. 11, p. 217 (ch11.h).

function reverse_n_adaptive<T, U>(f_i: Iter<T>, n_i: number, f_b: Iter<U>, n_b: number): Iter<T> {
    if (n_i < 2) return successor(f_i, n_i);
    if (n_i <= n_b) return reverse_n_with_buffer(f_i, n_i, f_b);

    const h_i = half(n_i);
    const n_mod_2 = n_i - twice(h_i);
    const m_i = successor(reverse_n_adaptive(f_i, h_i, f_b, n_b), n_mod_2);
    const l_i = reverse_n_adaptive(m_i, h_i, f_b, n_b);

    swap_ranges_n(f_i, m_i, h_i);
    return l_i;
}

function __reverse_n_adaptive_usage() {
    const s = sequence(array_random(16), "s", undefined, "sll"); // singly-linked list
    //var b = sequence(array_all_equal(size(s), '-'), "b");
    const b = sequence(array_all_equal(4, '-'));
    print(s);
    const r = reverse_n_adaptive(begin(s), size(s), begin(b), size(b));
    print(s);
}

function __reverse_n_adaptive_attributes() {
}
