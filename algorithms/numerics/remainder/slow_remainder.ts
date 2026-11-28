// Reference: Elements of Programming, ch. 5, p. 70.

// Doc (es): Calcula el resto restando el divisor mientras se pueda, incluida la última resta cuando hay igualdad.
// Doc (en): Computes the remainder by repeated subtraction, including the final subtraction on equality.
function slow_remainder<T>(a: T, b: T, monoid: CancellableMonoid<T>): T {
    // Precondition: monoid models the indicated concept, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && monoid.less(monoid.zero, b),
        "The dividend must be nonnegative and the divisor must be positive.");
    let result = a;
    while (!monoid.less(result, b)) result = monoid.subtract(result, b);
    post(() => {
        if (monoid.less(result, monoid.zero) || !monoid.less(result, b)) return false;
        let difference = a;
        while (monoid.less(result, difference)) difference = monoid.subtract(difference, b);
        return monoid_equal(difference, result, monoid);
    }, "The remainder must be reachable by subtraction and lie below the divisor.");
    return result;
}

function __slow_remainder_usage() {
    const a = 137;
    const b = 12;
    const result = slow_remainder(a, b, integer_monoid);
    print("Result: " + result);
}

function __slow_remainder_attributes() {
}
