// Reference: Elements of Programming, ch. 10, p. 174.

function reverse_n_forward<I extends Iter<unknown>>(f: I, n: number): I {
    if (n < 2) return successor(f, n);
    const h = half(n);
    const n_mod_2 = n - twice(h);

    const m = successor(reverse_n_forward(f, h), n_mod_2);
    const l = reverse_n_forward(m, h);

    swap_ranges_n(f, m, h);
    return l;
}

function __reverse_n_forward_usage() {
    const s = seq(array_random(), "s1");
    const r = reverse_n_forward(begin(s), size(s));
    print(s);
}

function __reverse_n_forward_attributes() {
}
