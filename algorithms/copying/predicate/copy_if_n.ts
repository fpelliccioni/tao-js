// Reference: Elements of Programming, ch. 9, p. 156 (counted variant of copy_if).

function copy_if_n<T, U>(f: Iter<T>, n: number, o: Iter<U>, p: Predicate<T>) {
    const ps = predicate_source(p);
    return copy_select_n(f, n, o, ps);
}

function __copy_if_n_usage() {
    const s = seq(array_random(), even);
    const z = seq(array_all_equal(size(s), "-"));

    copy_if_n(begin(s), size(s), begin(z), even);

    print(z);
}

function __copy_if_n_attributes() {
}
