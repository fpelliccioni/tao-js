function push_heap_n(f, n, r) {
    while (n > 1) {
        var l = successor(f, n - 1);
        var pidx = parent(n - 1);
        var p = successor(f, pidx);

        if ( ! r(source(p) <= source(l))) {
            return;
        }
        iter_swap(p, l);
        n = pidx + 1;
    }
}

// a < b
// negate
// !(a < b) -> a >= b


// a <= b


// function push_heap_n(f, n) {
//     var ci = n - 1;
//     while (true) {
//         var pi = parent(ci);
//         var c = successor(f, ci);
//         var p = successor(f, pi);
//         var cv = source(c);
//         var pv = source(p);

//         if (pv <= cv) break;
//         sink(p, cv);
//         sink(c, pv);

//         if (pi == 0) break;
//         ci = pi;
//     }
// }

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
    push_heap_n(f, n, lt);
    print(s);
}

function attributes() {

}

