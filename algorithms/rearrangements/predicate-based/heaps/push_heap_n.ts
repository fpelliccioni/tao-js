function push_heap_n<T>(f: Iter<T>, n: number, r: Relation<T>) {
    while (n > 1) {
        const l = successor(f, n - 1);
        const pidx = parent(n - 1);
        const p = successor(f, pidx);

        if ( ! r(source(p), source(l))) {
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

function __push_heap_n_usage() {
    function parent(n: number) {
        return half(n - 1);
    }

    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 1], "s");
    const s = sequenceTree([10, 8, 6, 4, 5, 3, 7], "s");
    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 11], "s");

    const f = begin(s);
    const n = size(s);

    print(s);
    push_heap_n(f, n, lt);
    print(s);
}

function __push_heap_n_attributes() {
}
