function lps_fill(f, n, o, r) {
    var i = 0;
    var f1 = f;
    var f2 = successor(f);
    --n;
    var adv = true;
    while (n != 0) {
        if (r(source(f1), source(f2))) {
            o = successor(o);
            sink(o, i + 1);
            ++i;
            f1 = successor(f1);
            f2 = successor(f2);
            --n;
            adv = false;
        } else {
            f1 = f;
            i = 0;

            if (adv) {
                f2 = successor(f2);
                o = successor(o);
                --n;
            }

            adv = true;
        }
    }
}

function lps(f, n, r) {
    var t = sequence(array_all_equal(n, "0"), "t");
    if (n == 1) return t;
    lps_fill(f, n, begin(t), r);
    return t;
}

function usage() {
    // var sub = sequence(array_from("dsgwadsgz"), "sub");          //000001230
    // var sub = sequence(array_from("abcdabeabf"), "sub");         //0000120120
    // var sub = sequence(array_from("abcdabaabf"), "sub");         //0000121120
    // var sub = sequence(array_from("abcdeabfabc"), "sub");        //00000120123
    // var sub = sequence(array_from("aabcadaabe"), "sub");         //0100101230
    // var sub = sequence(array_from("aaaabaacd"), "sub");          //012301200
    // var sub = sequence(array_from("abcabcabc"), "sub");          //000123456
    // var sub = sequence(array_from("abcxabcabc"), "sub");         //0000123123
    var sub = sequence(array_from("aabaaba"), "sub");               //0101234
    var t = lps(begin(sub), size(sub), eq);
    print(t);
}

function attributes() {

}
