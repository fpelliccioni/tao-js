// Reference: Elements of Programming, ch. 9, p. 163.
// Reference: From Mathematics to Generic Programming, ch. 11, §11.2, pp. 201–203 (ch11.h).

function swap_ranges_bounded<T>(f0: Iter<T>, l0: Iter<T>, f1: Iter<T>, l1: Iter<T>) {
    while ( ! equal(f0, l0) && ! equal(f1, l1)) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
    }
    return [f0, f1];
}

function __swap_ranges_bounded_usage() {
    const s1 = sequence(array_random());
    const s2 = sequence(array_random(5));

    const r = swap_ranges_bounded(begin(s1), end(s1), begin(s2), end(s2));
    const f0 = r[0];
    const f1 = r[1];
}

function __swap_ranges_bounded_attributes() {
}
