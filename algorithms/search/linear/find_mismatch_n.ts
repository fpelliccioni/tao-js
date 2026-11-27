// Reference: Elements of Programming, ch. 6, p. 100, exercise 6.5.

function find_mismatch_n<I extends Iter<unknown>, J extends Iter<ValueOf<I>>>(
    f0: I, n0: number, f1: J, n1: number, r: Relation<ValueOf<I>>,
): [left: I, right: J, remainingLeft: number, remainingRight: number] {
    pre(() => Number.isSafeInteger(n0) && n0 >= 0 && Number.isSafeInteger(n1) && n1 >= 0, "Counts must be nonnegative safe integers.");

    while (n0 !== 0 && n1 !== 0 && r(source(f0), source(f1))) {
        f0 = successor(f0);
        f1 = successor(f1);
        --n0;
        --n1;
    }
    return [f0, f1, n0, n1];
}

function __find_mismatch_n_usage() {
    const left = sequence([2, 4, 6, 8]);
    const right = sequence([2, 4, 7]);
    const [a, b, remainingLeft, remainingRight] = find_mismatch_n(begin(left), size(left), begin(right), size(right), eq);

    if (remainingLeft === 0 || remainingRight === 0) {
        print("No mismatch in the common prefix.");
    } else {
        const leftValue = source(a);
        const rightValue = source(b);
        print("First mismatch: " + leftValue + " and " + rightValue);
        print("Elements remaining (left, right): " + remainingLeft + ", " + remainingRight);
    }
}

function __find_mismatch_n_attributes() {
}
