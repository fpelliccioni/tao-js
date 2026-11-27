// Reference: From Mathematics to Generic Programming, ch. 7, §7.5, pp. 119–121 (multiplicative overloads in ch07.h).

// r is a MultiplicativeSemigroup.
// n is an Integer.
// a is a MultiplicativeSemigroup.

function power_accumulate_semigroup0<T>(r: T, a: T, n: number) {
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

function __power_accumulate_semigroup0_usage() {
    const n = 41;
    const a = 59;

    const p = power_accumulate_semigroup0(0, a, n);
    print(p);

    // - MultiplicativeSemigroup: is a Semigroup where the associative binary operation is *.
    // - Semigroup is a set on which the following is defined:
    //        operation: x ° y
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
}

function __power_accumulate_semigroup0_attributes() {
}
