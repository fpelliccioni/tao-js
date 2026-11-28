// Reference: Elements of Programming, ch. 4, pp. 56–57.

// Doc (es): Devuelve el segundo de 4 elementos en orden estable. Ambos pares deben estar ordenados.
// Doc (en): Returns the second of 4 elements in stable order. Both pairs must already be sorted.
function select_1_4_ab_cd<T>(a: SelectionEntry<T>, b: SelectionEntry<T>, c: SelectionEntry<T>, d: SelectionEntry<T>, r: Relation<T>): SelectionEntry<T> {
    // Precondition: r is a pure strict weak ordering.
    const entries = [a, b, c, d];
    pre(() => valid_selection_indices(entries), "Original indices must be distinct nonnegative integers.");
    pre(() => !selection_before(b, a, r) && !selection_before(d, c, r),
        "Each pair must already be in stable order.");
    const [x, y] = selection_before(c, a, r) ? [a, d] : [b, c];
    const result = selection_before(y, x, r) ? y : x;
    post(() => Object.is(result, selection_rank(entries, 1, r)), "The result must have the requested stable rank.");
    return result;
}

function __select_1_4_ab_cd_usage() {
    const byKey = relation<string>((l, r) => l[0] < r[0]);
    const [result] = select_1_4_ab_cd(["1a", 0], ["2b", 1], ["2c", 2], ["3d", 3], byKey);
    print("Selected: " + result);
}

function __select_1_4_ab_cd_attributes() {
}
