function fermat_test(n, witness) {
    //precondition: witness > 0 && witness < n
    var reminder = power_semigroup(witness, n - 1, modulo_multiply(n));
    return reminder == 1;
}


function usage() {
    function modulo_multiply(modulus) {
        return function(n, m) {
            return (n * m) % modulus;
        }
    }

    var n = random_int();
    var witness = random_int(0, n - 1);
    var is_prime = fermat_test(n, witness);
    print(is_prime);
}

function attributes() {

}

