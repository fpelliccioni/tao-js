function lps(f, n, r) {
    var t = sequence(array_all_equal(n + 1, "0"), "t");
    sink(begin(t), -1);
    if (n == 1) return t;

    var i = 0;
    var j = -1;
    while (i < n) {
        while (j >= 0) {
            var ii = successor(f, i);
            var jj = successor(f, j);
            if (source(ii) == source(jj)) break;
            var kk = successor(begin(t), j);
            j = source(kk);
        }
        ++i;
        ++j;
        var kk = successor(begin(t), i);
        sink(kk, j);
    }

    return t;
}


function lps(f, n, r) {
    var t = sequence(array_all_equal(n, "0"), "t");
    if (n == 1) return t;

    var i = 0;
    var f1 = f;
    var f2 = successor(f);
    var f3 = begin(t);
    --n;
    while (n != 0) {
        if (source(f1) == source(f2)) {
            f3 = successor(f3);
            sink(f3, i + 1);
            ++i;
            f1 = successor(f1);
            f2 = successor(f2);
            --n;
        } else {
            f1 = f;
            i = 0;

            if (source(f3) == 0) {
                f2 = successor(f2);
                f3 = successor(f3);
                --n;
            }
        }
    }

    return t;
}

// var sub = sequence(array_from("dsgwadsgz"), "sub");
// var sub = sequence(array_from("abcdabeabf"), "sub");
// var sub = sequence(array_from("abcdeabfabc"), "sub");
// var sub = sequence(array_from("aabcadaabe"), "sub");
// var sub = sequence(array_from("aaaabaacd"), "sub");
// var sub = sequence(array_from("abcabcabc"), "sub");
var sub = sequence(array_from("abcxabcabc"), "sub");
var t = lps(begin(sub), size(sub), eq);
print(t);



function find_subsequence_n_naive(f, fn, s, sn, r) {
    if (sn == 0) return [f, fn];

    var t = lps(s, sn, r);

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
        --fn;
        f = successor(f);
    }

    return [f, fn];
}

function usage() {


    var seq = sequence(array_from("Hello, World!"), "seq");
    var sub = sequence(array_from("????"), "sub");

    var r = find_subsequence_n_naive(begin(seq), size(seq), begin(sub), size(sub), eq);
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

