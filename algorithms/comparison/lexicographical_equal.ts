// Reference: Elements of Programming, ch. 7, p. 125.

function lexicographical_equal<I extends Iter<unknown>, J extends Iter<ValueOf<I>>>(
    f0: I, l0: I, f1: J, l1: J,
): boolean {
    return lexicographical_equivalent(f0, l0, f1, l1, eq);
}

function __lexicographical_equal_usage() {
    const left = sequence(["a", "b"]);
    const right = sequence(["a", "b", "c"]);
    const same = lexicographical_equal(begin(left), end(left), begin(right), end(right));
    print("Equal ranges: " + same);
}

function __lexicographical_equal_attributes() {
}
