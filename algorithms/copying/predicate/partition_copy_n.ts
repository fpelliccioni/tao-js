// Reference: Elements of Programming, ch. 9, p. 158 (counted variant in eop.h).

function partition_copy_n<T, U>(f: Iter<T>, n: number, u: Iter<U>, t: Iter<U>, p: Predicate<T>) {
    const ps = predicate_source(p);
    return split_copy_n(f, n, u, t, ps);
}

function __partition_copy_n_usage() {
    const pred = predicate((x: number) => (x & 1) === 0);
    const s = sequence(array_random(), "s", pred);
    const even = sequence(array_all_equal(size(s), "-"), "even");
    const odd = sequence(array_all_equal(size(s), "-"), "odd");

    partition_copy_n(begin(s), size(s), begin(odd), begin(even), pred);

    print(even);
    print(odd);
}

function __partition_copy_n_attributes() {
}
