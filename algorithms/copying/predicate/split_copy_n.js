//u from untrue
function split_copy_n(f, n, u, t, p) {
    while (n != 0) {
        if (p(f)) {
            sink(t, source(f));
            t = successor(t);
        } else {
            sink(u, source(f));
            u = successor(u);
        }
        f = successor(f);
        --n;
    }
    return [f, u, t];
}

function usage() {
    var pred = predicate(function even(x) { return (source(x) & 1) == 0; });
    var s = sequence(array_random(), "s");
    var even = sequence(array_all_equal(size(s), "-"), "even");
    var odd = sequence(array_all_equal(size(s), "-"), "odd");

    split_copy_n(begin(s), size(s), begin(odd), begin(even), pred);

    print(even);
    print(odd);
}

function attributes() {

}
