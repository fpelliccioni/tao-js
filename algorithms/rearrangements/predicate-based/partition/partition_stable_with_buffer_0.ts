function partition_stable_with_buffer_0<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>, b: Iter<T>) {
    const tmp = partition_copy(f, l, f, b, p);
    const tf = tmp[0];
    const ts = tmp[1];
    copy(b, ts, tf);
    return tf;
}

function __partition_stable_with_buffer_0_usage() {
    const even = predicate<number>(x => (x & 1) === 0);
    const d = sequence(array_random(), "d", even);
    const buf = sequence(array_all_equal(size(d), 0), "buf");

    const p = partition_stable_with_buffer_0(begin(d), end(d), even, begin(buf));
    if ( ! equal(p, end(d))) {
        print('partition point: ' + source(p));
    }
}

function __partition_stable_with_buffer_0_attributes() {
}
