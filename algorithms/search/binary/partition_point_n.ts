// Reference: Elements of Programming, ch. 6, p. 104.
// Reference: From Mathematics to Generic Programming, ch. 10, p. 193 (ch10.h).

function partition_point_n<T>(f: Iter<T>, n: number, p: Predicate<T>) {
    while (n != 0) {
        const h = half(n);
        const m = successor(f, h);

        if (p(source(m))) {
            n = h;
        } else {
            n -= h + 1;
            f = successor(m);
        }
    }
    return f;
}

function __partition_point_n_usage() {
    const even = predicate(x => (x & 1) === 0);

    const d = sequence([1, 5, 1, 1, 3, 3, 3, 7, 3, 2, 6, 4], "d", even);

    const p = partition_point_n(begin(d), size(d), even);
    print('partition point: ' + source(p));

}

function __partition_point_n_attributes() {
}
