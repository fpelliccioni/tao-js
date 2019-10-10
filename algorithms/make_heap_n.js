function parent(i) {
    return Math.floor((i - 1) / 2);    
}

function push_heap_n(f, n) {
    var ci = n - 1;
    while (true) {
        var pi = parent(ci);
        var c = successor(f, ci);
        var p = successor(f, pi);
        var cv = source(c);
        var pv = source(p);

        if (pv <= cv) break;
        sink(p, cv);
        sink(c, pv);

        if (pi == 0) break;
        ci = pi;
    }
}

function make_heap_n(f, n) {
    // assert(n > 2); //other sizes handled outside
    var fpi = Math.floor((n - 3) / 2);
    var fp = successor(f, fpi);    //firstParent
    var frk = successor(f, (fpi + 1) * 2);  //firstRightKid

    for (;; fp = predecessor(fp), frk = predecessor(frk, 2)) {
        var lucifer = source(fp);
        var parent = fp;
        var rk = frk; //rightKid
        for (;;) {
            var jr = predecessor(rk, (source(predecessor(rk)) <= source(rk)));
            var crt = source(jr);
            if (lucifer <= crt) break;
            sink(parent, crt);
            parent = jr;
            // rk = (jr + 1) * 2;
            var rki = (distance(f, jr) + 1) * 2;
            // if (rki >= n) goto write;
            if (rki >= n) {
                sink(parent, lucifer);
                break;
            }
            rk = successor(f, rki);
        }

        // if (parent != fp) {
        if ( ! equal(parent, fp)) {
                sink(parent, lucifer);
        }

        // if (fp == 0) break;
        if (equal(fp, f)) break;
    }

    if (n & 1) return;
    push_heap_n(f, n);
}

function usage() {
    
    
    // var s = sequence(array_random(), "s");
    var s = sequence([24, 88, 59, 31, 91, 0, 87, 91, 40, 52], "s");
    
    print(s);
    make_heap_n(begin(s), size(s));
    print(s);

}

function attributes() {

}

