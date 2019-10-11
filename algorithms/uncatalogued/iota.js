function iota(f, l, start, step) {
    if ( ! start) start = 0;
    if ( ! step) step = 1;

    while ( ! equal(f, l)) {
        sink(f, start);
        start += step;
        f = successor(f);
    }
    return start;
}

function usage() {
    
    
    var d1 = sequence(new Array(8), "d1");
    var d2 = sequence(new Array(5), "d2");
    
    var f = successor(begin(d1));
    var l = predecessor(end(d1));
    
    var r = iota(f, l);
    print(r);
    
    f = begin(d2);
    l = end(d2);
    
    
    r = iota(f, l, r);
    print(r);

}

function attributes() {

}

