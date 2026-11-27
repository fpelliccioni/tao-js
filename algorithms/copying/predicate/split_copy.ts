// Reference: Elements of Programming, ch. 9, pp. 156–157.

//u from untrue
function split_copy<T, U>(f: Iter<T>, l: Iter<T>, u: Iter<U>, t: Iter<U>, p: Predicate<Iter<T>>) {
    while ( ! equal(f, l)) {
        if (p(f)) {
            sink(t, source(f));
            t = successor(t);
        } else {
            sink(u, source(f));
            u = successor(u);
        }
        f = successor(f);
    }
    return [u, t];
}

function __split_copy_usage() {
    const pred = predicate<Iter<number>>(function even(x) { return (source(x) & 1) == 0; });
    const s = sequence(array_random(), "s");
    const even = sequence(array_all_equal(size(s), "-"), "even");
    const odd = sequence(array_all_equal(size(s), "-"), "odd");

    split_copy(begin(s), end(s), begin(odd), begin(even), pred);

    print(even);
    print(odd);
}

function __split_copy_attributes() {
}
