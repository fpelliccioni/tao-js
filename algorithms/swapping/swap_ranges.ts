// Reference: Elements of Programming, ch. 9, p. 163.
// Reference: From Mathematics to Generic Programming, ch. 11, §11.2, pp. 201–203 (ch11.h).

function swap_ranges<I extends Iter<unknown>, O extends Iter<unknown>>(f: I, l: I, f1: O): O {
    while ( ! equal(f, l)) {
        exchange_values(f, f1);
        f = successor(f);
        f1 = successor(f1);
    }
    return f1;
}

function __swap_ranges_usage() {
    function exchange_values<T, U>(x: Iter<T>, y: Iter<U>) {
        const t = source(x);
        sink(x, source(y));
        sink(y, t);
    }

    const s = seq(array_ascending());
    const z = seq(array_all_equal(size(s), '-'));

    swap_ranges(successor(begin(s), 5), end(s), begin(z));

    print(z);
}

function __swap_ranges_attributes() {
}
