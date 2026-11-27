// Reference: From Mathematics to Generic Programming, ch. 7, §7.3, pp. 116–117 (ch07.h).

// r is a NonCommutativeAdditiveSemigroup.
// n is an Integer.
// a is a NonCommutativeAdditiveSemigroup.

function multiply_accumulate_semigroup<T>(r: T, n: number, a: T) {
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

function __multiply_accumulate_semigroup_usage() {
    const n = 41;
    const a = 59;

    const p = multiply_accumulate_semigroup(0, n, a);
    print(p);

    // - NonCommutativeAdditiveSemigroup: is a Semigroup where the associative binary operation is +.
    //     commutativity is not required but could be present.
    // - Semigroup is a set on which the following is defined:
    //        operation: x ° y
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
    // - commutativity: x ° y = y ° x
}

function __multiply_accumulate_semigroup_attributes() {
}
