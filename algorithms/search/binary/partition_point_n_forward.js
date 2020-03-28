function partition_point_n_forward(f, n, p) {
    var t = n;
    while (n != 0) {
        var h = half_nonnegative(n);
        var m = successor(f, h);

        if (p(source(m))) {
            n = h;
        } else {
            n -= h + 1;
            t -= h + 1;
            f = successor(m);
        }
    }
    return [f, t];
}

function usage() {
    var eq3 = predicate(function eq3(x) {return x == 3;});
    var lt3 = predicate(function lt3(x) {return x < 3;});
    var gte3 = predicate(function gte3(x) {return x >= 3;});
    
    var d = sequence([1, 5, 1, 1, 3, 3, 3, 7, 3, 2, 6, 4], "d", eq3);
    
    var lb = partition_point_n_forward(begin(d), size(d), lt3);
    var ub = partition_point_n_forward(lb[0], lb[1], gte3);

    var f = lb[0];
    var l = ub[0];

    while ( ! equal(f, l)) {
        print(source(f) + ", ");
    }
}

function attributes() {

}

