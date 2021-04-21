function partitioned(f, l, p) {
    var it = find_if_not(find_if(f, l, p), l, p);
    return equal(it, l);
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
            print('Not the sequence is p-partitioned.');
        } else {
            print('Impossible, this line will never be executed.');
        }
    }
}

function attributes() {

}

