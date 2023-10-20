function insertion_sort_backward(f, l, r) {
    if (equal(f, l)) return;
    l = predecessor(l);
    var c = l;
    while ( ! equal(c, f)) {
        c = predecessor(c);
        linear_insert_backward(c, l, r);
    }
}

function usage() {
    function linear_insert_backward(c, l, r) {
        // precondition: is_sorted(c, l, r) && current is a valid iterator
        var value = source(c);
        while ( ! equal(c, l) && r(source(successor(c)), value)) {
          sink(c, source(successor(c)));
          c = successor(c);
        }
        sink(c, value);
        return c;
    }

    var s = sequence(array_descending(), "s", undefined, "dll"); // doubly-linked list

    print(s);
    insertion_sort_backward(begin(s), end(s), lt);
    print(s);
}

function attributes() {

}

