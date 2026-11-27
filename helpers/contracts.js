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

function is_partition_point_n(first, count, test, result) {
    let reachedResult = false;
    let current = first;
    for (let i = 0; i < count; i++) {
        if (equal(current, result)) reachedResult = true;
        if (Boolean(test(source(current))) !== reachedResult) return false;
        current = successor(current);
    }
    return reachedResult || equal(current, result);
}
