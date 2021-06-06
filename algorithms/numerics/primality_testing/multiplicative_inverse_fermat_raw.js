function even(x) {
    return (x & 1) == 0;
}
function odd(x) { return ! even(x); }

function half(n) {
    return n >> 1;
}

function random_int(from, to) {
    if ( ! from) from = 0;
    if ( ! to) to = 99;
    return Math.floor(Math.random() * to) + from;
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

function power_monoid(a, n, op) {
    // precondition: n >= 0
    if (n == 0) return identity_element(op, a);
    return power_semigroup(a, n, op);
}

function modulo_multiply(modulus) {
    return function(n, m) {
        return (n * m) % modulus;
    }
}

var identity_element = function(op, x) {
    var getter = identity_elements[op.inner_name];
    if (getter) return getter(x);
    return undefined;
}

var identity_elements = {
    // "add": additive_identity,
    // "multiply": multiplicative_identity,
};

var inverse_operations = {
    // "add": additive_inverse,
    // "multiply": multiplicative_inverse,
};

var inverse_operation = function(op, x) {
    var getter = inverse_operations[op.inner_name];
    if (getter) return getter(x);
    return undefined;
}


function multiplicative_inverse_fermat(a, p) {
    //precondition: p is prime && a > 0

    return power_monoid(a, p - 2, modulo_multiply(p));
}

var a = random_int(1);
var p = 79;
// var p = random_int(0, n - 1);

var inv = multiplicative_inverse_fermat(a, p);

console.log(inv);