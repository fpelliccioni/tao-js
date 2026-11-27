function lower_bound_n<T>(f: Iter<T>, n: number, a: T, r: Relation<T>) {
    const p = (x: T) => !r(x, a);
    pre(() => is_partitioned_n(f, n, p), "The range must be partitioned around the search value.");
    const result = partition_point_n(f, n, p);
    post(() => is_partition_point_n(f, n, p, result), "The result must mark the partition boundary.");
    return result;
}

function __lower_bound_n_usage() {
    const hasLowerDigitSum = relation<number>((x, y) => digitSum(x) < digitSum(y));

    print("digitSum(38) = " + digitSum(38));
    print("digitSum(49) = " + digitSum(49));

    const d = sequence([11, 22, 49, 58, 67], "d");

    const lb = lower_bound_n(begin(d), size(d), 38, hasLowerDigitSum);
    print('insertion point: ' + source(lb));

}

function __lower_bound_n_attributes() {
}
