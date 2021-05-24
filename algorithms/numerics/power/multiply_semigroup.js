// n is an Integer.
// a is a NonCommutativeAdditiveSemigroup.

function multiply_semigroup(n, a) {
    // precondition: n > 0
    while (even(n)) {
        a = add(a, a);
        n = half(n);
    }
    if (n == 1) return a;
    // even(n - 1) ==> n - 1 != 1
    return multiply_accumulate_semigroup(a, half(n - 1), add(a, a));

}

function usage() {
    var n = random_int();
    var a = random_int();

    var p = multiply_semigroup(n, a);
    print(p);

    // - NonCommutativeAdditiveSemigroup: is a Semigroup where the associative binary operation is +.
    //     commutativity is not required but could be present.
    // - Semigroup is a set on which the following is defined:
    //        operation: x ° y
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
    // - commutativity (not required): x ° y = y ° x
}

function attributes() {

}

