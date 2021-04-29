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
    function successorMod10(i) {
        var f = begin(s);
        var index = distance(begin(s), i);
        ++index;
        index = index % 10;
        var ret = successor(f, index);
        return ret;
    }

    var s = sequence(array_random(), "s");
    print(s);
    cycle_from(begin(s), successorMod10);
    print(s);
    print('...');
}

function attributes() {

}

