function upper_bound_n(f, n, a, r) {
    var p = function(x) { return r(a, x); };
    return partition_point_n(f, n, p);
}

function usage() {
    function digitSum(num) {
        return num.toString().split('').reduce(function(sum, digit) {
            return sum + parseInt(digit);
        }, 0);
    }

    var hasLowerDigitSum = relation(function hasLowerDigitSum(x, y) {
        return digitSum(x) < digitSum(y);
    });

    var d = sequence([11, 22, 49, 58, 67], "d");

    var lb = upper_bound_n(begin(d), size(d), 38, hasLowerDigitSum);
    print('insertion point: ' + source(lb));

}

function attributes() {

}

