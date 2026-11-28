// Reference: Elements of Programming, ch. 9, p. 160.

function combine_copy_backward<T, U>(f: Iter<T>, l: Iter<T>, f2: Iter<T>, l2: Iter<T>, o: Iter<U>, r: Relation<Iter<T>>) {
    while ( ! equal(f, l) && ! equal(f2, l2)) {
        o = predecessor(o);
        if (r(predecessor(l2), predecessor(l))) {
            l = predecessor(l);
            sink(o, source(l));
        } else {
            l2 = predecessor(l2);
            sink(o, source(l2));
        }
    }
    return copy_backward(f, l, copy_backward(f2, l2, o));
}


function __combine_copy_backward_usage() {
    const lti = relation<Iter<number>>(function lt(x, y) {return source(x) < source(y);});

    const a1 = seq(array_random(8));
    const a2 = seq(array_random(5));
    insertion_sort(begin(a1), end(a1), gt);
    insertion_sort(begin(a2), end(a2), gt);

    const r = seq(array_all_equal(size(a1) + size(a2), '-'));

    combine_copy_backward(begin(a1), end(a1), begin(a2), end(a2), end(r), lti);

    print(r);
}

function __combine_copy_backward_attributes() {
}
