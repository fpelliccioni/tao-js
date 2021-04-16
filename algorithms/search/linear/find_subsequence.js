// naive version
function find_subsequence_n(f, fn, s, sn, r) {
    if (sn == 0) return [f, fn];

    while (true) {
        if (fn < sn) return [f, 0];

        var tf = f;
        var ts = s;
        var n = sn;
        while (true) {
            if (n == 0) return [f, fn];
            if ( ! r(source(tf), source(ts))) {
                break;
            }
            --n;
            ts = successor(ts);
            tf = successor(tf);
        }
        --fn;
        f = successor(f);
    }

    return [f, fn];
}

function usage() {


    var seq = sequence(array_from("Hello, World!"), "seq");
    var sub = sequence(array_from("????"), "sub");

    var r = find_subsequence_n(begin(seq), size(seq), begin(sub), size(sub), eq);
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

