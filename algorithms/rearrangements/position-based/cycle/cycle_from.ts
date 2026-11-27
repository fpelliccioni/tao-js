function cycle_from<T>(i: Iter<T>, f: IteratorPermutation<T>) {
    const tmp = source(i);
    let j = i;
    let k = f(i);
    while ( ! equal(k, i)) {
        sink(j, source(k));
        j = k;
        k = f(k);
    }
    sink(j, tmp);
}

function __cycle_from_usage() {
    function successorMod10(i: Iter<number>) {
        const f = begin(s);
        let index = distance(begin(s), i);
        ++index;
        index = index % 10;
        const ret = successor(f, index);
        return ret;
    }

    const s = sequence(array_random(), "s");
    print(s);
    cycle_from(begin(s), successorMod10);
    print(s);
    print('...');
}

function __cycle_from_attributes() {
}
