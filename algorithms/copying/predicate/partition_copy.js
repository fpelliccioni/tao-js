function partition_copy(f, l, u, t, p) {
    var ps = predicate_source(p);
    return split_copy(f, l, u, t, ps);
}

function usage() {
    function predicate_source(p) {
        return function(x) { return p(source(x)); }
    }

    var pred = predicate(function even(x) { return (x & 1) == 0; });
    var s = sequence(array_random(), "s", even);
    var even = sequence(array_all_equal(size(s), "-"), "even");
    var odd = sequence(array_all_equal(size(s), "-"), "odd");

    partition_copy(begin(s), end(s), begin(odd), begin(even), pred);

    print(even);
    print(odd);
}

function attributes() {

}
