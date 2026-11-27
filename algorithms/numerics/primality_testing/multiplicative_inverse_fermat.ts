// Reference: From Mathematics to Generic Programming, ch. 13, p. 241 (ch13.h).

function multiplicative_inverse_fermat(a: number, p: number) {
    //precondition: p is prime && a > 0
    return power_monoid(a, p - 2, modulo_multiply_c(p));
}

function __multiplicative_inverse_fermat_usage() {
    function modulo_multiply_c(modulus: number) {
        const f = binary_operation<number>(function modulo_multiply(n, m) {
            return (n * m) % modulus;
        });
        return f;
    }

    const modulo_multiply_identity = unary_operation<number>(function modulo_multiply_identity(x) {return 1;});
    identity_elements["modulo_multiply"] = modulo_multiply_identity;

    const p = 7;
    for (let a = 1; a < p; ++a) {
        const inv = multiplicative_inverse_fermat(a, p);
        print("the multiplicative inverse mod" + p + " of " + a +   " is " + inv);
        const id = modulo_multiply_c(p)(a, inv);
        print("verification: " + a + " * " + inv + " mod" + p + " = " + id);
    }
}

function __multiplicative_inverse_fermat_attributes() {
}
