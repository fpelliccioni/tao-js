function find_subsequence_naive<T>(f: Iter<T>, l: Iter<T>, sf: Iter<T>, sl: Iter<T>, r: Relation<T>) {
    if (equal(sf, sl)) return f;

    while (true) {
        let tf = f;
        let ts = sf;
        while (true) {
            if (equal(tf, l)) return l;
            if (equal(ts, sl)) return f;
            if ( ! r(source(tf), source(ts))) break;
            ts = successor(ts);
            tf = successor(tf);
        }
        f = successor(f);
    }
    return f;
}

function __find_subsequence_naive_usage() {
    const haystack = seq(array_from("Hello, World!"), "seq", undefined, "sll"); // singly-linked list
    const sub = seq(array_from("????"), "sub", undefined, "sll");

    const it = find_subsequence_naive(begin(haystack), end(haystack), begin(sub), end(sub), eq);

    if (equal(it, end(haystack))) {
        print("Subsequence not found");
    } else {
        print("Subsequence found at: ");
        const offset = distance(begin(haystack), it);
        print(offset);
    }
}

function __find_subsequence_naive_attributes() {
}
