// n is an Integer.
// a is a Regular.
// op is SemigroupOperation
// domain(op) = a

function power_semigroup<T>(a: T, n: number, op: Operation<T>) {
    // precondition: n > 0
    while (even(n)) {
        a = op(a, a);
        n = half(n);
    }
    if (n == 1) return a;
    // even(n - 1) ==> n - 1 != 1
    return power_accumulate_semigroup(a, op(a, a), half(n - 1), op);

}

function __power_semigroup_usage() {
    const n = 41;
    const a = 59;

    const p = power_semigroup(a, n, multiply);
    print(p);

    // - SemigroupOperation is a associative binary operation on which the following is defined:
    //        operation: x ° y
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
}

function __power_semigroup_attributes() {
}
