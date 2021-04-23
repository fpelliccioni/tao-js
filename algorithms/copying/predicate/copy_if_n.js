function copy_if_n(f, n, o, p) {
    var ps = predicate_source(p);
    return copy_select(f, n, o, ps);
}

function usage() {
    function predicate_source(p) {
        return function(x) { return p(source(x)); }
    }

    var even = predicate(function even(x) { return (x & 1) == 0; });
    var s = sequence(array_random(), "s", even);
    var z = sequence(array_all_equal(size(s), "-"), "z");

    copy_if_n(begin(s), size(s), begin(z), even);

    print(z);
}

function attributes() {

}
