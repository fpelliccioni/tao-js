// n is an Integer.
// a is a Regular.
// op is GroupOperation
// domain(op) = a

function power(a, n, op) {
    if (n < 0) {
        n = -n;
        a = inverse_operation(op, a);
    }
    return power_monoid(a, n, op);
}

function usage() {
    var n = 41;
    var a = 59;

    var p = power(a, n, multiply);
    print(p);

    var m1 = new SquareMatrix(2, [2, 1, 5, 3]); //invertible matrix
    print(m1.str());
    print(m1.multiplicative_inverse().str());

    var m2 = power(m1, -5, multiply);
    print(m2.str());

    var m3 = new SquareMatrix(2, [3, 6, 1, 2]); //non-invertible matrix
    print(m3.multiplicative_inverse());
    var m4 = power(m3, 5, multiply);
    print(m4.str());
    var m5 = power(m3, -5, multiply);
    print(m5.str());

    // - GroupOperation is a associative binary operation on which the following is defined:
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

