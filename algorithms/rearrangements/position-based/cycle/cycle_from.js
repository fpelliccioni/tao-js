function cycle_from(i, f) {
    var tmp = source(i);
    var j = i;
    var k = f(i);
    while ( ! equal(k, i)) {
        sink(j, source(k));
        j = k;
        k = f(k);
    }
    sink(j, tmp);
}

function usage() {
    var s = sequence(array_random(), "s");
    print(s);
    rotate_bidirectional(begin(s), successor(begin(s), 3), end(s));
    print(s);
    print('...');
}

function attributes() {

}

