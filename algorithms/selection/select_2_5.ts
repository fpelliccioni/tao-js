// Reference: Elements of Programming, ch. 4, p. 58.

// Doc (es): Devuelve el tercero de 5 elementos en orden estable.
// Doc (en): Returns the third of 5 elements in stable order.
function select_2_5<T>(a: T, b: T, c: T, d: T, e: T, r: Relation<T>): T {
    // Precondition: r is a pure strict weak ordering.
    const entries: SelectionEntry<T>[] = [[a, 0], [b, 1], [c, 2], [d, 3], [e, 4]];
    const [first, second] = selection_before(entries[1], entries[0], r)
        ? [entries[1], entries[0]] : [entries[0], entries[1]];
    const [result] = select_2_5_ab(first, second, entries[2], entries[3], entries[4], r);
    post(() => Object.is(result, selection_rank(entries, 2, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function __select_2_5_usage() {
    const byKey = relation<string>((l, r) => l[0] < r[0]);
    const result = select_2_5("1a", "2b", "2c", "3d", "2e", byKey);
    print("Selected: " + result);
}

function __select_2_5_attributes() {
}
