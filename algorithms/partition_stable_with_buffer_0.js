function partition_copy(f, l, r_b, r_g, p) {
    while ( ! equal(f, l)) {
        if (p(source(f))) {
            sink(r_g, source(f));
            r_g = successor(r_g);
        } else {
            sink(r_b, source(f));
            r_b = successor(r_b);
        }
        f = successor(f);
    }
    return [r_b, r_g];
}

function copy(f, l, o) {
    while ( ! equal(f, l)) {
        sink(o, source(f));
        o = successor(o);
        f = successor(f);
    }
}

function partition_stable_with_buffer_0(f, l, p, b) {
    var tmp = partition_copy(f, l, f, b, p);
    var tf = tmp[0];
    var ts = tmp[1];
    copy(b, ts, tf);
    return tf;
}

function usage() {
    
    
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even);
    var buf = sequence(new Array(size(d)), "buf");
    
    var p = partition_stable_with_buffer_0(begin(d), end(d), even, begin(buf));
    if ( ! equal(p, l)) {
        print('partition point: ' + source(p));
    }

}

function attributes() {

}

