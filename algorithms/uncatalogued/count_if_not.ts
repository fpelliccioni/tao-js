// Reference: Elements of Programming, ch. 6, p. 95 (negated count described in the text; implementation in eop.h).

function count_if_not<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    const res = count_if_not_basis(f, l, p, 0);
    return res;
}

function __count_if_not_usage() {
    const d = sequence(array_random(), "d", even);
    const f = begin(d);
    const l = end(d);

    const n = count_if_not(f, l, even);

    print("Odd numbers: ");
    print(n);
}

function __count_if_not_attributes() {
}
