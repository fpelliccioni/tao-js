function copy_select(f, l, o, p) {
    while ( ! equal(f, l)) {
        if (p(f)) {
            sink(o, source(f));
            o = successor(o);
        }
        f = successor(f);
    }
    return o;
}

function usage() {
    var even = predicate(function even(x) { return (source(x) & 1) == 0; });
    var s = sequence(array_random(), "s");
    var z = sequence(array_all_equal(size(s), "-"), "z");

    copy_select(begin(s), end(s), begin(z), even);

    print(z);
}

function attributes() {

}
