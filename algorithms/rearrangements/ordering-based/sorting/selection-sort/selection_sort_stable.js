function selection_sort_stable(f, l, r) {
    while (! equal(f, l)) {
        var m = min_element(f, l, r);
        rotate_right_by_one(f, successor(m));
        f = successor(f);
    }
}

function usage() {
    var s = sequence(array_random(), "s", lt);
    print(s);
    selection_sort_stable(begin(s), end(s), lt);
    print(s);
}

function attributes() {

}

