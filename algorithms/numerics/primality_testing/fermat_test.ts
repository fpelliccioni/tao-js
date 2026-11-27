function fermat_test(n: number, witness: number) {
    //precondition: witness > 0 && witness < n
    const reminder = power_semigroup(witness, n - 1, modulo_multiply(n));
    return reminder == 1;
}


function __fermat_test_usage() {
    function modulo_multiply(modulus: number) {
        return function(n: number, m: number) {
            return (n * m) % modulus;
        }
    }

    const n = random_int();
    const witness = random_int(0, n - 1);
    const is_prime = fermat_test(n, witness);
    print(is_prime);
}

function __fermat_test_attributes() {
}
