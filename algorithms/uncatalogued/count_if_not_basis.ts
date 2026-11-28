// Reference: Elements of Programming, ch. 6, p. 95 (negated count described in the text; implementation in eop.h).

function count_if_not_basis<T, U extends number | Iter<unknown>>(f: Iter<T>, l: Iter<T>, p: Predicate<T>, j: U) {
    while ( ! equal(f, l)) {
        if ( ! p(source(f))) {
            j = successor(j);
        }
        f = successor(f);
    }
    return j;
}

function __count_if_not_basis_usage() {
    const d = seq(array_random(), even);
    const c = seq(array_ascending());

    const f = begin(d);
    const l = end(d);

    let j = begin(c);
    j = count_if_not_basis(f, l, even, j);

    print("Odd numbers: ");
    const offset = distance(begin(c), j);
    print(offset);
}

function __count_if_not_basis_attributes() {
}
