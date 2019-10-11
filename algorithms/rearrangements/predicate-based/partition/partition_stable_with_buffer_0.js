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
