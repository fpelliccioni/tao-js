// r is a Regular.
// n is an Integer.
// a is a Regular.
// op is SemigroupOperation
// domain(op) = a

function power_accumulate_semigroup(r, a, n, op) {
    // precondition: n >= 0
    if (n == 0) return r;
    while (true) {
        if (odd(n)) {
            r = op(r, a);
            if (n == 1) return r;
        }
        n = half(n);
        a = op(a, a);
    }
}

function usage() {
    var n = 41;
    var a = 59;

    var p = power_accumulate_semigroup(0, a, n, multiply);
    print(p);

    // - SemigroupOperation is a associative binary operation on which the following is defined:
    //        operation: x ° y
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
}

function attributes() {

}

