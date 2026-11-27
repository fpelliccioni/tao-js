// Reference: Elements of Programming, ch. 11, p. 198 (value-based overload in eop.h).

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
    const concatenate = binary_operation(function concatenate(left: string, right: string) {
        return left + right;
    });
    const d = sequence(["a", "b", "c", "d", "e"]);
    print("Concatenation: " + reduce_balanced(begin(d), end(d), concatenate, ""));
}

function __reduce_balanced_attributes() {
}
