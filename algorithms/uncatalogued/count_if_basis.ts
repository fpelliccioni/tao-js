// Reference: Elements of Programming, ch. 6, p. 95 (count_if overloads).

function count_if_basis<T, U extends number | Iter<unknown>>(f: Iter<T>, l: Iter<T>, p: Predicate<T>, j: U) {
    while ( ! equal(f, l)) {
        if (p(source(f))) {
            j = successor(j);
        }
        f = successor(f);
    }
    return j;
}

function __count_if_basis_usage() {
    const d = sequence(array_random(), "d", even);
    const c = sequence(array_ascending());

    const f = begin(d);
    const l = end(d);

    let j = begin(c);
    j = count_if_basis(f, l, even, j);

    print("Even numbers: ");
    const offset = distance(begin(c), j);
    print(offset);
}

function __count_if_basis_attributes() {
}
