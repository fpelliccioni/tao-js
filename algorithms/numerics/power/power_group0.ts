// Reference: From Mathematics to Generic Programming, ch. 7, §7.5, pp. 119–121 (multiplicative overloads in ch07.h).

// n is an Integer.
// a is a MultiplicativeGroup.

function power_group0<T>(a: T, n: number) {
    if (n < 0) {
        n = -n;
        a = multiplicative_inverse(a);
    }
    return power_monoid0(a, n);
}

function __power_group0_usage() {
    const n = 41;
    const a = 59;

    const p = power_group0(a, n);
    print(p);

    const m1 = new SquareMatrix(2, [2, 1, 5, 3]); //invertible matrix
    const m1Text = m1.str();
    print(m1Text);
    const inverseText = m1.multiplicative_inverse()?.str();
    print(inverseText);

    const m2 = power_group0(m1, -5);
    const m2Text = m2.str();
    print(m2Text);


    const m3 = new SquareMatrix(2, [3, 6, 1, 2]); //non-invertible matrix
    print("The singular matrix has no multiplicative inverse.");
    const m4 = power_group0(m3, 5);
    const m4Text = m4.str();
    print(m4Text);



    // - MultiplicativeGroup: is a Group where the associative binary operation is * and the identity element is 1.
    // - Group is a set on which the following is defined:
    //        operation:                    x ° y
    //        operation:                    x^-1
    //        constant / identity element:  e
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
    //        x ° e = e ° x = x               identity
    //        x ° x^-1 = x^-1 ° x = e         cancellation
}

function __power_group0_attributes() {
}
