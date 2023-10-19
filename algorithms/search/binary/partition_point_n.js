function partition_point_n(f, n, p) {
    while (n != 0) {
        var h = half(n);
        var m = successor(f, h);

        if (p(source(m))) {
            n = h;
        } else {
            n -= h + 1;
            f = successor(m);
        }
    }
    return f;
}

function usage() {
    var even = predicate(function even(x) { return (x & 1) == 0; });

    var d = sequence([1, 5, 1, 1, 3, 3, 3, 7, 3, 2, 6, 4], "d", even);

    var p = partition_point_n(begin(d), size(d), even);
    print('partition point: ' + source(p));

}

function attributes() {

}

