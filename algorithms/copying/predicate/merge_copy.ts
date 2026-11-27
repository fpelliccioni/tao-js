function merge_copy<T, U>(f: Iter<T>, l: Iter<T>, f2: Iter<T>, l2: Iter<T>, o: Iter<U>, r: Relation<T>) {
    const rs = relation_source(r);
    return combine_copy(f, l, f2, l2, o, rs);
}


function __merge_copy_usage() {
    const a1 = sequence(array_random(8), "a1");
    const a2 = sequence(array_random(5), "a2");
    insertion_sort(begin(a1), end(a1), lt);
    insertion_sort(begin(a2), end(a2), lt);

    const r = sequence(array_all_equal(size(a1) + size(a2), '-'), "r");

    merge_copy(begin(a1), end(a1), begin(a2), end(a2), begin(r), lt);

    print(r);
}

function __merge_copy_attributes() {
}
