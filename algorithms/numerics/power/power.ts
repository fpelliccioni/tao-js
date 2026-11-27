// Reference: From Mathematics to Generic Programming, ch. 7, p. 123 (variant of power_group in ch07.h).

// n is an Integer.
// a is a Regular.
// op is GroupOperation
// domain(op) = a

function power<T>(a: T, n: number, op: Operation<T>) {
    if (n < 0) {
        n = -n;
        a = inverse_operation(op, a);
    }
    return power_monoid(a, n, op);
}

function __power_usage() {
    const n = 41;
    const a = 59;

    const p = power(a, n, multiply);
    print(p);

    const m1 = new SquareMatrix(2, [2, 1, 5, 3]); //invertible matrix
    const m1Text = m1.str();
    print(m1Text);
    const inverseText = m1.multiplicative_inverse()?.str();
    print(inverseText);

    const m2 = power(m1, -5, multiply);
    const m2Text = m2.str();
    print(m2Text);

    const m3 = new SquareMatrix(2, [3, 6, 1, 2]); //non-invertible matrix
    print("The singular matrix has no multiplicative inverse.");
    const m4 = power(m3, 5, multiply);
    const m4Text = m4.str();
    print(m4Text);

    // - GroupOperation is a associative binary operation on which the following is defined:
    //        operation:                    x ° y
    //        operation:                    x^-1
    //        constant / identity element:  e
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
    //        x ° e = e ° x = x               identity
    //        x ° x^-1 = x^-1 ° x = e         cancellation
}

function __power_attributes() {
}
