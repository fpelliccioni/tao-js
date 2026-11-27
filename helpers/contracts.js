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
