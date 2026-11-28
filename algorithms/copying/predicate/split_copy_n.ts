// Reference: Elements of Programming, ch. 9, pp. 156–157 (counted variant in eop.h).

//u from untrue
function split_copy_n<T, U>(f: Iter<T>, n: number, u: Iter<U>, t: Iter<U>, p: Predicate<Iter<T>>) {
    while (n != 0) {
        if (p(f)) {
            sink(t, source(f));
            t = successor(t);
        } else {
            sink(u, source(f));
            u = successor(u);
        }
        f = successor(f);
        --n;
    }
    return [f, u, t];
}

function __split_copy_n_usage() {
    const evenAt = predicate_source(even);
    const s = seq(array_random());
    const evens = seq(array_all_equal(size(s), "-"));
    const odds = seq(array_all_equal(size(s), "-"));

    split_copy_n(begin(s), size(s), begin(odds), begin(evens), evenAt);

    print(evens);
    print(odds);
}

function __split_copy_n_attributes() {
}
