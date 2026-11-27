// Reference: From Mathematics to Generic Programming, ch. 7, p. 121 (operation-parameterized overload in ch07.h).

// r is a Regular.
// n is an Integer.
// a is a Regular.
// op is SemigroupOperation
// domain(op) = a

function power_accumulate_semigroup<T>(r: T, a: T, n: number, op: Operation<T>) {
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

function __power_accumulate_semigroup_usage() {
    const n = 41;
    const a = 59;

    const p = power_accumulate_semigroup(0, a, n, multiply);
    print(p);

    // - SemigroupOperation is a associative binary operation on which the following is defined:
    //        operation: x ° y
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
}

function __power_accumulate_semigroup_attributes() {
}
