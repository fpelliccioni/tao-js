function potential_partition_point(f, l, p) {
    var j = f;
    while ( ! equal(f, l)) {
        if ( ! p(source(f))) {
            f = successor(f);
            j = successor(j);
        }
        f = successor(f);
    }
    return j;

    // var res = count_if_not_basis(f, l, p, f);
    // return res;
}

function usage() {


    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even, undefined, true);
    var f = begin(d);
    var l = end(d);
    var m = potential_partition_point(f, l, even);

    print("After p-partitioning the partition point would ocurr here:");
    print(distance(begin(c), m));
    print(source(m));
}

function attributes() {

}

