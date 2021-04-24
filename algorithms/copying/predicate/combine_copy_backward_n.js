function combine_copy_backward_n(l, n, l2, n2, o, r) {
    while (n != 0 && n2 != 0) {
        o = predecessor(o);
        if (r(predecessor(l2), predecessor(l))) {
            l = predecessor(l);
            --n;
            sink(o, source(l));
        } else {
            l2 = predecessor(l2);
            --n2;
            sink(o, source(l2));
        }
    }
    var res0 = copy_backward_n(l2, n2, o);
    o = res0[1];
    var res1 = copy_backward_n(l, n, o);
    o = res1[1];
    return [res1[0], res0[0], o];
}


function usage() {
    var lti = relation(function lt(x, y) {return source(x) < source(y);});

    var a1 = sequence(array_random(8), "a1");
    var a2 = sequence(array_random(5), "a2");
    insertion_sort(begin(a1), end(a1), gt);
    insertion_sort(begin(a2), end(a2), gt);

    var r = sequence(array_all_equal(size(a1) + size(a2), '-'), "r");

    var res = combine_copy_backward_n(end(a1), size(a1) - 3, end(a2), size(a2) - 2, end(r), lti);
    var l = res[0];
    var l2 = res[1];
    var o = res[2];

    print(r);
}

function attributes() {

}
