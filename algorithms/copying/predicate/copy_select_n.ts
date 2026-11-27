// Reference: Elements of Programming, ch. 9, pp. 155–156 (counted variant of copy_select).

function copy_select_n<T, U>(f: Iter<T>, n: number, o: Iter<U>, p: Predicate<Iter<T>>): [Iter<T>, Iter<U>] {
    while (n != 0) {
        if (p(f)) {
            sink(o, source(f));
            o = successor(o);
        }
        f = successor(f);
        --n;
    }
    return [f, o];
}

function __copy_select_n_usage() {
    const evenAt = predicate_source(even);
    const s = sequence(array_random());
    const z = sequence(array_all_equal(size(s), "-"));

    copy_select_n(begin(s), size(s), begin(z), evenAt);

    print(z);
}

function __copy_select_n_attributes() {
}
