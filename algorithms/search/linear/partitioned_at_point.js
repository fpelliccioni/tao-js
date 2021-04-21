function partitioned_at_point(f, m, l, p) {
    // precondition: readable_bounded_range(f, l) && m belongs to [f, l)
    var c0 = none(f, m, p);
    var c1 = all(m, l, p);
    return c0 && c1;
}

function usage() {


    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even, undefined, true);
    var f = begin(d);
    var l = end(d);
    var m = successor(f, 5);

    if (partitioned_at_point(f, m, l, even)) {
        print('The sequence is already p-partitioned at m.');
    } else {
        print('The sequence is not p-partitioned at m, partitioning...');

        var m2 = partition_semistable(f, l, even);

        if (partitioned_at_point(f, m2, l, even)) {
            print('Now the sequence is p-partitioned at m2.');
        } else {
            print('Impossible, this line will never be executed.');
        }
    }
}

function attributes() {

}

