// Reference: Elements of Programming, ch. 4, p. 52.

// Doc (es): Devuelve el tercero de 3 elementos en orden estable.
// Doc (en): Returns the third of 3 elements in stable order.
function select_2_3<T>(a: T, b: T, c: T, r: Relation<T>): T {
    // Precondition: r is a pure strict weak ordering.
    const entries: SelectionEntry<T>[] = [[a, 0], [b, 1], [c, 2]];
    const result = select_1_2(select_1_2(a, b, r), c, r);
    post(() => Object.is(result, selection_rank(entries, 2, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function __select_2_3_usage() {
    const byKey = relation<string>((l, r) => l[0] < r[0]);
    const result = select_2_3("1a", "2b", "2c", byKey);
    print("Selected: " + result);
}

function __select_2_3_attributes() {
}
