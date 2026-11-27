// Reference: Elements of Programming, ch. 9, p. 161, exercise 9.5 (companion implementation in eop.h).

function combine_copy_backward_n<T, U>(l: Iter<T>, n: number, l2: Iter<T>, n2: number, o: Iter<U>, r: Relation<Iter<T>>) {
    while (n != 0 && n2 != 0) {
        o = predecessor(o);
        if (r(predecessor(l2), predecessor(l))) {
            l = predecessor(l);
            --n;
            sink(o, source(l));
        } else {
            l2 = predecessor(l2);
            --n2;
            sink(o, source(l2));
        }
    }
    const res0 = copy_backward_n(l2, n2, o);
    o = res0[1];
    const res1 = copy_backward_n(l, n, o);
    o = res1[1];
    return [res1[0], res0[0], o];
}


function __combine_copy_backward_n_usage() {
    const lti = relation<Iter<number>>(function lt(x, y) {return source(x) < source(y);});

    const a1 = sequence(array_random(8), "a1");
    const a2 = sequence(array_random(5), "a2");
    insertion_sort(begin(a1), end(a1), gt);
    insertion_sort(begin(a2), end(a2), gt);

    const r = sequence(array_all_equal(size(a1) + size(a2), '-'), "r");

    const res = combine_copy_backward_n(end(a1), size(a1) - 3, end(a2), size(a2) - 2, end(r), lti);
    const l = res[0];
    const l2 = res[1];
    const o = res[2];

    print(r);
}

function __combine_copy_backward_n_attributes() {
}
