function sort3<T>(x: Iter<T>, y: Iter<T>, z: Iter<T>, c: Relation<T>) {
    let r = 0;
    if ( ! call(c, y, x)) {        // if x <= y
        if ( ! call(c, z, y)) {    // if y <= z
            return r;              // x <= y && y <= z
        }
                                   // x <= y && y > z
        iter_swap(y, z);           // x <= z && y < z
        r = 1;
        if (call(c, y, x)) {       // if x > y
            iter_swap(x, y);       // x < y && y <= z
            r = 2;
        }
        return r;                  // x <= y && y < z
    }
    if (call(c, z, y)) {           // x > y, if y > z
        iter_swap(x, z);           // x < y && y < z
        r = 1;
        return r;
    }
    iter_swap(x, y);               // x > y && y <= z
    r = 1;                         // x < y && x <= z
    if (call(c, z, y)) {           // if y > z
        iter_swap(y, z);           // x <= y && y < z
        r = 2;
    }
    return r;
}                                  // x <= y && y <= z

function __sort3_usage() {
    register_custom_stat("Misplaced elements");

    const s = sequence([1, 2, 3, 4, 5], lt);
    // var s = sequence([1, 2], "s", lt);
    // const s = sequence(array_random(), "s", lt);
    // var s = sequence(array_all_equal(), "s", lt);
    // var s = sequence(array_ascending(), "s", lt);
    // var s = sequence(array_descending(), "s", lt);

    print(s);
    sort3(begin(s), successor(begin(s)), successor(begin(s), 2), lt);
    print(s);

}

function __sort3_attributes() {
}
