function half_nonnegative(n) {return n >> 1;}
function half(n) {return n >> 1;}
function twice(n) {return n + n;}
function remainder_native(a, b) {return a % b;}
const even = predicate(function even(x) { return (x & 1) === 0; });
const odd = predicate(function odd(x) { return (x & 1) !== 0; });

function digitSum(value) {
    if (!Number.isSafeInteger(value)) throw new RangeError("digitSum expects a safe integer.");

    let remaining = Math.abs(value);
    let sum = 0;
    while (remaining > 0) {
        sum += remaining % 10;
        remaining = Math.floor(remaining / 10);
    }
    return sum;
}
