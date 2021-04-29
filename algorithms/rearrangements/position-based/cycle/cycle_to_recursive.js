function cycle_to_recursive(i, f) {
    var k = f(i);
    if (equal(k, i)) return;

    var buf = sequence(array_all_equal(1, "-"), "buf");
    var b = begin(buf);
    cycle_to_internal(i, k, f, b);
    sink(k, source(i));
    sink(i, source(b));
}

function usage() {
    function cycle_to_internal(i, k, f, b) {
        var n = f(k);
        if (equal(n, i)) {
            sink(b, source(k));
            return;
        }
        cycle_to_internal(i, n, f, b);
        sink(n, source(k));
    }

    function successorMod10(i) {
        var f = begin(s);
        var index = distance(begin(s), i);
        ++index;
        index = index % 5;
        var ret = successor(f, index);
        return ret;
    }

    var s = sequence(array_random(5), "s");
    print(s);
    cycle_to_recursive(begin(s), successorMod10);
    print(s);
    print('...');
}

function attributes() {

}

