// r is a MultiplicativeSemigroup.
// n is an Integer.
// a is a MultiplicativeSemigroup.

function power_accumulate_semigroup0(r, a, n) {
    // precondition: n >= 0
    if (n == 0) return r;
    while (true) {
        if (odd(n)) {
            r = multiply(r, a);
            if (n == 1) return r;
        }
        n = half(n);
        a = multiply(a, a);
    }
}

function usage() {
    var n = random_int();
    var a = random_int();

    var p = power_accumulate_semigroup0(0, a, n);
    print(p);

    // - MultiplicativeSemigroup: is a Semigroup where the associative binary operation is *.
    // - Semigroup is a set on which the following is defined:
    //        operation: x ° y
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
}

function attributes() {

}

