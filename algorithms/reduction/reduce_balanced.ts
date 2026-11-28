// Reference: Elements of Programming, ch. 11, p. 198 (value-based overload in eop.h).

// Doc (es): Combina bloques de tamaño parecido sin cambiar el orden de los elementos. Requiere una operación asociativa y usa z como identidad.
// Doc (en): Combines similarly sized blocks while preserving element order. Requires an associative operation and uses z as its identity.
function reduce_balanced<I extends Iter<unknown>>(
    f: I, l: I, op: Operation<ValueOf<I>>, z: ValueOf<I>,
): ValueOf<I> {
    const bins: ValueOf<I>[] = [];
    while (!equal(f, l)) {
        let carry = source(f);
        if (carry !== z) {
            let i = 0;
            while (i < bins.length && bins[i] !== z) {
                carry = op(bins[i], carry);
                bins[i] = z;
                ++i;
            }
            if (i < bins.length || carry !== z) bins[i] = carry;
        }
        f = successor(f);
    }

    let i = 0;
    while (i < bins.length && bins[i] === z) ++i;
    if (i === bins.length) return z;

    let result = bins[i];
    for (++i; i < bins.length; ++i) {
        if (bins[i] !== z) result = op(bins[i], result);
    }
    return result;
}

function __reduce_balanced_usage() {
    const concatenate = binary_operation<string>((l, r) => l + r);
    const d = seq(["a", "b", "c", "d", "e"]);
    const concatenated = reduce_balanced(begin(d), end(d), concatenate, "");
    print("Concatenation: " + concatenated);
}

function __reduce_balanced_attributes() {
}
