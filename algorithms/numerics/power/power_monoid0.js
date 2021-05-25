// n is an Integer.
// a is a MultiplicativeMonoid.

function power_monoid0(a, n) {
    // precondition: n >= 0
    if (n == 0) return multiplicative_identity(a);
    return power_semigroup0(a, n);
}

function usage() {
    var n = 41;
    var a = 59;

    var p = power_monoid0(a, n);
    print(p);

    var m1 = new SquareMatrix(2, [1, 3, 7, 5]);
    print(m1.str());

    var m2 = power_monoid0(m1, 65);
    print(m2.str());

    // - MultiplicativeMonoid: is a Monoid where the associative binary operation is * and the identity element is 1
    // - Monoid is a set on which the following is defined:
    //        operation:                    x ° y
    //        constant / identity element:  e
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
    //        x ° e = e ° x = x               identity
}

function attributes() {

}

