// Reference: Elements of Programming, ch. 7, p. 127.

// Doc (es): Compara dos rangos usando la relación de orden r. Decide el primer par que difiere. Si uno es prefijo propio del otro, va primero el más corto.
// Doc (en): Compares two ranges using the ordering relation r. The first differing pair decides. A proper prefix precedes the longer range.
function lexicographical_compare<I extends Iter<unknown>, J extends Iter<ValueOf<I>>>(
    f0: I, l0: I, f1: J, l1: J, r: Relation<ValueOf<I>>,
): boolean {
    while (true) {
        if (equal(f1, l1)) return false;
        if (equal(f0, l0)) return true;

        const a = source(f0);
        const b = source(f1);
        if (r(a, b)) return true;
        if (r(b, a)) return false;

        f0 = successor(f0);
        f1 = successor(f1);
    }
}

function __lexicographical_compare_usage() {
    const left = seq([9, 7, 1]);
    const right = seq([9, 5, 8]);
    const before = lexicographical_compare(begin(left), end(left), begin(right), end(right), gt);
    print("Left comes first in descending order: " + before);
}

function __lexicographical_compare_attributes() {
}
