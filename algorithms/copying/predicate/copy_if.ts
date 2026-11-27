// Reference: Elements of Programming, ch. 9, p. 156.

function copy_if<T, U>(f: Iter<T>, l: Iter<T>, o: Iter<U>, p: Predicate<T>) {
    const ps = predicate_source(p);
    return copy_select(f, l, o, ps);
}

function __copy_if_usage() {
    const even = predicate(x => (x & 1) === 0);
    const s = sequence(array_random(), "s", even);
    const z = sequence(array_all_equal(size(s), "-"));

    copy_if(begin(s), end(s), begin(z), even);

    print(z);
}

function __copy_if_attributes() {
}
