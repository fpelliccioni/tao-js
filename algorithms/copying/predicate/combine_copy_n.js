function combine_copy_n(f, n, f2, n2, o, r) {
    while (n != 0 && n2 != 0) {
        if (r(f2, f)) {
            sink(o, source(f2));
            f2 = successor(f2);
            --n2;
        } else {
            sink(o, source(f));
            f = successor(f);
            --n;
        }
        o = successor(o);
    }
    var res0 = copy_n(f, n, o);
    o = res0[1];
    var res1 = copy_n(f2, n2, o);
    o = res1[1];
    return [res0[0], res1[0], o];
}


function usage() {
    var lti = relation(function lt(x, y) {return source(x) < source(y);});

    var a1 = sequence(array_random(8), "a1");
    var a2 = sequence(array_random(5), "a2");
    insertion_sort(begin(a1), end(a1), lt);
    insertion_sort(begin(a2), end(a2), lt);

    var r = sequence(array_all_equal(size(a1) + size(a2), '-'), "r");

    var res = combine_copy_n(begin(a1), size(a1) - 3, begin(a2), size(a2) - 2, begin(r), lti);
    var f = res[0];
    var f2 = res[1];
    var o = res[2];

    print(r);
}

function attributes() {

}
