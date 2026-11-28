// Reference: Elements of Programming, ch. 4, p. 57.

// Doc (es): Devuelve el segundo de 4 elementos en orden estable. El primer par debe estar ordenado.
// Doc (en): Returns the second of 4 elements in stable order. The first pair must already be sorted.
function select_1_4_ab<T>(a: SelectionEntry<T>, b: SelectionEntry<T>, c: SelectionEntry<T>, d: SelectionEntry<T>, r: Relation<T>): SelectionEntry<T> {
    // Precondition: r is a pure strict weak ordering.
    const entries = [a, b, c, d];
    pre(() => valid_selection_indices(entries), "Original indices must be distinct nonnegative integers.");
    pre(() => !selection_before(b, a, r), "The first pair must already be in stable order.");
    const [first, second] = selection_before(d, c, r) ? [d, c] : [c, d];
    const result = select_1_4_ab_cd(a, b, first, second, r);
    post(() => Object.is(result, selection_rank(entries, 1, r)), "The result must have the requested stable rank.");
    return result;
}

function __select_1_4_ab_usage() {
    const byKey = relation<string>((l, r) => l[0] < r[0]);
    const [result] = select_1_4_ab(["1a", 0], ["2b", 1], ["2c", 2], ["3d", 3], byKey);
    print("Selected: " + result);
}

function __select_1_4_ab_attributes() {
}
