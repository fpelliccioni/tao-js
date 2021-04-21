function partition_copy(f, l, r_b, r_g, p) {
    while ( ! equal(f, l)) {
        if (p(source(f))) {
            sink(r_g, source(f));
            r_g = successor(r_g);
        } else {
            sink(r_b, source(f));
            r_b = successor(r_b);
        }
        f = successor(f);
    }
    return [r_b, r_g];
}

function usage() {
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even, undefined, true);
    var bad = sequence(new Array(size(d)), "bad");
    var good = sequence(new Array(size(d)), "good");

    var res = partition_copy(begin(d), end(d), begin(bad), begin(good), even);

    var fg = res[0];
    var fb = res[1];

    print('...');
}

function attributes() {

}
