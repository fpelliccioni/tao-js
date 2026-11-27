function insertion_sort_classic_0<T>(f: Iter<T>, l: Iter<T>, r: Relation<T>) {
    if (equal(f, l)) return;
    let c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function __insertion_sort_classic_0_usage() {
    function linear_insert<T>(f: Iter<T>, c: Iter<T>, r: Relation<T>) {
        const value = source(c);
        while ( ! equal(f, c) && r(value, source(predecessor(c)))) {
          sink(c, source(predecessor(c)));
          c = predecessor(c);
        }
        sink(c, value);
        return c;
    }

    //const s = sequence(array_random(), "s", lt);
    const s = sequence([34, 5], "s", lt);
    print(s);
    insertion_sort_classic_0(begin(s), end(s), lt);
    print(s);
}

function __insertion_sort_classic_0_attributes() {
}
