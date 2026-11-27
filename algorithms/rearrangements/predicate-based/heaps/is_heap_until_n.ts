function is_heap_until_n<T>(f: Iter<T>, n: number, r: Relation<T>) {
    let p = f;
    for (let ci = 1; ci < n; ++ci) {
        const c = successor(f, ci);
        if (r(source(p), source(c))) {
            return ci;
        }

        if (even(ci)) {
            p = successor(p);
        }
    }
    return n;
}

function __is_heap_until_n_usage() {
    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 1], "s");
    const s = sequenceTree([10, 8, 6, 4, 5, 3, 7], "s");
    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 11], "s");

    const f = begin(s);
    const n = size(s);

    const i = is_heap_until_n(f, n, lt);
    print(i);
}

function __is_heap_until_n_attributes() {
}
