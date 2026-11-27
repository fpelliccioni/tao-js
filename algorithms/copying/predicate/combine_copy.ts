function combine_copy<T, U>(f: Iter<T>, l: Iter<T>, f2: Iter<T>, l2: Iter<T>, o: Iter<U>, r: Relation<Iter<T>>) {
    while ( ! equal(f, l) && ! equal(f2, l2)) {
        if (r(f2, f)) {
            sink(o, source(f2));
            f2 = successor(f2);
        } else {
            sink(o, source(f));
            f = successor(f);
        }
        o = successor(o);
    }
    return copy(f2, l2, copy(f, l, o));
}


function __combine_copy_usage() {
    const lti = relation<Iter<number>>(function lt(x, y) {return source(x) < source(y);});

    const a1 = sequence(array_random(8), "a1");
    const a2 = sequence(array_random(5), "a2");
    insertion_sort(begin(a1), end(a1), lt);
    insertion_sort(begin(a2), end(a2), lt);

    const r = sequence(array_all_equal(size(a1) + size(a2), '-'), "r");

    combine_copy(begin(a1), end(a1), begin(a2), end(a2), begin(r), lti);

    print(r);
}

function __combine_copy_attributes() {
}
