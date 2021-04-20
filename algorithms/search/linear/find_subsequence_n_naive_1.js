function find_subsequence_n_naive_1(f, fn, s, sn, r) {
    if (sn == 0) return [f, fn];

    while (true) {
        if (fn < sn) return [f, 0];

        var tf = f;
        var ts = s;
        var n = sn;
        while (true) {
            if (n == 0) return [f, fn];
            if ( ! r(source(tf), source(ts))) break;
            --n;
            ts = successor(ts);
            tf = successor(tf);
        }
        var skip = 1;
        if (n != sn) {
            var eqf = predicate(function eqf(x) { return r(x, source(tf)); });
            var it = find_if(s, ts, eqf);

            if (equal(it, ts)) {
                skip = sn - n;
            }
        }
        fn -= skip;
        f = successor(f, skip);
    }

    return [f, fn];
}

function usage() {


    var seq = sequence(array_from("Until death it is all life"), "seq");
    //var seq = sequence(array_from("Until dedead it is all life"), "seq");
    var sub = sequence(array_from("dead"), "sub");

    var r = find_subsequence_n_naive_1(begin(seq), size(seq), begin(sub), size(sub), eq);
    var it = r[0];
    var n = r[1];

    if (n == 0) {
        print("Subsequence not found");
    } else {
        print("Subsequence found at: ");
        print(distance(begin(seq), it));
    }
}

function attributes() {

}

