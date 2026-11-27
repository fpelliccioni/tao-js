// Reference: Elements of Programming, ch. 9, p. 161.

function merge_copy_backward<T, U>(f: Iter<T>, l: Iter<T>, f2: Iter<T>, l2: Iter<T>, o: Iter<U>, r: Relation<T>) {
    const rs = relation_source(r);
    return combine_copy_backward(f, l, f2, l2, o, rs);
}


function __merge_copy_backward_usage() {
    const a1 = sequence(array_random(8));
    const a2 = sequence(array_random(5));
    insertion_sort(begin(a1), end(a1), gt);
    insertion_sort(begin(a2), end(a2), gt);

    const r = sequence(array_all_equal(size(a1) + size(a2), '-'));

    merge_copy_backward(begin(a1), end(a1), begin(a2), end(a2), end(r), lt);

    print(r);
}

function __merge_copy_backward_attributes() {
}
