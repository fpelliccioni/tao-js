function insertion_sort_backward<T>(f: Iter<T>, l: Iter<T>, r: Relation<T>) {
    if (equal(f, l)) return;
    l = predecessor(l);
    let c = l;
    while ( ! equal(c, f)) {
        c = predecessor(c);
        linear_insert_backward(c, l, r);
    }
}

function __insertion_sort_backward_usage() {
    function linear_insert_backward<T>(c: Iter<T>, l: Iter<T>, r: Relation<T>) {
        // precondition: is_sorted(c, l, r) && current is a valid iterator
        const value = source(c);
        while ( ! equal(c, l) && r(source(successor(c)), value)) {
          sink(c, source(successor(c)));
          c = successor(c);
        }
        sink(c, value);
        return c;
    }

    const s = seq(array_descending(), "s", undefined, "dll"); // doubly-linked list

    print(s);
    insertion_sort_backward(begin(s), end(s), lt);
    print(s);
}

function __insertion_sort_backward_attributes() {
}
