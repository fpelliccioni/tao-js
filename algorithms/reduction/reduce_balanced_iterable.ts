// Reference: Elements of Programming, ch. 11, pp. 198–199 (balanced reduction over a generated range).

// Doc (es): Reduce un recorrido que produce valores uno a uno, agrupándolos en bloques balanceados sin alterar su orden. z marca los bloques vacíos.
// Doc (en): Reduces values produced one at a time into balanced groups while preserving their order. z marks empty blocks.
function reduce_balanced_iterable<T>(values: Iterable<T>, op: Operation<T>, z: T): T {
    // Precondition: the traversal is finite, op is partially associative,
    // and z can be skipped as the neutral value.
    const bins: T[] = [];
    for (let carry of values) {
        if (carry === z) continue;
        let i = 0;
        while (i < bins.length && bins[i] !== z) {
            carry = op(bins[i], carry);
            bins[i] = z;
            ++i;
        }
        if (i < bins.length || carry !== z) bins[i] = carry;
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

function __reduce_balanced_iterable_usage() {
    function* letters() {
        yield "a";
        yield "b";
        yield "c";
    }
    const concatenate = binary_operation<string>((l, r) => l + r);
    const result = reduce_balanced_iterable(letters(), concatenate, "");
    print("Concatenation: " + result);
}

function __reduce_balanced_iterable_attributes() {
}
