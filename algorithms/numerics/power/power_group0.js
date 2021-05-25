// n is an Integer.
// a is a MultiplicativeGroup.

function power_group0(a, n) {
    if (n < 0) {
        n = -n;
        a = multiplicative_inverse(a);
    }
    return power_monoid0(a, n);
}

function usage() {
    var n = 41;
    var a = 59;

    var p = power_group0(a, n);
    print(p);

    var m1 = new SquareMatrix(2, [2, 1, 5, 3]); //invertible matrix
    print(m1.str());
    print(m1.multiplicative_inverse().str());

    var m2 = power_group0(m1, -65);
    print(m2.str());


    var m3 = new SquareMatrix(2, [3, 6, 1, 2]); //non-invertible matrix
    print(m3.multiplicative_inverse());
    var m4 = power_group0(m3, 65);
    print(m4.str());
    var m5 = power_group0(m3, -65);
    print(m5.str());



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

function attributes() {

}

