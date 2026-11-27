// Reference: Elements of Programming, ch. 6, p. 109, exercise 6.9.

function palindrome_bidirectional<I extends BidirectionalIterator>(
    f: I, l: I, r: Relation<ValueOf<I>>,
): boolean {
    while (!equal(f, l)) {
        l = predecessor(l);
        if (equal(f, l)) return true;
        if (!r(source(f), source(l))) return false;
        f = successor(f);
    }
    return true;
}

function __palindrome_bidirectional_usage() {
    const word = sequence(array_from("level"));
    const palindrome = palindrome_bidirectional(begin(word), end(word), eq);
    print("Is a palindrome: " + palindrome);
}

function __palindrome_bidirectional_attributes() {
}
