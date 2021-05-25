// r is a NonCommutativeAdditiveSemigroup.
// n is an Integer.
// a is a NonCommutativeAdditiveSemigroup.

function multiply_accumulate_semigroup(r, n, a) {
    // precondition: n >= 0
    if (n == 0) return r;
    while (true) {
        if (odd(n)) {
            r = add(r, a);
            if (n == 1) return r;
        }
        n = half(n);
        a = add(a, a);
    }
}

function usage() {
    var n = 41;
    var a = 59;

    var p = multiply_accumulate_semigroup(0, n, a);
    print(p);

    // - NonCommutativeAdditiveSemigroup: is a Semigroup where the associative binary operation is +.
    //     commutativity is not required but could be present.
    // - Semigroup is a set on which the following is defined:
    //        operation: x ° y
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
    // - commutativity: x ° y = y ° x
}

function attributes() {

}

