// n is an Integer.
// a is a Regular.
// op is SemigroupOperation
// domain(op) = a

function power_semigroup(a, n, op) {
    // precondition: n > 0
    while (even(n)) {
        a = op(a, a);
        n = half(n);
    }
    if (n == 1) return a;
    // even(n - 1) ==> n - 1 != 1
    return power_accumulate_semigroup(a, op(a, a), half(n - 1), op);

}

function usage() {
    var n = 41;
    var a = 59;

    var p = power_semigroup(a, n, multiply);
    print(p);

    // - SemigroupOperation is a associative binary operation on which the following is defined:
    //        operation: x ° y
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
}

function attributes() {

}

