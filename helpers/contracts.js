function is_partitioned_n(first, count, test) {
    if (!Number.isSafeInteger(count) || count < 0) return false;

    let inTrueGroup = false;
    let current = first;
    for (let i = 0; i < count; i++) {
        if (test(source(current))) inTrueGroup = true;
        else if (inTrueGroup) return false;
        current = successor(current);
    }
    return true;
}

function is_bounded_range(first, last) {
    const count = distance(first, last);
    return count >= 0 && equal(successor(first, count), last);
}

function range_value_counts(first, last) {
    const counts = new Map();
    while (!equal(first, last)) {
        const value = source(first);
        counts.set(value, (counts.get(value) ?? 0) + 1);
        first = successor(first);
    }
    return counts;
}

function has_range_value_counts(first, last, expected) {
    const actual = range_value_counts(first, last);
    if (actual.size !== expected.size) return false;
    for (const [value, count] of expected) {
        if (actual.get(value) !== count) return false;
    }
    return true;
}
