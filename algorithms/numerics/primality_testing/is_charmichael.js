function is_charmichael(n) {
    //precondition: n > 1 && n is composite

    if (even(n)) {
        return false; // from Korselt's Theorem (1899):
    }

    var is_composite = false;

    for (var b = 3; b <= n; b += 2) {
        if ( ! is_composite && b * b > n){
            return false;
        }
        if (are_coprime(b, n)) {
            is_composite = true;
        } else {
            var x = power_semigroup(b, n - 1, modulo_multiply(n));
            if (x != 1) {
                return false;
            }
        }
    }
    return true;
}

function usage() {
    function are_coprime(m, n) {
        var d = gcd(m, n);
        return d != 1;
    }

    function modulo_multiply(modulus) {
        return function(n, m) {
            return (n * m) % modulus;
        }
    }

    var n = 172081;
    var res = is_charmichael(n);
    print(res);
}

function attributes() {

}

