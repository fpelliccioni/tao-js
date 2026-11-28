// Reference: Elements of Programming, ch. 6, p. 106.

function upper_bound_n<I extends Iter<unknown>>(f: I, n: number, a: ValueOf<I>, r: Relation<ValueOf<I>>): I {
    const p = (x: ValueOf<I>) => r(a, x);
    return partition_point_n(f, n, p);
}

function __upper_bound_n_usage() {
    const hasLowerDigitSum = relation((x, y) => digitSum(x) < digitSum(y));

    const d = seq([11, 22, 49, 58, 67]);

    const lb = upper_bound_n(begin(d), size(d), 38, hasLowerDigitSum);
    const insertionValue = source(lb);
    print('insertion point: ' + insertionValue);

}

function __upper_bound_n_attributes() {
}
