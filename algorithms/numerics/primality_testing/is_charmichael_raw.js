function remainder(a, b) {
    return a % b;
}

function gcd(a, b) {
    while (b != 0) {
        var r = remainder(a, b);
        a = b;
        b = r;
    }
    return a;
}

function are_coprime(m, n) {
    var d = gcd(m, n);
    return d != 1;
}

function modulo_multiply(modulus) {
    return function(n, m) {
        return (n * m) % modulus;
    }
}

function even(x) {
    return (x & 1) == 0;
}
function odd(x) { return ! even(x); }

function half(n) {
    return n >> 1;
}

function power_semigroup(a, n, op) {
    // precondition: n > 0
    while (even(n)) {
        a = op(a, a);
        n = half(n);
    }
    if (n == 1) return a;
    // even(n - 1) ==> n - 1 != 1
    return power_accumulate_semigroup(a, op(a, a), half(n - 1), op);

}

function power_accumulate_semigroup(r, a, n, op) {
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

function is_charmichael0(n) {
    //precondition: n > 1 && n is composite
    var is_composite = false;
    for (var b = 2; b <= n; ++b) {
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


function is_charmichael1(n) {
    //precondition: n > 1 && n is composite

    if (even(n)) {
        return false; // from Korselt's Theorem (1899):
    }

    var is_composite = false;
    for (var b = 2; b <= n; ++b) {
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


function is_charmichael(n) {
    //precondition: n > 1 && n is composite

    if (even(n)) {
        return false; // from Korselt's Theorem (1899):
    }

    var is_composite = false;

    // for (var b = 2; b < n; ++b) {
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

function measure(f) {
    const start = process.hrtime.bigint();
    f();
    const end = process.hrtime.bigint();
    console.log(`Benchmark took ${end - start} nanoseconds`);
}

measure(() => {
    var count = 0;
    for (let i = 2; i < 100000; ++i) {
        var res = is_charmichael0(i);
        if (res) {
            // console.log(i, " is a Charmichael number.");
            ++count;
        }
    }
    console.log(count);
});

measure(() => {
    var count = 0;
    for (let i = 2; i < 100000; ++i) {
        var res = is_charmichael1(i);
        if (res) {
            // console.log(i, " is a Charmichael number.");
            ++count;
        }
    }
    console.log(count);
});

measure(() => {
    var count = 0;
    for (let i = 2; i < 100000; ++i) {
        var res = is_charmichael(i);
        if (res) {
            // console.log(i, " is a Charmichael number.");
            ++count;
        }
    }
    console.log(count);
});

