function is_charmichael0(n: number) {
    //precondition: n > 1 && n is composite
    let is_composite = false;
    for (let b = 2; b <= n; ++b) {
        if ( ! is_composite && b * b > n){
            return false;
        }
        if (are_coprime(b, n)) {
            is_composite = true;
        } else {
            const x = power_semigroup(b, n - 1, modulo_multiply(n));
            if (x != 1) {
                return false;
            }
        }
    }
    return true;
}

function __is_charmichael0_usage() {
    function are_coprime(m: number, n: number) {
        const d = gcd(m, n);
        return d != 1;
    }

    function modulo_multiply(modulus: number) {
        return function(n: number, m: number) {
            return (n * m) % modulus;
        }
    }

    const n = 172081;
    const res = is_charmichael0(n);
    print(res);
}

function __is_charmichael0_attributes() {
}
