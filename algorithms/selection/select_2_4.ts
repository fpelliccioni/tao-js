// Reference: Elements of Programming, ch. 4, p. 54, exercise 4.4.

// Doc (es): Devuelve el tercero de 4 elementos en orden estable.
// Doc (en): Returns the third of 4 elements in stable order.
function select_2_4<T>(a: T, b: T, c: T, d: T, r: Relation<T>): T {
    // Precondition: r is a pure strict weak ordering.
    const entries: SelectionEntry<T>[] = [[a, 0], [b, 1], [c, 2], [d, 3]];
    const [p, q] = r(b, a) ? [entries[1], entries[0]] : [entries[0], entries[1]];
    const [s, t] = r(d, c) ? [entries[3], entries[2]] : [entries[2], entries[3]];
    const [x, y] = selection_before(t, q, r) ? [p, t] : [q, s];
    const [result] = selection_before(x, y, r) ? y : x;
    post(() => Object.is(result, selection_rank(entries, 2, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function __select_2_4_usage() {
    const byKey = relation<string>((l, r) => l[0] < r[0]);
    const result = select_2_4("1a", "2b", "2c", "3d", byKey);
    print("Selected: " + result);
}

function __select_2_4_attributes() {
}
