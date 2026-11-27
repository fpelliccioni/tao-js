// Reference: Elements of Programming, ch. 7, p. 124.

// Doc (es): Comprueba que ambos rangos tengan la misma longitud y que r considere equivalentes todos los pares correspondientes.
// Doc (en): Checks that the ranges have the same length and r considers every corresponding pair equivalent.
function lexicographical_equivalent<I extends Iter<unknown>, J extends Iter<ValueOf<I>>>(
    f0: I, l0: I, f1: J, l1: J, r: Relation<ValueOf<I>>,
): boolean {
    const [a, b] = find_mismatch(f0, l0, f1, l1, r);
    return equal(a, l0) && equal(b, l1);
}

function __lexicographical_equivalent_usage() {
    const sameDigitSum = relation<number>((a, b) => digitSum(a) === digitSum(b));
    const left = sequence([12, 23]);
    const right = sequence([21, 32], "right", undefined, "stream");
    const equivalent = lexicographical_equivalent(
        begin(left), end(left), begin(right), end(right), sameDigitSum,
    );
    print("Equivalent by digit sum: " + equivalent);
}

function __lexicographical_equivalent_attributes() {
}
