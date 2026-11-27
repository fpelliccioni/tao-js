// Reference: From Mathematics to Generic Programming, ch. 7, §7.5, pp. 119–121 (multiplicative overloads in ch07.h).

// n is an Integer.
// a is a MultiplicativeSemigroup.

function power_semigroup0<T>(a: T, n: number) {
    // precondition: n > 0
    while (even(n)) {
        a = multiply(a, a);
        n = half(n);
    }
    if (n == 1) return a;
    // even(n - 1) ==> n - 1 != 1
    return power_accumulate_semigroup0(a, multiply(a, a), half(n - 1));

}

function __power_semigroup0_usage() {
    const n = 41;
    const a = 59;

    const p = power_semigroup0(a, n);
    print(p);

    // - MultiplicativeSemigroup: is a Semigroup where the associative binary operation is *.
    // - Semigroup is a set on which the following is defined:
    //        operation: x ° y
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
}

function __power_semigroup0_attributes() {
}
