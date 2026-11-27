// Reference: Elements of Programming, ch. 6, p. 102.

function partitioned<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    const it0 = find_if(f, l, p);
    const it1 = find_if_not(it0, l, p);
    return equal(it1, l);
}

function __partitioned_usage() {
    const even = predicate(x => (x & 1) === 0);
    const d = sequence(array_random(), "d", even, undefined, true);
    const f = begin(d);
    const l = end(d);

    if (partitioned(f, l, even)) {
        print('The sequence is already p-partitioned.');
    } else {
        print('The sequence is not p-partitioned, partitioning...');

        const p = partition_semistable(f, l, even);

        if (partitioned(f, l, even)) {
            print('Now the sequence is p-partitioned.');
        } else {
            print('Impossible, this line will never be executed.');
        }
    }
}

function __partitioned_attributes() {
}
