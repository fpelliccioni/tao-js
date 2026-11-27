function find_subsequence_n_naive_1<T>(f: Iter<T>, fn: number, s: Iter<T>, sn: number, r: Relation<T>): [Iter<T>, number] {
    if (sn == 0) return [f, fn];

    while (true) {
        if (fn < sn) return [f, 0];

        let tf = f;
        let ts = s;
        let n = sn;
        while (true) {
            if (n == 0) return [f, fn];
            if ( ! r(source(tf), source(ts))) break;
            --n;
            ts = successor(ts);
            tf = successor(tf);
        }
        let skip = 1;
        if (n != sn) {
            const eqf = predicate<T>(function eqf(x) { return r(x, source(tf)); });
            const it = find_if(s, ts, eqf);

            if (equal(it, ts)) {
                skip = sn - n;
            }
        }
        fn -= skip;
        f = successor(f, skip);
    }

    return [f, fn];
}

function __find_subsequence_n_naive_1_usage() {
    const seq = sequence(array_from("Until death it is all life"));
    //var seq = sequence(array_from("Until dedead it is all life"), "seq");
    const sub = sequence(array_from("dead"));

    const r = find_subsequence_n_naive_1(begin(seq), size(seq), begin(sub), size(sub), eq);
    const it = r[0];
    const n = r[1];

    if (n == 0) {
        print("Subsequence not found");
    } else {
        print("Subsequence found at: ");
        const offset = distance(begin(seq), it);
        print(offset);
    }
}

function __find_subsequence_n_naive_1_attributes() {
}
