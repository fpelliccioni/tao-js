function copy_select_n(f, n, o, p) {
    while (n != 0) {
        if (p(f)) {
            sink(o, source(f));
            o = successor(o);
        }
        f = successor(f);
        --n;
    }
    return [f, o];
}

function usage() {
    var even = predicate(function even(x) { return (source(x) & 1) == 0; });
    var s = sequence(array_random(), "s");
    var z = sequence(array_all_equal(size(s), "-"), "z");

    copy_select_n(begin(s), size(s), begin(z), even);

    print(z);
}

function attributes() {

}
