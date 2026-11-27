// n is an Integer.
// a is a Regular.
// op is MonoidOperation
// domain(op) = a

function power_monoid<T>(a: T, n: number, op: Operation<T>) {
    // precondition: n >= 0
    if (n == 0) return identity_element(op, a);
    return power_semigroup(a, n, op);
}

function __power_monoid_usage() {
    const n = 41;
    const a = 59;

    const p = power_monoid(a, n, multiply);
    print(p);

    const m1 = new SquareMatrix(2, [1, 3, 7, 5]);
    print(m1.str());

    const m2 = power_monoid(m1, 5, multiply);
    print(m2.str());

    // - MonoidOperation is a associative binary operation on which the following is defined:
    //        operation:                    x ° y
    //        constant / identity element:  e
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
    //        x ° e = e ° x = x               identity
}

function __power_monoid_attributes() {
}
