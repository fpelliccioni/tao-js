function partition_copy<T, U>(f: Iter<T>, l: Iter<T>, u: Iter<U>, t: Iter<U>, p: Predicate<T>) {
    const ps = predicate_source(p);
    return split_copy(f, l, u, t, ps);
}

function __partition_copy_usage() {
    const pred = predicate<number>(x => (x & 1) === 0);
    const s = sequence(array_random(), "s", pred);
    const even = sequence(array_all_equal(size(s), "-"), "even");
    const odd = sequence(array_all_equal(size(s), "-"), "odd");

    partition_copy(begin(s), end(s), begin(odd), begin(even), pred);

    print(even);
    print(odd);
}

function __partition_copy_attributes() {
}
