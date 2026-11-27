function is_heap_until_n_0<T>(f: Iter<T>, n: number, r: Relation<T>) {
    let pi = 0;
    for (let ci = 1; ci < n; ++ci) {
        const c = successor(f, ci);
        const p = successor(f, pi);
        if (r(source(p), source(c))) {
            return ci;
        }

        if (even(ci)) {
            ++pi;
        }
    }
    return n;
}

function __is_heap_until_n_0_usage() {
    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 1], "s");
    const s = sequenceTree([10, 8, 6, 4, 5, 3, 7], "s");
    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 11], "s");

    const f = begin(s);
    const n = size(s);

    const i = is_heap_until_n_0(f, n, lt);
    print(i);
}

function __is_heap_until_n_0_attributes() {
}
