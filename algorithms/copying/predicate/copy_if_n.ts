// Reference: Elements of Programming, ch. 9, p. 156 (counted variant of copy_if).

function copy_if_n<T, U>(f: Iter<T>, n: number, o: Iter<U>, p: Predicate<T>) {
    const ps = predicate_source(p);
    return copy_select_n(f, n, o, ps);
}

function __copy_if_n_usage() {
    const even = predicate<number>(x => (x & 1) === 0);
    const s = sequence(array_random(), "s", even);
    const z = sequence(array_all_equal(size(s), "-"), "z");

    copy_if_n(begin(s), size(s), begin(z), even);

    print(z);
}

function __copy_if_n_attributes() {
}
