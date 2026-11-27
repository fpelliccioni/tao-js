// Reference: Elements of Programming, ch. 6, pp. 105–106 (adapted with explicit contracts).

function lower_bound_n<I extends ForwardIterator>(
    f: I, n: number, a: ValueOf<I>, r: Relation<ValueOf<I>>,
): I {
    const below = (x: ValueOf<I>) => r(x, a);
    const p = (x: ValueOf<I>) => !below(x);
    pre(() => is_partitioned_n(f, n, p), "The range must be partitioned around the search value.");
    const result = partition_point_n(f, n, p);
    post(() => all(f, result, below), "Every element before the result must compare less than the search value.");
    post(() => none(result, successor(f, n), below), "No element from the result onward may compare less than the search value.");
    return result;
}

function __lower_bound_n_usage() {
    const hasLowerDigitSum = relation((x, y) => digitSum(x) < digitSum(y));

    const d = sequence([11, 22, 49, 58, 67]);

    const lb = lower_bound_n(begin(d), size(d), 38, hasLowerDigitSum);
    print('insertion point: ' + source(lb));

}

function __lower_bound_n_attributes() {
}
