function is_heap_until(f, l, r) {
    while (n > 1) {
        var l = successor(f, n - 1);
        var pidx = parent(n - 1);
        var p = successor(f, pidx);

        if ( ! r(source(p), source(l))) {
            return;
        }
        iter_swap(p, l);
        n = pidx + 1;
    }
}

function usage() {
    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 1], "s");
    var s = sequenceTree([10, 8, 6, 4, 5, 3, 7], "s");
    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 11], "s");

    var f = begin(s);
    var n = size(s);

    print(s);
    push_heap_n(f, n, lt);
    print(s);
}

function attributes() {

}

