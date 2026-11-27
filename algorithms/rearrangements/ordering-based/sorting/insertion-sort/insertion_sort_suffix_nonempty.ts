function insertion_sort_suffix_nonempty<T>(f: Iter<T>, l: Iter<T>, r: Relation<T>) {
    //precondition: ! equal(f, l)
    let c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert_unguarded(c, r);
        c = successor(c);
    }
}

function __insertion_sort_suffix_nonempty_usage() {
}

function __insertion_sort_suffix_nonempty_attributes() {
}
