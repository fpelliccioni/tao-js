function swap_ranges(f, l, f1) {
    while ( ! equal(f, l)) {
        exchange_values(f, f1);
        f = successor(f);
        f1 = successor(f1);
    }
    return f1;
}

function usage() {
    function exchange_values(x, y) {
        var t = source(x);
        sink(x, source(y));
        sink(y, t);
    }

    var s = sequence(array_ascending(), "s");
    var z = sequence(array_all_equal(size(s), '-'), "z");

    swap_ranges(successor(begin(s), 5), end(s), begin(z));

    print(z);
}

function attributes() {

}
