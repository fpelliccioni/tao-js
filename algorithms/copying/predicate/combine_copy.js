function combine_copy(f, l, f2, l2, o, r) {
    while ( ! equal(f, l) && ! equal(f2, l2)) {
        if (r(f2, f)) {
            sink(o, source(f2));
            f2 = successor(f2);
        } else {
            sink(o, source(f));
            f = successor(f);
        }
        o = successor(o);
    }
    return copy(f2, l2, copy(f, l, o));
}


function usage() {
    var lti = relation(function lt(x, y) {return source(x) < source(y);});

    var a1 = sequence(array_random(8), "a1");
    var a2 = sequence(array_random(5), "a2");
    insertion_sort(begin(a1), end(a1), lt);
    insertion_sort(begin(a2), end(a2), lt);

    var r = sequence(array_all_equal(size(a1) + size(a2), '-'), "r");

    combine_copy(begin(a1), end(a1), begin(a2), end(a2), begin(r), lti);

    print(r);
}

function attributes() {

}
