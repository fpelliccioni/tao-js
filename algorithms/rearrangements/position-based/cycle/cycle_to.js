function cycle_to(i, f) {
    var k = f(i);
    while ( ! equal(k, i)) {
        exchange_values(i, k);
        k = f(k);
    }
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
    cycle_to(begin(s), successorMod10);
    print(s);
    print('...');
}

function attributes() {

}

