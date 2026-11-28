// Reference: Elements of Programming, ch. 4, p. 56.

// Doc (es): Compara dos valores con la relación estricta o con su versión reflexiva, que admite claves equivalentes.
// Doc (en): Compares two values with the strict relation or its reflexive version, which admits equivalent keys.
function compare_strict_or_reflexive<T>(a: T, b: T, strict: boolean, r: Relation<T>): boolean {
    // Precondition: r is a pure strict weak ordering.
    const result = strict ? r(a, b) : !r(b, a);
    post(() => result === (r(a, b) || (!strict && !r(b, a))),
        "Only the reflexive comparison may accept equivalent values.");
    return result;
}

function __compare_strict_or_reflexive_usage() {
    const byKey = relation<string>((l, r) => l[0] < r[0]);
    const result = compare_strict_or_reflexive("2a", "2b", false, byKey);
    print("Reflexive comparison: " + result);
}

function __compare_strict_or_reflexive_attributes() {
}
