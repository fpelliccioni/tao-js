function insertion_sort_classic_2<T>(f: Iter<T>, l: Iter<T>, r: Relation<T>) {
    if (equal(f, l)) return;
    let c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function __insertion_sort_classic_2_usage() {
    function linear_insert<T>(f: Iter<T>, c: Iter<T>, r: Relation<T>) {
        const value = source_move(c);
        c = shift_right_while_nonempty(f, c, bind(r, value));
        sink_move(c, value);
        return c;
    }

    const s = seq(array_random(), lt);
    insertion_sort_classic_2(begin(s), end(s), lt);
    print(s);
}

function __insertion_sort_classic_2_attributes() {
}
