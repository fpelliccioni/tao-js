// Reference: Elements of Programming, ch. 9, pp. 155–156.

function copy_select<T, U>(f: Iter<T>, l: Iter<T>, o: Iter<U>, p: Predicate<Iter<T>>) {
    while ( ! equal(f, l)) {
        if (p(f)) {
            sink(o, source(f));
            o = successor(o);
        }
        f = successor(f);
    }
    return o;
}

function __copy_select_usage() {
    const evenAt = predicate_source(even);
    const s = sequence(array_random());
    const z = sequence(array_all_equal(size(s), "-"));

    copy_select(begin(s), end(s), begin(z), evenAt);

    print(z);
}

function __copy_select_attributes() {
}
