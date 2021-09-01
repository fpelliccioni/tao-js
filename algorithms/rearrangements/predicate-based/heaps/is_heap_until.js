function is_heap_until_n(f, n, r) {
    var pi = 0;
    for (var ci = 1; ci < n; ++ci) {
        var c = successor(f, ci);
        var p = successor(f, pi);
        if (r(source(p), source(c))) {
            return ci;
        }
            
        if (even(ci)) {
            ++pi;
        }
    }
    return n;    
}

function usage() {

    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 1], "s");
    var s = sequenceTree([10, 8, 6, 4, 5, 3, 7], "s");
    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 11], "s");

    var f = begin(s);
    var n = size(s);

    var i = is_heap_until_n(f, n, lt);
    print(i);
}

function attributes() {

}

