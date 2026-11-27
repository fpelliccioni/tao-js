// Reference: Elements of Programming, ch. 6, p. 95 (count_if overloads).

function count_if<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    const res = count_if_basis(f, l, p, 0);
    return res;
}

function __count_if_usage() {
    const even = predicate(x => (x & 1) === 0);
    const d = sequence(array_random(), "d", even);
    const f = begin(d);
    const l = end(d);

    const n = count_if(f, l, even);

    print("Even numbers: ");
    print(n);
}

function __count_if_attributes() {
}
