// Reference: Elements of Programming, ch. 6, pp. 97–98 (value-based overload in eop.h).

// Doc (es): Combina los elementos de [f, l) distintos de z. Si el rango está vacío o solo contiene z, devuelve z.
// Doc (en): Combines elements in [f, l) that differ from z. Returns z when the range is empty or contains only z.
function reduce_nonzeroes<I extends Iter<unknown>>(
    f: I, l: I, op: Operation<ValueOf<I>>, z: ValueOf<I>,
): ValueOf<I> {
    let result;
    do {
        if (equal(f, l)) return z;
        result = source(f);
        f = successor(f);
    } while (result === z);

    while (!equal(f, l)) {
        const value = source(f);
        if (value !== z) result = op(result, value);
        f = successor(f);
    }
    return result;
}

function __reduce_nonzeroes_usage() {
    const d = sequence([0, 2, 0, 4, 0, 8]);
    const sum = reduce_nonzeroes(begin(d), end(d), add, 0);
    print("Sum after skipping zeroes: " + sum);
}

function __reduce_nonzeroes_attributes() {
}
