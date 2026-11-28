// Reference: Elements of Programming, ch. 4, pp. 54, 57.

// Doc (es): Devuelve el segundo de 4 elementos en orden estable.
// Doc (en): Returns the second of 4 elements in stable order.
function select_1_4<T>(a: T, b: T, c: T, d: T, r: Relation<T>): T {
    // Precondition: r is a pure strict weak ordering.
    const entries: SelectionEntry<T>[] = [[a, 0], [b, 1], [c, 2], [d, 3]];
    const [first, second] = selection_before(entries[1], entries[0], r)
        ? [entries[1], entries[0]] : [entries[0], entries[1]];
    const [value] = select_1_4_ab(first, second, entries[2], entries[3], r);
    const result = value;
    post(() => Object.is(result, selection_rank(entries, 1, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function __select_1_4_usage() {
    const byKey = relation<string>((l, r) => l[0] < r[0]);
    const result = select_1_4("1a", "2b", "2c", "3d", byKey);
    print("Selected: " + result);
}

function __select_1_4_attributes() {
}
