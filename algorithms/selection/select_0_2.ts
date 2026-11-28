// Reference: Elements of Programming, ch. 4, p. 51.

// Doc (es): Devuelve el menor de 2 elementos en orden estable.
// Doc (en): Returns the minimum of 2 elements in stable order.
function select_0_2<T>(a: T, b: T, r: Relation<T>): T {
    // Precondition: r is a pure strict weak ordering.
    const entries: SelectionEntry<T>[] = [[a, 0], [b, 1]];
    const result = r(b, a) ? b : a;
    post(() => Object.is(result, selection_rank(entries, 0, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function __select_0_2_usage() {
    const byKey = relation<string>((l, r) => l[0] < r[0]);
    const result = select_0_2("1a", "2b", byKey);
    print("Selected: " + result);
}

function __select_0_2_attributes() {
}
