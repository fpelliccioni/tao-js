// Reference: Elements of Programming, ch. 6, pp. 96–97 (value-based overload in eop.h).

// Doc (es): Combina los elementos de un rango no vacío de izquierda a derecha con op.
// Doc (en): Combines elements of a nonempty range from left to right using op.
function reduce_nonempty<I extends Iter<unknown>>(
    f: I, l: I, op: Operation<ValueOf<I>>,
): ValueOf<I> {
    pre(() => !equal(f, l), "The range must not be empty.");

    let result = source(f);
    f = successor(f);
    while (!equal(f, l)) {
        result = op(result, source(f));
        f = successor(f);
    }
    return result;
}

function __reduce_nonempty_usage() {
    const d = sequence([2, 3, 4], "d", undefined, "stream");
    const product = reduce_nonempty(begin(d), end(d), multiply);
    print("Product: " + product);
}

function __reduce_nonempty_attributes() {
}
