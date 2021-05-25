// n is an Integer.
// a is a MultiplicativeSemigroup.

function power_semigroup0(a, n) {
    // precondition: n > 0
    while (even(n)) {
        a = multiply(a, a);
        n = half(n);
    }
    if (n == 1) return a;
    // even(n - 1) ==> n - 1 != 1
    return power_accumulate_semigroup0(a, multiply(a, a), half(n - 1));

}

function usage() {
    var n = 41;
    var a = 59;

    var p = power_semigroup0(a, n);
    print(p);

    // - MultiplicativeSemigroup: is a Semigroup where the associative binary operation is *.
    // - Semigroup is a set on which the following is defined:
    //        operation: x ° y
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
}

function attributes() {

}

