function insertion_sort_classic<T>(f: Iter<T>, l: Iter<T>, r: Relation<T>) {
    if (equal(f, l)) return;
    let c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function __insertion_sort_classic_usage() {
    function linear_insert<T>(f: Iter<T>, c: Iter<T>, r: Relation<T>) {
        if ( ! call(r, c, predecessor(c))) return c;

        increment_custom_stat("Misplaced elements");

        const value = source_move(c);
        sink_move(c, source(predecessor(c)));
        const d = shift_right_while(f, predecessor(c), bind(r, value));
        sink_move(d, value);

        register_move_distance(distance(d, c));
        return d;
    }

    register_custom_stat("Misplaced elements");

    // const s = seq(array_random(), "s", lt);
    const s = seq(array_descending(), lt);

    insertion_sort_classic(begin(s), end(s), lt);
    print(s);
}

function __insertion_sort_classic_attributes() {
}
