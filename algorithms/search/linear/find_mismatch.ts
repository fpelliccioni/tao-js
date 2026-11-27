// Reference: Elements of Programming, ch. 6, pp. 99–100 (bounded ranges; see exercise 6.5).

function find_mismatch<I extends Iter<unknown>, J extends Iter<ValueOf<I>>>(
    f0: I, l0: I, f1: J, l1: J, r: Relation<ValueOf<I>>,
): [I, J] {
    while (!equal(f0, l0) && !equal(f1, l1) && r(source(f0), source(f1))) {
        f0 = successor(f0);
        f1 = successor(f1);
    }
    return [f0, f1];
}

function __find_mismatch_usage() {
    const left = sequence([2, 4, 6, 8]);
    const right = sequence([2, 4, 7, 8]);
    const [a, b] = find_mismatch(begin(left), end(left), begin(right), end(right), eq);

    if (equal(a, end(left)) || equal(b, end(right))) {
        print("No mismatch in the common prefix.");
    } else {
        const leftValue = source(a);
        const rightValue = source(b);
        print("First mismatch: " + leftValue + " and " + rightValue);
    }
}

function __find_mismatch_attributes() {
}
