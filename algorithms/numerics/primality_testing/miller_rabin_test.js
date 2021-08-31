function miller_rabin_test(n, q, k, w) {
    //returns true is n is probably prime, returns false if it definitely is not.
    //precondition: n > 1 && n - 1 = 2^k * q && q is odd

    var mmult = modulo_multiply(n);
    var x = power_semigroup(w, q, mmult);
    if (x == 1 || x == n - 1) {
        return true;
    }

    for (var i = 1; i < k; ++i) {
        //invariant: x = w^(2^(i-1)) * q
        x = mmult(x, x);
        if (x == n - 1) {
            return true;
        }
        if (x == 1) {
            return false;
        }
    }
    return false;
}


function usage() {
    //
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

