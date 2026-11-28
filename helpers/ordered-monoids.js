const integer_monoid = {
    zero: 0,
    contains: Number.isSafeInteger,
    less: (a, b) => a < b,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    half: a => Math.floor(a / 2),
};

function monoid_equal(a, b, monoid) {
    return !monoid.less(a, b) && !monoid.less(b, a);
}

function monoid_largest_doubling(a, b, monoid) {
    while (!monoid.less(monoid.subtract(a, b), b)) {
        b = monoid.add(b, b);
    }
    return b;
}

function division_matches(a, b, q, r, monoid) {
    if (!Number.isSafeInteger(q) || q < 0 || monoid.less(r, monoid.zero) || !monoid.less(r, b)) return false;
    let sum = r;
    let term = b;
    while (q > 0) {
        if (q % 2 !== 0) sum = monoid.add(sum, term);
        q = Math.floor(q / 2);
        if (q > 0) term = monoid.add(term, term);
    }
    return monoid_equal(sum, a, monoid);
}

function gcd_matches(a, b, value, monoid) {
    while (!monoid_equal(b, monoid.zero, monoid)) {
        const [, r] = quotient_remainder_nonnegative(a, b, monoid);
        a = b;
        b = r;
    }
    return monoid_equal(value, a, monoid);
}
