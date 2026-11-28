// Reference: Elements of Programming, ch. 4, p. 58, exercise 4.5.

// Doc (es): Selecciona la mediana estable de cinco. Examina primero la mediana de tres y reduce el promedio de comparaciones cuando las cinco claves distintas llegan en orden aleatorio.
// Doc (en): Selects the stable median of five. It first examines the median of three and reduces the average number of comparisons for randomly ordered distinct keys.
function median_5_adaptive<T>(a: T, b: T, c: T, d: T, e: T, r: Relation<T>): T {
    // Precondition: r is a pure strict weak ordering.
    const entries: SelectionEntry<T>[] = [[a, 0], [b, 1], [c, 2], [d, 3], [e, 4]];
    let [first, middle, last] = entries;
    const fourth = entries[3];
    const fifth = entries[4];
    if (selection_before(middle, first, r)) [first, middle] = [middle, first];
    if (selection_before(last, middle, r)) {
        [middle, last] = [last, middle];
        if (selection_before(middle, first, r)) [first, middle] = [middle, first];
    }

    const fourthBefore = selection_before(fourth, middle, r);
    const fifthBefore = selection_before(fifth, middle, r);
    let candidate = middle;
    if (fourthBefore && fifthBefore) {
        const later = selection_before(fourth, fifth, r) ? fifth : fourth;
        candidate = selection_before(first, later, r) ? later : first;
    } else if (!fourthBefore && !fifthBefore) {
        const earlier = selection_before(fourth, fifth, r) ? fourth : fifth;
        candidate = selection_before(last, earlier, r) ? last : earlier;
    }

    const [result] = candidate;
    post(() => Object.is(result, selection_rank(entries, 2, r)[0]),
        "The result must have the requested stable rank.");
    return result;
}

function __median_5_adaptive_usage() {
    const byKey = relation<string>((l, r) => l[0] < r[0]);
    const result = median_5_adaptive("1a", "2b", "4c", "2d", "0e", byKey);
    print("Selected: " + result);
}

function __median_5_adaptive_attributes() {
}
