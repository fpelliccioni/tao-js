function combine_copy_backward(f, l, f2, l2, o, r) {
    while ( ! equal(f, l) && ! equal(f2, l2)) {
        o = predecessor(o);
        if (r(predecessor(l2), predecessor(l))) {
            l = predecessor(l);
            sink(o, source(l));
        } else {
            l2 = predecessor(l2);
            sink(o, source(l2));
        }
    }
    return copy_backward(f, l, copy_backward(f2, l2, o));
}


function usage() {
    var lti = relation(function lt(x, y) {return source(x) < source(y);});

    var a1 = sequence(array_random(8), "a1");
    var a2 = sequence(array_random(5), "a2");
    insertion_sort(begin(a1), end(a1), gt);
    insertion_sort(begin(a2), end(a2), gt);

    var r = sequence(array_all_equal(size(a1) + size(a2), '-'), "r");

    combine_copy_backward(begin(a1), end(a1), begin(a2), end(a2), end(r), lti);

    print(r);
}

function attributes() {

}
