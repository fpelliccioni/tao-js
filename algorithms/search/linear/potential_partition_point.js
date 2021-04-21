function potential_partition_point(f, l, p) {
    var res = count_if_not_basis(f, l, p, f);
    return res;
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

    print("Lets verify:");
    var p = partition_semistable(f, l, even);
    if (equal(m, p)) {
        print("Yeah!");
    } else {
        print('Impossible, this line will never be executed.');
    }
}

function attributes() {

}

