function selection_sort_stable<T>(f: Iter<T>, l: Iter<T>, r: Relation<T>) {
    while (! equal(f, l)) {
        const m = min_element(f, l, r);
        rotate_right_by_one(f, successor(m));
        f = successor(f);
    }
}

function __selection_sort_stable_usage() {
    const s = sequence(array_random(), "s", lt);
    selection_sort_stable(begin(s), end(s), lt);
    print(s);
}

function __selection_sort_stable_attributes() {
}
