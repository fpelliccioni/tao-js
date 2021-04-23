function predicate_source(p) {
    return function(x) { return p(source(x)); }
}

function copy_if(f, l, o, p) {
    var ps = predicate_source(p);
    return copy_select(f, l, o, ps);
}

function usage() {
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var s = sequence(array_random(), "s", even);
    var z = sequence(array_all_equal(size(s), "-"), "z");

    copy_if(begin(s), end(s), begin(z), even);

    print(z);
}

function attributes() {

}
