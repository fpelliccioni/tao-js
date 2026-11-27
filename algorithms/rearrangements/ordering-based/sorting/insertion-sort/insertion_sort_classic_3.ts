function insertion_sort_classic_3<T>(f: Iter<T>, l: Iter<T>, r: Relation<T>) {
    if (equal(f, l)) return;
    let c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function __insertion_sort_classic_3_usage() {
    function linear_insert<T>(f: Iter<T>, c: Iter<T>, r: Relation<T>) {
        if ( ! r(source(c), source(predecessor(c)))) return c;

        const value = source_move(c);
        while (true) {
            sink_move(c, source(predecessor(c)));
            c = predecessor(c);

            if (equal(f, c)) break;
            if ( ! r(value, source(predecessor(c)))) break;
        }
        sink_move(c, value);
        return c;
    }

    const s = sequence(array_random(), "s", lt);
    print(s);
    insertion_sort_classic_3(begin(s), end(s), lt);
    print(s);

}

function __insertion_sort_classic_3_attributes() {
}
