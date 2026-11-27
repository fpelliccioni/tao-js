// Reference: Elements of Programming, ch. 6, p. 109, exercise 6.9.

// Doc (es): Compara los elementos desde los extremos hacia el centro para determinar si el rango es un palíndromo según r.
// Doc (en): Compares elements from the ends toward the middle to decide whether the range is a palindrome under r.
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
