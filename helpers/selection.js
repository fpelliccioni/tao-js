function selection_before(x, y, r) {
    return x[1] < y[1]
        ? compare_strict_or_reflexive(x[0], y[0], false, r)
        : compare_strict_or_reflexive(x[0], y[0], true, r);
}

function selection_rank(entries, rank, r) {
    return [...entries].sort((x, y) => {
        if (r(x[0], y[0])) return -1;
        if (r(y[0], x[0])) return 1;
        return x[1] - y[1];
    })[rank];
}

function valid_selection_indices(entries) {
    const indices = entries.map(entry => entry[1]);
    return indices.every(index => Number.isSafeInteger(index) && index >= 0)
        && new Set(indices).size === indices.length;
}
