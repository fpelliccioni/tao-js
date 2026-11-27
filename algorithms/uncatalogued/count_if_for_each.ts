// Reference: Elements of Programming, ch. 6, p. 95, exercise 6.2.

// Doc (es): Cuenta los elementos de [f, l) que cumplen p usando el estado del procedimiento devuelto por for_each.
// Doc (en): Counts the elements in [f, l) that satisfy p using the state of the procedure returned by for_each.
function count_if_for_each<I extends Iter<unknown>>(
    f: I, l: I, p: Predicate<ValueOf<I>>,
): number {
    let count = 0;
    const tally = Object.assign(
        (value: ValueOf<I>) => { if (p(value)) ++count; },
        { total: () => count },
    );
    return for_each(f, l, tally).total();
}

function __count_if_for_each_usage() {
    const d = sequence([2, 3, 4, 7, 8]);
    const count = count_if_for_each(begin(d), end(d), even);
    print("Even elements: " + count);
}

function __count_if_for_each_attributes() {
}
