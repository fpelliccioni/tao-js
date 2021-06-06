function multiplicative_inverse_fermat(a, p) {
    //precondition: p is prime && a > 0
    return power_monoid(a, p - 2, modulo_multiply_c(p));
}

function usage() {
    function modulo_multiply_c(modulus) {
        var f = binary_operation(function modulo_multiply(n, m) {
            return (n * m) % modulus;
        });
        return f;
    }

    var modulo_multiply_identity = unary_operation(function modulo_multiply_identity(x) {return 1;});
    identity_elements["modulo_multiply"] = modulo_multiply_identity;

    var p = 7;
    for (var a = 1; a < p; ++a) {
        var inv = multiplicative_inverse_fermat(a, p);
        print("the multiplicative inverse mod" + p + " of " + a +   " is " + inv);
        var id = modulo_multiply_c(p)(a, inv);
        print("verification: " + a + " * " + inv + " mod" + p + " = " + id);
    }
}

function attributes() {

}

