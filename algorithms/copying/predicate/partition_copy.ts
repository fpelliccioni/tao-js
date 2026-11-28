// Reference: Elements of Programming, ch. 9, p. 158.

function partition_copy<T, U>(f: Iter<T>, l: Iter<T>, u: Iter<U>, t: Iter<U>, p: Predicate<T>) {
    const ps = predicate_source(p);
    return split_copy(f, l, u, t, ps);
}

function __partition_copy_usage() {
    const s = seq(array_random(), even);
    const evens = seq(array_all_equal(size(s), "-"));
    const odds = seq(array_all_equal(size(s), "-"));

    partition_copy(begin(s), end(s), begin(odds), begin(evens), even);

    print(evens);
    print(odds);
}

function __partition_copy_attributes() {
}
