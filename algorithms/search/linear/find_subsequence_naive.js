function find_subsequence_naive(f, l, sf, sl, r) {
    if (equal(sf, sl)) return f;

    while (true) {
        var tf = f;
        var ts = sf;
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

function usage() {


    var seq = sequence(array_from("Hello, World!"), "seq", undefined, "sll"); // singly-linked list
    var sub = sequence(array_from("????"), "sub", undefined, "sll");

    var it = find_subsequence_naive(begin(seq), end(seq), begin(sub), end(sub), eq);

    if (equal(it, end(seq))) {
        print("Subsequence not found");
    } else {
        print("Subsequence found at: ");
        print(distance(begin(seq), it));
    }
}

function attributes() {

}

