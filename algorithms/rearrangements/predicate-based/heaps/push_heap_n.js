function push_heap_n(f, n) {
    while (n > 1) {
        var l = successor(f, n - 1);
        var pidx = parent(n - 1);
        var p = successor(f, pidx);

        if (source(l) <= source(p)) {
            return;
        }
        iter_swap(p, l);
        n = pidx + 1;
    }
}

function usage() {
    function parent(n) {
        return half(n - 1);
    }    
    
    //var s = sequence(array_random(), "s", undefined, undefined, false, true);
    //var s = sequence([10, 8, 6, 4, 5, 3, 1], "s", undefined, undefined, false, true);
    var s = sequence([10, 8, 6, 4, 5, 3, 7], "s", undefined, undefined, false, true);
    //var s = sequence([10, 8, 6, 4, 5, 3, 11], "s", undefined, undefined, false, true);

    var f = begin(s);
    var n = size(s);

    print(s);
    push_heap_n(f, n);
    print(s);
}

function attributes() {

}

