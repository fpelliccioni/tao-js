function cycle_to_2n_1(i, f) {
    var k = f(i);
    if (equal(k, i)) return;

    var buf = sequence(array_all_equal(1, "-"), "buf");
    var b = begin(buf);
    var b2 = i;

    sink(b, source(k));
    sink(k, source(b2));

    var res = swap_iters(b, b2);
    b = res[0];
    b2 = res[1];

    k = f(k);
    while ( ! equal(k, i)) {
        sink(b, source(k));
        sink(k, source(b2));

        var res = swap_iters(b, b2);
        b = res[0];
        b2 = res[1];

        k = f(k);
    }
    sink(i, source(b2));
}

function usage() {
    function swap_iters(a, b) {
        return [b, a];
    }

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
    cycle_to_2n_1(begin(s), successorMod10);
    print(s);
    print('...');
}

function attributes() {

}

