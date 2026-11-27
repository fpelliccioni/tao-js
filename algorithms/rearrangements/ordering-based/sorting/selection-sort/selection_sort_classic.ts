function selection_sort_classic<T>(f: Iter<T>, l: Iter<T>, r: Relation<T>) {
    // postcondition: is_sorted(f, l, r)
    while ( ! equal(f, l)) {
        const m = min_element(f, l, r);
        iter_swap(f, m);
        f = successor(f);
    }
}

function __selection_sort_classic_usage() {
    const s = sequence(array_random(), "s", lt);

    print(s);
    selection_sort_classic(begin(s), end(s), lt);
    print(s);
    function is_sorted<T>(f: Iter<T>, l: Iter<T>, r: Relation<T>) {
        if (equal(f, l)) return true;
        let next = successor(f);
        while (!equal(next, l)) {
            if (r(source(next), source(f))) return false;
            f = next;
            next = successor(next);
        }
        return true;
    }
    const sorted = is_sorted(begin(s), end(s), lt);
    print(sorted);


}

function __selection_sort_classic_attributes() {
}
