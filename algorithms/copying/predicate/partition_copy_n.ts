// Reference: Elements of Programming, ch. 9, p. 158 (counted variant in eop.h).

function partition_copy_n<T, U>(f: Iter<T>, n: number, u: Iter<U>, t: Iter<U>, p: Predicate<T>) {
    const ps = predicate_source(p);
    return split_copy_n(f, n, u, t, ps);
}

function __partition_copy_n_usage() {
    const s = sequence(array_random(), "s", even);
    const evens = sequence(array_all_equal(size(s), "-"));
    const odds = sequence(array_all_equal(size(s), "-"));

    partition_copy_n(begin(s), size(s), begin(odds), begin(evens), even);

    print(evens);
    print(odds);
}

function __partition_copy_n_attributes() {
}
