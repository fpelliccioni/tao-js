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
    const even = predicate<Iter<number>>(function even(x) { return (source(x) & 1) == 0; });
    const s = sequence(array_random(), "s");
    const z = sequence(array_all_equal(size(s), "-"), "z");

    copy_select_n(begin(s), size(s), begin(z), even);

    print(z);
}

function __copy_select_n_attributes() {
}
