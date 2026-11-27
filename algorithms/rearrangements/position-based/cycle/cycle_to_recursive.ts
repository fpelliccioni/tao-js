function cycle_to_recursive<T>(i: Iter<T>, f: IteratorPermutation<T>) {
    const k = f(i);
    if (equal(k, i)) return;

    const buf = sequence(array_all_equal(1, "-"), "buf");
    const b = begin(buf);
    cycle_to_internal(i, k, f, b);
    sink(k, source(i));
    sink(i, source(b));
}

function __cycle_to_recursive_usage() {
    function cycle_to_internal<T>(i: Iter<T>, k: Iter<T>, f: IteratorPermutation<T>, b: Iter<T | string>) {
        const n = f(k);
        if (equal(n, i)) {
            sink(b, source(k));
            return;
        }
        cycle_to_internal(i, n, f, b);
        sink(n, source(k));
    }

    function successorMod10(i: Iter<number>) {
        const f = begin(s);
        let index = distance(begin(s), i);
        ++index;
        index = index % 5;
        const ret = successor(f, index);
        return ret;
    }

    const s = sequence(array_random(5), "s");
    cycle_to_recursive(begin(s), successorMod10);
    print(s);
}

function __cycle_to_recursive_attributes() {
}
