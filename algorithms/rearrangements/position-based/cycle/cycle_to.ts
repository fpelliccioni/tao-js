function cycle_to<T>(i: Iter<T>, f: IteratorPermutation<T>) {
    let k = f(i);
    while ( ! equal(k, i)) {
        exchange_values(i, k);
        k = f(k);
    }
}

function __cycle_to_usage() {
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
    cycle_to(begin(s), successorMod10);
    print(s);
    print('...');
}

function __cycle_to_attributes() {
}
