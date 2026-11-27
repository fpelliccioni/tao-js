// Reference: Elements of Programming, ch. 7, p. 128.

function lexicographical_less<I extends Iter<unknown>, J extends Iter<ValueOf<I>>>(
    f0: I, l0: I, f1: J, l1: J,
): boolean {
    return lexicographical_compare(f0, l0, f1, l1, lt);
}

function __lexicographical_less_usage() {
    const left = sequence(["a", "b"]);
    const right = sequence(["a", "b", "c"]);
    const before = lexicographical_less(begin(left), end(left), begin(right), end(right));
    print("The shorter prefix comes first: " + before);
}

function __lexicographical_less_attributes() {
}
