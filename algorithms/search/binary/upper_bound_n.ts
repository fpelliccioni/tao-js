function upper_bound_n<T>(f: Iter<T>, n: number, a: T, r: Relation<T>) {
    const p = function(x: T) { return r(a, x); };
    return partition_point_n(f, n, p);
}

function __upper_bound_n_usage() {
    function digitSum(num: number) {
        return num.toString().split('').reduce(function(sum, digit) {
            return sum + parseInt(digit);
        }, 0);
    }

    const hasLowerDigitSum = relation<number>(function hasLowerDigitSum(x, y) {
        return digitSum(x) < digitSum(y);
    });

    const d = sequence([11, 22, 49, 58, 67], "d");

    const lb = upper_bound_n(begin(d), size(d), 38, hasLowerDigitSum);
    print('insertion point: ' + source(lb));

}

function __upper_bound_n_attributes() {
}
