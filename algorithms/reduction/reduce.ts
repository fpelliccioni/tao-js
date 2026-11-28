// Reference: Elements of Programming, ch. 6, p. 97 (value-based overload in eop.h).

// Doc (es): Combina [f, l) de izquierda a derecha con op. Usa z como resultado del rango vacío.
// Doc (en): Combines [f, l) from left to right using op. Returns z for an empty range.
function reduce<I extends Iter<unknown>>(
    f: I, l: I, op: Operation<ValueOf<I>>, z: ValueOf<I>,
): ValueOf<I> {
    if (equal(f, l)) return z;
    return reduce_nonempty(f, l, op);
}

function __reduce_usage() {
    const d = seq([2, 3, 4]);
    const result = reduce(begin(d), end(d), multiply, 1);
    const empty = reduce(begin(d), begin(d), multiply, 1);
    print("Product: " + result + ". Empty range: " + empty + ".");
}

function __reduce_attributes() {
}
