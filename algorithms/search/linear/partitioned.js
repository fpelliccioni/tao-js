function partitioned(f, l, p) {
    var it0 = find_if(f, l, p);
    var it1 = find_if_not(it0, l, p);
    return equal(it1, l);
}

function usage() {


    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even, undefined, true);
    var f = begin(d);
    var l = end(d);

    if (partitioned(f, l, even)) {
        print('The sequence is already p-partitioned.');
    } else {
        print('The sequence is not p-partitioned, partitioning...');

        var p = partition_semistable(f, l, even);

        if (partitioned(f, l, even)) {
            print('Now the sequence is p-partitioned.');
        } else {
            print('Impossible, this line will never be executed.');
        }
    }
}

function attributes() {

}

