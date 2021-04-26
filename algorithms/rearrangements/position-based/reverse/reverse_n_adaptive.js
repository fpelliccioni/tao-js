function reverse_n_adaptive(f_i, n_i, f_b, n_b) {
    if (n_i < 2) return successor(f_i, n_i);
    if (n_i <= n_b) return reverse_n_with_buffer(f_i, n_i, f_b);

    var h_i = half_nonnegative(n_i);
    var n_mod_2 = n_i - twice(h_i);
    var m_i = successor(reverse_n_adaptive(f_i, h_i, f_b, n_b), n_mod_2);
    var l_i = reverse_n_adaptive(m_i, h_i, f_b, n_b);

    swap_ranges_n(f_i, m_i, h_i);
    return l_i;
}

function usage() {
    var s = sequence(array_random(16), "s", undefined, "list");
    //var b = sequence(array_all_equal(size(s), '-'), "b");
    var b = sequence(array_all_equal(4, '-'), "b");
    print(s);
    var r = reverse_n_adaptive(begin(s), size(s), begin(b), size(b));
    print(s);
}

function attributes() {

}

