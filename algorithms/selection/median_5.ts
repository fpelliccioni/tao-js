// Reference: Elements of Programming, ch. 4, p. 58.

// Doc (es): Devuelve el tercero de 5 elementos en orden estable.
// Doc (en): Returns the third of 5 elements in stable order.
function median_5<T>(a: T, b: T, c: T, d: T, e: T, r: Relation<T>): T {
    // Precondition: r is a pure strict weak ordering.
    const entries: SelectionEntry<T>[] = [[a, 0], [b, 1], [c, 2], [d, 3], [e, 4]];
    const result = select_2_5(a, b, c, d, e, r);
    post(() => Object.is(result, selection_rank(entries, 2, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function __median_5_usage() {
    const byKey = relation<string>((l, r) => l[0] < r[0]);
    const result = median_5("1a", "2b", "2c", "3d", "2e", byKey);
    print("Selected: " + result);
}

function __median_5_attributes() {
}
