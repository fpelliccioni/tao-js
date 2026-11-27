function miller_rabin_test(n: number, q: number, k: number, w: number) {
    //returns true is n is probably prime, returns false if it definitely is not.
    //precondition: n > 1 && n - 1 = 2^k * q && q is odd

    const mmult = modulo_multiply(n);
    let x = power_semigroup(w, q, mmult);
    if (x == 1 || x == n - 1) {
        return true;
    }

    for (let i = 1; i < k; ++i) {
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


function __miller_rabin_test_usage() {
    //
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

function __miller_rabin_test_attributes() {
}
