function find_subsequence_n_naive<T>(f: Iter<T>, fn: number, s: Iter<T>, sn: number, r: Relation<T>): [Iter<T>, number] {
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
        --fn;
        f = successor(f);
    }

    return [f, fn];
}

function __find_subsequence_n_naive_usage() {
    const seq = sequence(array_from("Hello, World!"), "seq");
    const sub = sequence(array_from("????"), "sub");

    const r = find_subsequence_n_naive(begin(seq), size(seq), begin(sub), size(sub), eq);
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

function __find_subsequence_n_naive_attributes() {
}
