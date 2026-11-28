// Reference: Elements of Programming, ch. 10, p. 172.

function reverse_n_indexed<T>(f: Iter<T>, n: number) {
    let i = 0;
    --n;
    while (i < n) {
        iter_swap(successor(f, i), successor(f, n));
        ++i;
        --n;
    }
}

function __reverse_n_indexed_usage() {
    const s = seq(array_random(), "s1");
    reverse_n_indexed(begin(s), size(s));
    print(s);
}

function __reverse_n_indexed_attributes() {
}
