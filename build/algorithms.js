function lexicographical_compare(f0, l0, f1, l1, r) {
    while (true) {
        if (equal(f1, l1))
            return false;
        if (equal(f0, l0))
            return true;
        const a = source(f0);
        const b = source(f1);
        if (r(a, b))
            return true;
        if (r(b, a))
            return false;
        f0 = successor(f0);
        f1 = successor(f1);
    }
}

function lexicographical_equal(f0, l0, f1, l1) {
    return lexicographical_equivalent(f0, l0, f1, l1, eq);
}

function lexicographical_equivalent(f0, l0, f1, l1, r) {
    const [a, b] = find_mismatch(f0, l0, f1, l1, r);
    return equal(a, l0) && equal(b, l1);
}

function lexicographical_less(f0, l0, f1, l1) {
    return lexicographical_compare(f0, l0, f1, l1, lt);
}

function copy(f, l, o) {
    while (!equal(f, l)) {
        sink(o, source(f));
        o = successor(o);
        f = successor(f);
    }
    return o;
}

function copy_backward(f, l, o) {
    while (!equal(f, l)) {
        l = predecessor(l);
        o = predecessor(o);
        sink(o, source(l));
    }
    return o;
}

function copy_backward_n(l, n, o) {
    while (n != 0) {
        l = predecessor(l);
        o = predecessor(o);
        --n;
        sink(o, source(l));
    }
    return [l, o];
}

function copy_bounded(f, l, fo, lo) {
    while (!equal(f, l) && !equal(fo, lo)) {
        sink(fo, source(f));
        fo = successor(fo);
        f = successor(f);
    }
    return [f, fo];
}

function copy_n(f, n, o) {
    while (n != 0) {
        sink(o, source(f));
        f = successor(f);
        o = successor(o);
        --n;
    }
    return [f, o];
}

function move_backward(f, l, o) {
    while (!equal(f, l)) {
        l = predecessor(l);
        o = predecessor(o);
        sink_move(o, source(l));
    }
    return o;
}

function reverse_copy(f, l, o) {
    while (!equal(f, l)) {
        l = predecessor(l);
        sink(o, source(l));
        o = successor(o);
    }
    return o;
}

function reverse_copy_backward(f, l, o) {
    while (!equal(f, l)) {
        o = predecessor(o);
        sink(o, source(f));
        f = successor(f);
    }
    return o;
}

function reverse_copy_backward_n(f, n, o) {
    while (n != 0) {
        o = predecessor(o);
        sink(o, source(f));
        f = successor(f);
        --n;
    }
    return [f, o];
}

function reverse_copy_n(l, n, o) {
    while (n != 0) {
        l = predecessor(l);
        sink(o, source(l));
        o = successor(o);
        --n;
    }
    return [l, o];
}

function combine_copy(f, l, f2, l2, o, r) {
    while (!equal(f, l) && !equal(f2, l2)) {
        if (r(f2, f)) {
            sink(o, source(f2));
            f2 = successor(f2);
        }
        else {
            sink(o, source(f));
            f = successor(f);
        }
        o = successor(o);
    }
    return copy(f2, l2, copy(f, l, o));
}

function combine_copy_backward(f, l, f2, l2, o, r) {
    while (!equal(f, l) && !equal(f2, l2)) {
        o = predecessor(o);
        if (r(predecessor(l2), predecessor(l))) {
            l = predecessor(l);
            sink(o, source(l));
        }
        else {
            l2 = predecessor(l2);
            sink(o, source(l2));
        }
    }
    return copy_backward(f, l, copy_backward(f2, l2, o));
}

function combine_copy_backward_n(l, n, l2, n2, o, r) {
    while (n != 0 && n2 != 0) {
        o = predecessor(o);
        if (r(predecessor(l2), predecessor(l))) {
            l = predecessor(l);
            --n;
            sink(o, source(l));
        }
        else {
            l2 = predecessor(l2);
            --n2;
            sink(o, source(l2));
        }
    }
    const res0 = copy_backward_n(l2, n2, o);
    o = res0[1];
    const res1 = copy_backward_n(l, n, o);
    o = res1[1];
    return [res1[0], res0[0], o];
}

function combine_copy_n(f, n, f2, n2, o, r) {
    while (n != 0 && n2 != 0) {
        if (r(f2, f)) {
            sink(o, source(f2));
            f2 = successor(f2);
            --n2;
        }
        else {
            sink(o, source(f));
            f = successor(f);
            --n;
        }
        o = successor(o);
    }
    const res0 = copy_n(f, n, o);
    o = res0[1];
    const res1 = copy_n(f2, n2, o);
    o = res1[1];
    return [res0[0], res1[0], o];
}

function copy_if(f, l, o, p) {
    const ps = predicate_source(p);
    return copy_select(f, l, o, ps);
}

function copy_if_n(f, n, o, p) {
    const ps = predicate_source(p);
    return copy_select_n(f, n, o, ps);
}

function copy_select(f, l, o, p) {
    while (!equal(f, l)) {
        if (p(f)) {
            sink(o, source(f));
            o = successor(o);
        }
        f = successor(f);
    }
    return o;
}

function copy_select_n(f, n, o, p) {
    while (n != 0) {
        if (p(f)) {
            sink(o, source(f));
            o = successor(o);
        }
        f = successor(f);
        --n;
    }
    return [f, o];
}

function merge_copy(f, l, f2, l2, o, r) {
    const rs = relation_source(r);
    return combine_copy(f, l, f2, l2, o, rs);
}

function merge_copy_backward(f, l, f2, l2, o, r) {
    const rs = relation_source(r);
    return combine_copy_backward(f, l, f2, l2, o, rs);
}

function partition_copy(f, l, u, t, p) {
    const ps = predicate_source(p);
    return split_copy(f, l, u, t, ps);
}

function partition_copy_n(f, n, u, t, p) {
    const ps = predicate_source(p);
    return split_copy_n(f, n, u, t, ps);
}

function split_copy(f, l, u, t, p) {
    while (!equal(f, l)) {
        if (p(f)) {
            sink(t, source(f));
            t = successor(t);
        }
        else {
            sink(u, source(f));
            u = successor(u);
        }
        f = successor(f);
    }
    return [u, t];
}

function split_copy_n(f, n, u, t, p) {
    while (n != 0) {
        if (p(f)) {
            sink(t, source(f));
            t = successor(t);
        }
        else {
            sink(u, source(f));
            u = successor(u);
        }
        f = successor(f);
        --n;
    }
    return [f, u, t];
}

function fib0(n) {
    pre(() => Number.isInteger(n) && n >= 0 && n <= 78, "The index must be an integer from 0 to 78.");
    function fib(i) {
        if (i < 2)
            return i;
        return fib(i - 1) + fib(i - 2);
    }
    const result = fib(n);
    post(() => fibonacci_matches(n, result), "The result must equal the nth Fibonacci number.");
    return result;
}

function fibonacci_iterative(n) {
    pre(() => Number.isInteger(n) && n >= 0 && n <= 78, "The index must be an integer from 0 to 78.");
    let previous = 0;
    let current = n === 0 ? 0 : 1;
    for (let i = 1; i < n; ++i) {
        [previous, current] = [current, previous + current];
    }
    post(() => fibonacci_matches(n, current), "The result must equal the nth Fibonacci number.");
    return current;
}

function extended_gcd(a, b) {
    pre(() => Number.isSafeInteger(a) && Number.isSafeInteger(b), "Both operands must be safe integers.");
    let u = Math.abs(a);
    let v = Math.abs(b);
    let x0 = 1;
    let x1 = 0;
    while (v !== 0) {
        const r = u % v;
        const q = (u - r) / v;
        const x2 = x0 - q * x1;
        x0 = x1;
        x1 = x2;
        u = v;
        v = r;
    }
    const x = a < 0 ? -x0 : x0;
    const g = u;
    post(() => {
        if (a === 0 && b === 0)
            return g === 0;
        if (g <= 0 || a % g !== 0 || b % g !== 0)
            return false;
        const difference = BigInt(g) - BigInt(a) * BigInt(x);
        return b === 0 ? difference === 0n : difference % BigInt(b) === 0n;
    }, "The result must divide both operands and satisfy Bézout's identity.");
    return [x, g];
}

function fast_segment_gcm(a, b) {
    pre(() => Number.isSafeInteger(a) && Number.isSafeInteger(b) && a > 0 && b > 0, "Both segment lengths must be positive safe integers.");
    const first = a;
    const second = b;
    while (a !== b) {
        const remainder = remainder_fast0(a, b);
        a = b;
        b = remainder;
    }
    post(() => gcd_matches(first, second, a, integer_monoid), "The result must be the greatest common measure.");
    return a;
}

function fast_subtractive_gcd(a, b, monoid) {
    // Precondition: monoid is Archimedean, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && !monoid.less(b, monoid.zero)
        && (!monoid_equal(a, monoid.zero, monoid) || !monoid_equal(b, monoid.zero, monoid)), "The operands must be nonnegative and at least one must be positive.");
    const first = a;
    const second = b;
    while (!monoid_equal(b, monoid.zero, monoid)) {
        a = remainder_nonnegative(a, b, monoid);
        if (monoid_equal(a, monoid.zero, monoid))
            break;
        b = remainder_nonnegative(b, a, monoid);
    }
    const result = monoid_equal(a, monoid.zero, monoid) ? b : a;
    post(() => gcd_matches(first, second, result, monoid), "The result must be the greatest common divisor.");
    return result;
}

function gcd(a, b) {
    while (b != 0) {
        const r = remainder(a, b);
        a = b;
        b = r;
    }
    return a;
}

function gcd0(a, b) {
    while (a != b) {
        if (b < a)
            a -= b;
        else
            b -= a;
    }
    return a;
}

function gcd1(a, b) {
    while (a != b) {
        while (b < a)
            a -= b;
        //swap(a, b) not possible in ES5
        const tmp = a;
        a = b;
        b = tmp;
    }
    return a;
}

function gcd2(a, b) {
    while (a != b) {
        a = remainder_slow(a, b);
        //swap(a, b) not possible in ES5
        const tmp = a;
        a = b;
        b = tmp;
    }
    return a;
}

function gcd3(a, b) {
    while (a !== b && b !== 0) {
        a = remainder(a, b);
        const tmp = a;
        a = b;
        b = tmp;
    }
    return a;
}

function gcm_recursive(a, b, monoid) {
    // Precondition: monoid is Archimedean, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && monoid.less(monoid.zero, a) && monoid.less(monoid.zero, b), "Both segment lengths must be positive.");
    function measure(x, y) {
        if (monoid.less(y, x))
            return measure(monoid.subtract(x, y), y);
        if (monoid.less(x, y))
            return measure(x, monoid.subtract(y, x));
        return x;
    }
    const result = measure(a, b);
    post(() => gcd_matches(a, b, result, monoid), "The result must be the greatest common measure.");
    return result;
}

function stein_gcd(a, b) {
    return stein_gcd_nonnegative(Math.abs(a), Math.abs(b));
}

function stein_gcd_nonnegative(a, b) {
    pre(() => Number.isSafeInteger(a) && Number.isSafeInteger(b) && a >= 0 && b >= 0 && (a !== 0 || b !== 0), "Inputs must be nonnegative safe integers and at least one must be nonzero.");
    if (a === 0)
        return b;
    if (b === 0)
        return a;
    let scale = 1;
    while (a % 2 === 0 && b % 2 === 0) {
        a /= 2;
        b /= 2;
        scale *= 2;
    }
    while (a % 2 === 0)
        a /= 2;
    while (b !== 0) {
        while (b % 2 === 0)
            b /= 2;
        if (b < a)
            [a, b] = [b, a];
        b -= a;
    }
    return scale * a;
}

function subtractive_gcd(a, b, monoid) {
    // Precondition: monoid is Archimedean, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && !monoid.less(b, monoid.zero)
        && (!monoid_equal(a, monoid.zero, monoid) || !monoid_equal(b, monoid.zero, monoid)), "The operands must be nonnegative and at least one must be positive.");
    const first = a;
    const second = b;
    while (!monoid_equal(b, monoid.zero, monoid)) {
        while (!monoid.less(a, b))
            a = monoid.subtract(a, b);
        if (monoid_equal(a, monoid.zero, monoid))
            break;
        while (!monoid.less(b, a))
            b = monoid.subtract(b, a);
    }
    const result = monoid_equal(a, monoid.zero, monoid) ? b : a;
    post(() => gcd_matches(first, second, result, monoid), "The result must be the greatest common divisor.");
    return result;
}

function abs(x) {
    pre(() => Number.isSafeInteger(x), "The argument must be a safe integer.");
    const result = x < 0 ? -x : x;
    post(() => result >= 0 && (result === x || result === -x), "The result must be the nonnegative magnitude.");
    return result;
}

function addition_defined_int32(a, b) {
    const min = -2147483648;
    const max = 2147483647;
    const operandsFit = Number.isInteger(a) && a >= min && a <= max
        && Number.isInteger(b) && b >= min && b <= max;
    const result = operandsFit && (b > 0 ? a <= max - b : a >= min - b);
    post(() => {
        // A number represents the widened sum of any two signed 32-bit integers exactly.
        return result === (operandsFit && a + b >= min && a + b <= max);
    }, "The predicate must agree with whether the signed 32-bit addition is defined.");
    return result;
}

function divides(i, n) {
    return n % i == 0;
}

function euclidean_norm(x, y) {
    pre(() => [x, y].every(Number.isFinite), "All coordinates must be finite.");
    const squaredLength = x * x + y * y;
    const result = Math.sqrt(squaredLength);
    post(() => {
        const squared = result * result;
        return result >= 0 && (squared === squaredLength
            || Math.abs((squared - squaredLength) / squaredLength) <= 2 * Number.EPSILON);
    }, "The result must be the nonnegative square root of the sum of squares.");
    return result;
}

function euclidean_norm_3(x, y, z) {
    pre(() => [x, y, z].every(Number.isFinite), "All coordinates must be finite.");
    const squaredLength = x * x + y * y + z * z;
    const result = Math.sqrt(squaredLength);
    post(() => {
        const squared = result * result;
        return result >= 0 && (squared === squaredLength
            || Math.abs((squared - squaredLength) / squaredLength) <= 2 * Number.EPSILON);
    }, "The result must be the nonnegative square root of the sum of squares.");
    return result;
}

function integer_sqrt(n) {
    //precondition: n >= 0
    if (n < 2) {
        return n;
    }
    // Find the shift amount.
    // shift = ceil(log2(n) * 0.5) * 2
    let shift = 2;
    while ((n >> shift) != 0) {
        shift += 2;
    }
    // Unroll the bit-setting loop.
    let result = 0;
    while (shift >= 0) {
        result = result << 1;
        const large_cand = result ^ 1;
        // large_cand = result + 1;
        if (large_cand * large_cand <= n >> shift) {
            result = large_cand;
        }
        shift -= 2;
    }
    return result;
}

function integer_sqrt_recursive(n) {
    //precondition: n >= 0
    if (n < 2) {
        return n;
    }
    const tmp = n >> 2;
    const small_cand = integer_sqrt_recursive(tmp) << 1;
    const large_cand = small_cand + 1;
    if (large_cand * large_cand > n) {
        return small_cand;
    }
    return large_cand;
}

function smallest_divisor(n) {
    //precondition: n > 0
    if (even(n))
        return 2;
    for (let i = 3; i * i <= n; i += 2) {
        if (divides(i, n)) {
            return i;
        }
    }
    return n;
}

function polynomial_value(f, l, x, ring) {
    // Precondition: the supplied operations satisfy the semiring laws.
    const coefficients = [];
    pre(() => {
        if (!is_bounded_range(f, l))
            return false;
        for (let i = f; !equal(i, l); i = successor(i)) {
            coefficients.push(source(i));
        }
        return true;
    }, "The iterators must delimit a readable range of coefficients.");
    let result = ring.zero;
    if (!equal(f, l)) {
        result = source(f);
        for (let i = successor(f); !equal(i, l); i = successor(i)) {
            result = ring.add(ring.multiply(result, x), source(i));
        }
    }
    post(() => {
        let expected = ring.zero;
        let power = ring.one;
        for (let i = coefficients.length - 1; i >= 0; --i) {
            const term = ring.multiply(coefficients[i], power);
            expected = ring.add(term, expected);
            if (i > 0)
                power = ring.multiply(power, x);
        }
        return ring.equal(result, expected);
    }, "The result must equal the sum of the coefficient terms.");
    return result;
}

function multiply0(n, a) {
    if (n == 1)
        return a;
    let product = multiply0(n - 1, a);
    product = add(product, a);
    return product;
}

function multiply1(n, a) {
    snapshot();
    if (n == 1)
        return a;
    let product = multiply1(half(n), add(a, a));
    if (odd(n)) {
        product = add(product, a);
    }
    return product;
}

function multiply2(n, a) {
    if (n == 1)
        return a;
    return multiply_accumulate4(a, n - 1, a);
}

function multiply3(n, a) {
    while (even(n)) {
        a = add(a, a);
        n = half(n);
    }
    if (n == 1)
        return a;
    return multiply_accumulate4(a, n - 1, a);
}

function multiply4(n, a) {
    while (even(n)) {
        a = add(a, a);
        n = half(n);
    }
    if (n == 1)
        return a;
    // even(n - 1) ==> n - 1 != 1
    return multiply_accumulate4(a, half(n - 1), add(a, a));
}

function multiply_accumulate0(r, n, a) {
    if (n == 1)
        return add(r, a);
    if (odd(n)) {
        return multiply_accumulate0(add(r, a), half(n), add(a, a));
    }
    return multiply_accumulate0(r, half(n), add(a, a));
}

function multiply_accumulate1(r, n, a) {
    if (n == 1)
        return add(r, a);
    if (odd(n)) {
        r = add(r, a);
    }
    return multiply_accumulate1(r, half(n), add(a, a));
}

function multiply_accumulate2(r, n, a) {
    if (odd(n)) {
        r = add(r, a);
        if (n == 1)
            return r;
    }
    return multiply_accumulate2(r, half(n), add(a, a));
}

function multiply_accumulate3(r, n, a) {
    if (odd(n)) {
        r = add(r, a);
        if (n == 1)
            return r;
    }
    n = half(n);
    a = add(a, a);
    return multiply_accumulate3(r, n, a);
}

function multiply_accumulate4(r, n, a) {
    while (true) {
        if (odd(n)) {
            r = add(r, a);
            if (n == 1)
                return r;
        }
        n = half(n);
        a = add(a, a);
    }
}

function multiply_accumulate_semigroup(r, n, a) {
    // precondition: n >= 0
    if (n == 0)
        return r;
    while (true) {
        if (odd(n)) {
            r = add(r, a);
            if (n == 1)
                return r;
        }
        n = half(n);
        a = add(a, a);
    }
}

function multiply_group(n, a) {
    if (n < 0) {
        n = -n;
        a = negate(a);
    }
    return multiply_monoid(n, a);
}

function multiply_monoid(n, a) {
    // precondition: n >= 0
    if (n == 0)
        return 0; //TODO
    return multiply_semigroup(n, a);
}

function multiply_semigroup(n, a) {
    // precondition: n > 0
    while (even(n)) {
        a = add(a, a);
        n = half(n);
    }
    if (n == 1)
        return a;
    // even(n - 1) ==> n - 1 != 1
    return multiply_accumulate_semigroup(a, half(n - 1), add(a, a));
}

function power(a, n, op) {
    if (n < 0) {
        n = -n;
        a = inverse_operation(op, a);
    }
    return power_monoid(a, n, op);
}

function power_accumulate_semigroup(r, a, n, op) {
    // precondition: n >= 0
    if (n == 0)
        return r;
    while (true) {
        if (odd(n)) {
            r = op(r, a);
            if (n == 1)
                return r;
        }
        n = half(n);
        a = op(a, a);
    }
}

function power_accumulate_semigroup0(r, a, n) {
    // precondition: n >= 0
    if (n == 0)
        return r;
    while (true) {
        if (odd(n)) {
            r = multiply(r, a);
            if (n == 1)
                return r;
        }
        n = half(n);
        a = multiply(a, a);
    }
}

function power_group(a, n, op) {
    if (n < 0) {
        n = -n;
        a = inverse_operation(op, a);
    }
    return power_monoid(a, n, op);
}

function power_group0(a, n) {
    if (n < 0) {
        n = -n;
        a = multiplicative_inverse(a);
    }
    return power_monoid0(a, n);
}

function power_monoid(a, n, op) {
    // precondition: n >= 0
    if (n == 0)
        return identity_element(op, a);
    return power_semigroup(a, n, op);
}

function power_monoid0(a, n) {
    // precondition: n >= 0
    if (n == 0)
        return multiplicative_identity(a);
    return power_semigroup0(a, n);
}

function power_semigroup(a, n, op) {
    // precondition: n > 0
    while (even(n)) {
        a = op(a, a);
        n = half(n);
    }
    if (n == 1)
        return a;
    // even(n - 1) ==> n - 1 != 1
    return power_accumulate_semigroup(a, op(a, a), half(n - 1), op);
}

function power_semigroup0(a, n) {
    // precondition: n > 0
    while (even(n)) {
        a = multiply(a, a);
        n = half(n);
    }
    if (n == 1)
        return a;
    // even(n - 1) ==> n - 1 != 1
    return power_accumulate_semigroup0(a, multiply(a, a), half(n - 1));
}

function fermat_test(n, witness) {
    //precondition: witness > 0 && witness < n
    const reminder = power_semigroup(witness, n - 1, modulo_multiply(n));
    return reminder == 1;
}

function is_charmichael(n) {
    //precondition: n > 1 && n is composite
    if (even(n)) {
        return false; // from Korselt's Theorem (1899):
    }
    let is_composite = false;
    for (let b = 3; b <= n; b += 2) {
        if (!is_composite && b * b > n) {
            return false;
        }
        if (are_coprime(b, n)) {
            is_composite = true;
        }
        else {
            const x = power_semigroup(b, n - 1, modulo_multiply(n));
            if (x != 1) {
                return false;
            }
        }
    }
    return true;
}

function is_charmichael0(n) {
    //precondition: n > 1 && n is composite
    let is_composite = false;
    for (let b = 2; b <= n; ++b) {
        if (!is_composite && b * b > n) {
            return false;
        }
        if (are_coprime(b, n)) {
            is_composite = true;
        }
        else {
            const x = power_semigroup(b, n - 1, modulo_multiply(n));
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
    let is_composite = false;
    for (let b = 2; b <= n; ++b) {
        if (!is_composite && b * b > n) {
            return false;
        }
        if (are_coprime(b, n)) {
            is_composite = true;
        }
        else {
            const x = power_semigroup(b, n - 1, modulo_multiply(n));
            if (x != 1) {
                return false;
            }
        }
    }
    return true;
}

function is_prime(n) {
    if (n <= 1)
        return false;
    const sd = smallest_divisor(n);
    return sd == n;
}

function miller_rabin_test(n, q, k, w) {
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

function multiplicative_inverse_fermat(a, p) {
    //precondition: p is prime && a > 0
    return power_monoid(a, p - 2, modulo_multiply_c(p));
}

function largest_doubling(a, b) {
    // precondition: b != 0
    while (a - b >= b)
        b += b;
    return b;
}

function quotient(a, b) {
    // precondition: b > 0
    if (a < b)
        return 0;
    let c = largest_doubling(a, b);
    let n = 1;
    a -= c;
    while (c != b) {
        c = half(c);
        n += n;
        if (c <= a) {
            a -= c;
            ++n;
        }
    }
    return n;
}

function quotient_remainder(a, b) {
    // precondition: b > 0
    if (a < b)
        return [0, a];
    let c = largest_doubling(a, b);
    let n = 1;
    a -= c;
    while (c != b) {
        c = half(c);
        n += n;
        if (c <= a) {
            a -= c;
            ++n;
        }
    }
    return [n, a];
}

function quotient_remainder_nonnegative(a, b, monoid) {
    // Precondition: monoid models the indicated concept, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && monoid.less(monoid.zero, b), "The dividend must be nonnegative and the divisor must be positive.");
    function divide(divisor) {
        if (monoid.less(a, divisor))
            return [0, a];
        const difference = monoid.subtract(a, divisor);
        if (monoid.less(difference, divisor))
            return [1, difference];
        const [q, r] = divide(monoid.add(divisor, divisor));
        if (monoid.less(r, divisor))
            return [2 * q, r];
        return [2 * q + 1, monoid.subtract(r, divisor)];
    }
    const result = divide(b);
    post(() => division_matches(a, b, result[0], result[1], monoid), "The quotient and remainder must reconstruct the dividend.");
    return result;
}

function quotient_remainder_nonnegative_iterative(a, b, monoid) {
    // Precondition: monoid models the indicated concept, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && monoid.less(monoid.zero, b), "The dividend must be nonnegative and the divisor must be positive.");
    let result = [0, a];
    if (!monoid.less(a, b)) {
        let chunk = monoid_largest_doubling(a, b, monoid);
        let remainder = monoid.subtract(a, chunk);
        let quotient = 1;
        while (!monoid_equal(chunk, b, monoid)) {
            chunk = monoid.half(chunk);
            quotient *= 2;
            if (!monoid.less(remainder, chunk)) {
                remainder = monoid.subtract(remainder, chunk);
                ++quotient;
            }
        }
        result = [quotient, remainder];
    }
    post(() => division_matches(a, b, result[0], result[1], monoid), "The quotient and remainder must reconstruct the dividend.");
    return result;
}

function remainder(a, b) {
    // precondition: b != 0
    if (a < b)
        return a;
    let c = largest_doubling(a, b);
    a -= c;
    while (c != b) {
        c = half(c);
        if (c <= a)
            a -= c;
    }
    return a;
}

function remainder_fast0(a, b) {
    if (a <= b)
        return a;
    if (a - b <= b)
        return a - b;
    a = remainder_fast0(a, b + b);
    if (a <= b)
        return a;
    return a - b;
}

function remainder_fast1(a, b) {
    // precondition: b != 0
    if (a < b)
        return a;
    if (a - b < b)
        return a - b;
    a = remainder_fast1(a, b + b);
    if (a < b)
        return a;
    return a - b;
}

function remainder_fibonacci(a, b) {
    // precondition: b > 0
    if (a < b)
        return a;
    let c = b;
    do {
        const tmp = c;
        c += b;
        b = tmp;
    } while (a >= c);
    do {
        if (a >= b)
            a -= b;
        const tmp = c - b;
        c = b;
        b = tmp;
    } while (b < c);
    return a;
}

function remainder_nonnegative(a, b, monoid) {
    // Precondition: monoid models the indicated concept, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && monoid.less(monoid.zero, b), "The dividend must be nonnegative and the divisor must be positive.");
    function remaining(divisor) {
        if (monoid.less(a, divisor))
            return a;
        const difference = monoid.subtract(a, divisor);
        if (monoid.less(difference, divisor))
            return difference;
        const result = remaining(monoid.add(divisor, divisor));
        return monoid.less(result, divisor) ? result : monoid.subtract(result, divisor);
    }
    const result = remaining(b);
    post(() => {
        const [, expected] = quotient_remainder_nonnegative(a, b, monoid);
        return monoid_equal(result, expected, monoid);
    }, "The result must be the nonnegative remainder.");
    return result;
}

function remainder_nonnegative_iterative(a, b, monoid) {
    // Precondition: monoid models the indicated concept, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && monoid.less(monoid.zero, b), "The dividend must be nonnegative and the divisor must be positive.");
    let result = a;
    if (!monoid.less(a, b)) {
        let chunk = monoid_largest_doubling(a, b, monoid);
        result = monoid.subtract(result, chunk);
        while (!monoid_equal(chunk, b, monoid)) {
            chunk = monoid.half(chunk);
            if (!monoid.less(result, chunk))
                result = monoid.subtract(result, chunk);
        }
    }
    post(() => {
        const [, expected] = quotient_remainder_nonnegative(a, b, monoid);
        return monoid_equal(result, expected, monoid);
    }, "The result must be the nonnegative remainder.");
    return result;
}

function remainder_slow(a, b) {
    while (b < a)
        a -= b;
    return a;
}

function slow_quotient(a, b, monoid) {
    // Precondition: monoid models the indicated concept, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && monoid.less(monoid.zero, b), "The dividend must be nonnegative and the divisor must be positive.");
    let remainder = a;
    let result = 0;
    while (!monoid.less(remainder, b)) {
        remainder = monoid.subtract(remainder, b);
        ++result;
    }
    post(() => division_matches(a, b, result, remainder, monoid), "The quotient and remainder must reconstruct the dividend.");
    return result;
}

function slow_remainder(a, b, monoid) {
    // Precondition: monoid models the indicated concept, with pure operations.
    pre(() => monoid.contains(a) && monoid.contains(b)
        && !monoid.less(a, monoid.zero) && monoid.less(monoid.zero, b), "The dividend must be nonnegative and the divisor must be positive.");
    let result = a;
    while (!monoid.less(result, b))
        result = monoid.subtract(result, b);
    post(() => {
        if (monoid.less(result, monoid.zero) || !monoid.less(result, b))
            return false;
        let difference = a;
        while (monoid.less(result, difference))
            difference = monoid.subtract(difference, b);
        return monoid_equal(difference, result, monoid);
    }, "The remainder must be reachable by subtraction and lie below the divisor.");
    return result;
}

function mark_sieve(f, l, factor) {
    // precondition: ! equal(f, l)
    sink(f, 0);
    while (distance(f, l) > factor) {
        f = successor(f, factor);
        sink(f, 0);
    }
}

function mark_sieve_n(f, n, factor) {
    // precondition: n > 0
    sink(f, 0);
    while (n > factor) {
        f = successor(f, factor);
        n -= factor;
        sink(f, 0);
    }
}

function print_sieve(f, n) {
    let i = 0;
    let out = "2";
    while (i < n) {
        if (source(f)) {
            out += " " + (2 * i + 3);
        }
        f = successor(f);
        ++i;
    }
    print(out);
}

function sift(f, n) {
    fill_n(f, n, 1);
    let i = 0;
    let index_square = 3;
    let factor = 3;
    let current = f;
    const last = successor(f, n);
    while (index_square < n) {
        // invariant: index_square = 2i^2 + 6i + 3
        if (source(current)) {
            mark_sieve(successor(f, index_square), last, factor);
        }
        ++i;
        current = successor(current);
        factor = i + i + 3;
        index_square = 2 * i * (i + 3) + 3;
    }
}

function sift0(f, n) {
    fill_n(f, n, 1);
    let i = 0;
    let index_square = 3;
    let current = f;
    while (index_square < n) {
        // invariant: index_square = 2i^2 + 6i + 3
        if (source(current)) { // if current candidate is prime
            mark_sieve(successor(f, index_square), successor(f, n), i + i + 3);
        }
        ++i;
        current = successor(current);
        index_square = 2 * i * (i + 3) + 3;
    }
}

function sift1(f, n) {
    fill_n(f, n, 1);
    let i = 0;
    let index_square = 3;
    let factor = 3;
    let current = f;
    const last = successor(f, n);
    while (index_square < n) {
        // invariant: index_square = 2i^2 + 6i + 3
        if (source(current)) { // if current candidate is prime
            mark_sieve(successor(f, index_square), last, factor);
        }
        ++i;
        current = successor(current);
        factor = i + i + 3;
        index_square = 2 * i * (i + 3) + 3;
    }
}

function merge_n_adaptive(f0, n0, f1, n1, buffer, capacity, r) {
    // Precondition: r is a strict weak ordering.
    pre(() => [n0, n1, capacity].every(n => Number.isSafeInteger(n) && n >= 0), "Lengths must be nonnegative safe integers.");
    pre(() => equal(successor(f0, n0), f1), "The two ranges must be adjacent.");
    let expected;
    pre(() => {
        const last = successor(f1, n1);
        successor(buffer, capacity);
        if (!is_sorted_range(f0, f1, r) || !is_sorted_range(f1, last, r))
            return false;
        expected = stable_sort_snapshot(f0, last, r);
        return true;
    }, "Both ranges must be sorted and the buffer must have enough space.");
    pre(() => disjoint_counted_ranges(f0, n0 + n1, buffer, capacity), "The buffer must not overlap the input.");
    function merge(first, left, middle, right) {
        if (left === 0 || right === 0)
            return successor(middle, right);
        if (left <= capacity)
            return merge_n_with_buffer(first, left, middle, right, buffer, r);
        if (left === 1 && right === 1) {
            if (r(source(middle), source(first)))
                iter_swap(first, middle);
            return successor(middle);
        }
        let leftCut;
        let rightCut;
        if (left > right) {
            leftCut = successor(first, Math.floor(left / 2));
            const pivot = source(leftCut);
            rightCut = lower_bound_n(middle, right, pivot, r);
        }
        else {
            rightCut = successor(middle, Math.floor(right / 2));
            const pivot = source(rightCut);
            leftCut = upper_bound_n(first, left, pivot, r);
        }
        const leftPrefix = distance(first, leftCut);
        const rightPrefix = distance(middle, rightCut);
        const newMiddle = rotate_forward_range(leftCut, middle, rightCut);
        merge(first, leftPrefix, leftCut, rightPrefix);
        return merge(newMiddle, left - leftPrefix, rightCut, right - rightPrefix);
    }
    const result = merge(f0, n0, f1, n1);
    post(() => equal(result, successor(f0, n0 + n1)), "The result must be the end of the merged range.");
    post(() => range_matches_snapshot(f0, result, expected), "The merge must preserve the order of equivalent elements.");
    return result;
}

function merge_n_with_buffer(f0, n0, f1, n1, buffer, r) {
    // Precondition: r is a strict weak ordering.
    pre(() => [n0, n1].every(n => Number.isSafeInteger(n) && n >= 0), "Lengths must be nonnegative safe integers.");
    pre(() => equal(successor(f0, n0), f1), "The two ranges must be adjacent.");
    let expected;
    pre(() => {
        const last = successor(f1, n1);
        successor(buffer, n0);
        if (!is_sorted_range(f0, f1, r) || !is_sorted_range(f1, last, r))
            return false;
        expected = stable_sort_snapshot(f0, last, r);
        return true;
    }, "Both ranges must be sorted and the buffer must have enough space.");
    pre(() => disjoint_counted_ranges(f0, n0 + n1, buffer, n0), "The buffer must not overlap the input.");
    copy_n(f0, n0, buffer);
    const [, , result] = combine_copy_n(buffer, n0, f1, n1, f0, relation_source(r));
    post(() => equal(result, successor(f0, n0 + n1)), "The result must be the end of the merged range.");
    post(() => range_matches_snapshot(f0, result, expected), "The merge must preserve the order of equivalent elements.");
    return result;
}

function insertion_sort(f, l, r) {
    if (equal(f, l))
        return;
    const c = successor(f);
    if (equal(c, l))
        return;
    // create a sentinel
    const min = min_element_nonempty(f, l, r);
    if (!equal(min, f)) {
        rotate_right_by_one_nonempty(f, successor(min));
        increment_custom_stat("Misplaced elements");
        register_move_distance(distance(f, min));
    }
    insertion_sort_suffix_nonempty(c, l, r);
}

function insertion_sort_backward(f, l, r) {
    if (equal(f, l))
        return;
    l = predecessor(l);
    let c = l;
    while (!equal(c, f)) {
        c = predecessor(c);
        linear_insert_backward(c, l, r);
    }
}

function insertion_sort_classic(f, l, r) {
    if (equal(f, l))
        return;
    let c = successor(f);
    while (!equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function insertion_sort_classic_0(f, l, r) {
    if (equal(f, l))
        return;
    let c = successor(f);
    while (!equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function insertion_sort_classic_1(f, l, r) {
    if (equal(f, l))
        return;
    let c = successor(f);
    while (!equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function insertion_sort_classic_2(f, l, r) {
    if (equal(f, l))
        return;
    let c = successor(f);
    while (!equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function insertion_sort_classic_3(f, l, r) {
    if (equal(f, l))
        return;
    let c = successor(f);
    while (!equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function insertion_sort_suffix_nonempty(f, l, r) {
    //precondition: ! equal(f, l)
    let c = successor(f);
    while (!equal(c, l)) {
        linear_insert_unguarded(c, r);
        c = successor(c);
    }
}

function linear_insert_unguarded(c, r) {
    if (!call(r, c, predecessor(c)))
        return c;
    increment_custom_stat("Misplaced elements");
    const value = source_move(c);
    const d = shift_right_while_unguarded(c, bind(r, value));
    sink_move(d, value);
    register_move_distance(distance(d, c));
    return d;
}

function sort_linked_nonempty_n_iterative(f, n, r, link) {
    // Precondition: r is a strict weak ordering over the values.
    pre(() => Number.isSafeInteger(n) && n > 0, "The count must be a positive safe integer.");
    let original;
    let suffix = null;
    pre(() => {
        original = new Map();
        let node = f;
        for (let i = 0; i < n; ++i) {
            if (node === null || original.has(node))
                return false;
            original.set(node, { index: i, value: link.value(node) });
            node = link.next(node);
        }
        if (node !== null && original.has(node))
            return false;
        suffix = node;
        return true;
    }, "The range must contain n distinct linked nodes.");
    function* runs() {
        let node = f;
        for (let i = 0; i < n && node !== null; ++i) {
            const current = node;
            node = link.next(current);
            link.setNext(current, null);
            yield { first: current, last: current };
        }
    }
    const merge = (a, b) => {
        if (a === null || b === null)
            return a ?? b;
        let left = a.first;
        let right = b.first;
        function take() {
            if (left === null || (right !== null && r(link.value(right), link.value(left)))) {
                const node = right;
                right = link.next(node);
                return node;
            }
            const node = left;
            left = link.next(node);
            return node;
        }
        const first = take();
        let last = first;
        while (left !== null && right !== null) {
            const node = take();
            link.setNext(last, node);
            last = node;
        }
        link.setNext(last, left ?? right);
        return { first, last: left === null ? b.last : a.last };
    };
    const result = reduce_balanced_iterable(runs(), merge, null);
    link.setNext(result.last, suffix);
    post(() => {
        let node = result.first;
        let previous;
        const seen = new Set();
        for (let i = 0; i < n; ++i) {
            if (node === null || seen.has(node))
                return false;
            const entry = original.get(node);
            if (!entry || !Object.is(entry.value, link.value(node)))
                return false;
            if (previous && (r(entry.value, previous.value) ||
                (!r(previous.value, entry.value) && previous.index > entry.index)))
                return false;
            seen.add(node);
            previous = entry;
            node = link.next(node);
        }
        return node === suffix;
    }, "The same nodes and values must be stably sorted and linked to the original end.");
    return [result.first, suffix];
}

function sort_n_adaptive(f, n, buffer, capacity, r) {
    // Precondition: r is a strict weak ordering.
    pre(() => [n, capacity].every(count => Number.isSafeInteger(count) && count >= 0), "Lengths must be nonnegative safe integers.");
    let expected;
    pre(() => {
        const last = successor(f, n);
        successor(buffer, capacity);
        expected = stable_sort_snapshot(f, last, r);
        return true;
    }, "The input and buffer must have enough elements.");
    pre(() => disjoint_counted_ranges(f, n, buffer, capacity), "The buffer must not overlap the input.");
    function sort(first, count) {
        if (count < 2)
            return successor(first, count);
        const half = Math.floor(count / 2);
        const middle = sort(first, half);
        sort(middle, count - half);
        return merge_n_adaptive(first, half, middle, count - half, buffer, capacity, r);
    }
    const result = sort(f, n);
    post(() => equal(result, successor(f, n)), "The result must be the end of the sorted range.");
    post(() => range_matches_snapshot(f, result, expected), "The sort must preserve the order of equivalent elements.");
    return result;
}

function sort_n_with_buffer(f, n, buffer, r) {
    // Precondition: r is a strict weak ordering.
    pre(() => Number.isSafeInteger(n) && n >= 0, "Lengths must be nonnegative safe integers.");
    const capacity = Math.ceil(n / 2);
    let expected;
    pre(() => {
        const last = successor(f, n);
        successor(buffer, capacity);
        expected = stable_sort_snapshot(f, last, r);
        return true;
    }, "The input and buffer must have enough elements.");
    pre(() => disjoint_counted_ranges(f, n, buffer, capacity), "The buffer must not overlap the input.");
    function sort(first, count) {
        if (count < 2)
            return successor(first, count);
        const half = Math.floor(count / 2);
        const middle = sort(first, half);
        sort(middle, count - half);
        return merge_n_with_buffer(first, half, middle, count - half, buffer, r);
    }
    const result = sort(f, n);
    post(() => equal(result, successor(f, n)), "The result must be the end of the sorted range.");
    post(() => range_matches_snapshot(f, result, expected), "The sort must preserve the order of equivalent elements.");
    return result;
}

function selection_sort_classic(f, l, r) {
    // postcondition: is_sorted(f, l, r)
    while (!equal(f, l)) {
        const m = min_element(f, l, r);
        iter_swap(f, m);
        f = successor(f);
    }
}

function selection_sort_stable(f, l, r) {
    while (!equal(f, l)) {
        const m = min_element(f, l, r);
        rotate_right_by_one(f, successor(m));
        f = successor(f);
    }
}

function sort3(x, y, z, c) {
    let r = 0;
    if (!call(c, y, x)) { // if x <= y
        if (!call(c, z, y)) { // if y <= z
            return r; // x <= y && y <= z
        }
        // x <= y && y > z
        iter_swap(y, z); // x <= z && y < z
        r = 1;
        if (call(c, y, x)) { // if x > y
            iter_swap(x, y); // x < y && y <= z
            r = 2;
        }
        return r; // x <= y && y < z
    }
    if (call(c, z, y)) { // x > y, if y > z
        iter_swap(x, z); // x < y && y < z
        r = 1;
        return r;
    }
    iter_swap(x, y); // x > y && y <= z
    r = 1; // x < y && x <= z
    if (call(c, z, y)) { // if y > z
        iter_swap(y, z); // x <= y && y < z
        r = 2;
    }
    return r;
}

function cycle_from(i, f) {
    // Precondition: f forms a closed permutation cycle through i, and all its positions are writable.
    const tmp = source(i);
    let j = i;
    let k = f(i);
    while (!equal(k, i)) {
        sink(j, source(k));
        j = k;
        k = f(k);
    }
    sink(j, tmp);
}

function cycle_to(i, f) {
    let k = f(i);
    while (!equal(k, i)) {
        exchange_values(i, k);
        k = f(k);
    }
}

function cycle_to_2n_1(i, f) {
    let k = f(i);
    if (equal(k, i))
        return;
    const buf = seq(array_all_equal(1, "-"), "buf");
    let b = begin(buf);
    let b2 = i;
    sink(b, source(k));
    sink(k, source(b2));
    const [nextBuffer, nextInput] = swap_iters(b, b2);
    b = nextBuffer;
    b2 = nextInput;
    k = f(k);
    while (!equal(k, i)) {
        sink(b, source(k));
        sink(k, source(b2));
        const [nextBuffer, nextInput] = swap_iters(b, b2);
        b = nextBuffer;
        b2 = nextInput;
        k = f(k);
    }
    sink(i, source(b2));
}

function cycle_to_recursive(i, f) {
    const k = f(i);
    if (equal(k, i))
        return;
    const buf = seq(array_all_equal(1, "-"), "buf");
    const b = begin(buf);
    cycle_to_internal(i, k, f, b);
    sink(k, source(i));
    sink(i, source(b));
}

function reverse(f, l) {
    while (true) {
        if (equal(f, l))
            return;
        l = predecessor(l);
        if (equal(f, l))
            return;
        iter_swap(f, l);
        f = successor(f);
    }
}

function reverse_bidirectional(f, l) {
    while (true) {
        if (equal(f, l))
            return;
        l = predecessor(l);
        if (equal(f, l))
            return;
        iter_swap(f, l);
        f = successor(f);
    }
}

function reverse_indexed(f, l) {
    let expected;
    pre(() => {
        if (!is_bounded_range(f, l))
            return false;
        expected = range_snapshot(f, l).reverse();
        return true;
    }, "The iterators must delimit a valid range.");
    reverse_n_indexed(f, distance(f, l));
    post(() => range_matches_snapshot(f, l, expected), "The range must be reversed.");
}

function reverse_n(f, l, n) {
    reverse_n_bidirectional(f, l, n);
}

function reverse_n_adaptive(f_i, n_i, f_b, n_b) {
    if (n_i < 2)
        return successor(f_i, n_i);
    if (n_i <= n_b)
        return reverse_n_with_buffer(f_i, n_i, f_b);
    const h_i = half(n_i);
    const n_mod_2 = n_i - twice(h_i);
    const m_i = successor(reverse_n_adaptive(f_i, h_i, f_b, n_b), n_mod_2);
    const l_i = reverse_n_adaptive(m_i, h_i, f_b, n_b);
    swap_ranges_n(f_i, m_i, h_i);
    return l_i;
}

function reverse_n_adaptive_iterative(f, n, buffer, capacity) {
    pre(() => Number.isSafeInteger(n) && n >= 0 && Number.isSafeInteger(capacity) && capacity >= 0, "The length and buffer capacity must be nonnegative safe integers.");
    let original;
    pre(() => {
        const l = successor(f, n);
        successor(buffer, capacity);
        original = [];
        for (let it = f; !equal(it, l); it = successor(it))
            original.push(source(it));
        return true;
    }, "The input and buffer must have enough elements.");
    pre(() => {
        if (n === 0 || capacity === 0)
            return true;
        const offset = distance(f, buffer);
        if (offset >= n || offset <= -capacity)
            return true;
        return offset >= 0
            ? !equal(successor(f, offset), buffer)
            : !equal(f, successor(buffer, -offset));
    }, "The input and buffer must not overlap.");
    function* blocks() {
        let first = f;
        let remaining = n;
        const width = Math.max(1, capacity);
        while (remaining !== 0) {
            const count = Math.min(width, remaining);
            const last = successor(first, count);
            if (count > 1)
                reverse_n_with_buffer(first, count, buffer);
            yield { first, last };
            first = last;
            remaining -= count;
        }
    }
    const combine = (a, b) => {
        if (a === null || b === null)
            return a ?? b;
        let first = a.first;
        let middle = b.first;
        let right = middle;
        do {
            exchange_values(first, right);
            first = successor(first);
            right = successor(right);
            if (equal(first, middle))
                middle = right;
        } while (!equal(right, b.last));
        right = middle;
        while (!equal(right, b.last)) {
            exchange_values(first, right);
            first = successor(first);
            right = successor(right);
            if (equal(first, middle))
                middle = right;
            else if (equal(right, b.last))
                right = middle;
        }
        return { first: a.first, last: b.last };
    };
    const result = reduce_balanced_iterable(blocks(), combine, null);
    const last = result?.last ?? f;
    post(() => equal(last, successor(f, n)), "The result must be just past the reversed range.");
    post(() => {
        let it = f;
        for (let i = n - 1; i >= 0; --i) {
            if (!Object.is(source(it), original[i]))
                return false;
            it = successor(it);
        }
        return true;
    }, "The output must equal the input in reverse order.");
    return last;
}

function reverse_n_bidirectional(f, l, n) {
    pre(() => Number.isSafeInteger(n) && n >= 0 && is_bounded_range(f, l) && n <= distance(f, l), "The count must fit in the range.");
    reverse_swap_ranges_n(l, f, Math.floor(n / 2));
}

function reverse_n_forward(f, n) {
    if (n < 2)
        return successor(f, n);
    const h = half(n);
    const n_mod_2 = n - twice(h);
    const m = successor(reverse_n_forward(f, h), n_mod_2);
    const l = reverse_n_forward(m, h);
    swap_ranges_n(f, m, h);
    return l;
}

function reverse_n_indexed(f, n) {
    let i = 0;
    --n;
    while (i < n) {
        iter_swap(successor(f, i), successor(f, n));
        ++i;
        --n;
    }
}

function reverse_n_with_buffer(f_i, n, f_b) {
    return reverse_copy(f_b, copy_n(f_i, n, f_b)[1], f_i);
}

function reverse_recursive(f, n) {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");
    let last;
    let expected;
    pre(() => {
        last = successor(f, n);
        expected = range_snapshot(f, last).reverse();
        return true;
    }, "The counted range must exist.");
    const result = reverse_n_forward(f, n);
    post(() => equal(result, last), "The result must be the end of the counted range.");
    post(() => range_matches_snapshot(f, last, expected), "The counted range must be reversed.");
    return result;
}

function reverse_until(f, m, l) {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l), "The middle must lie within the range.");
    const n = Math.min(distance(f, m), distance(m, l));
    const [back, front] = reverse_swap_ranges_n(l, f, n);
    return [front, back];
}

function gries_mills_rotate(f, m, l) {
    let expected;
    pre(() => {
        if (!is_bounded_range(f, m) || !is_bounded_range(m, l))
            return false;
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    }, "The middle must lie within the range.");
    let first = f;
    let middle = m;
    while (!equal(first, middle) && !equal(middle, l)) {
        const [nextFirst, nextSecond] = swap_ranges_bounded(first, middle, middle, l);
        if (equal(nextFirst, middle) && equal(nextSecond, l))
            break;
        if (equal(nextFirst, middle)) {
            first = middle;
            middle = nextSecond;
        }
        else {
            first = nextFirst;
        }
    }
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
}

function k_rotate_from_permutation_indexed(f, m, l) {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l) && !equal(m, l), "The middle must belong to the nonempty range.");
    const left = distance(f, m);
    const right = distance(m, l);
    return x => {
        pre(() => is_bounded_range(f, x) && is_bounded_range(x, l) && !equal(x, l), "The destination must belong to the range.");
        const offset = distance(f, x);
        const result = offset < right ? successor(x, left) : successor(f, offset - right);
        post(() => equal(result, successor(f, (distance(f, x) + left) % (left + right))), "The result must identify the source of the rotated element.");
        return result;
    };
}

function k_rotate_from_permutation_random_access(f, m, l) {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l) && !equal(m, l), "The middle must belong to the nonempty range.");
    const left = distance(f, m);
    const right = distance(m, l);
    const boundary = successor(f, right);
    return x => {
        pre(() => is_bounded_range(f, x) && is_bounded_range(x, l) && !equal(x, l), "The destination must belong to the range.");
        const result = distance(x, boundary) > 0 ? successor(x, left) : predecessor(x, right);
        post(() => equal(result, successor(f, (distance(f, x) + left) % (left + right))), "The result must identify the source of the rotated element.");
        return result;
    };
}

function rotate(f, m, l) {
    let expected;
    pre(() => {
        if (!is_bounded_range(f, m) || !is_bounded_range(m, l))
            return false;
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    }, "The middle must lie within the range.");
    const result = rotate_forward_range(f, m, l);
    post(() => equal(result, successor(f, distance(m, l))), "The result must mark the new position of the original first element.");
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
    return result;
}

function rotate_bidirectional(f, m, l) {
    reverse(f, m);
    reverse(m, l);
    reverse(f, l);
}

function rotate_cycles(f, m, l, sourceFor) {
    let expected;
    pre(() => {
        if (!is_bounded_range(f, m) || !is_bounded_range(m, l))
            return false;
        const left = distance(f, m);
        const n = distance(f, l);
        for (let i = 0; i < n; ++i) {
            if (!equal(sourceFor(successor(f, i)), successor(f, (i + left) % n)))
                return false;
        }
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    }, "The range must be valid and the source mapping must describe its rotation.");
    const left = distance(f, m);
    const right = distance(m, l);
    if (left !== 0 && right !== 0) {
        for (let d = gcd(left, right); d > 0; --d) {
            cycle_from(successor(f, d - 1), sourceFor);
        }
    }
    const result = successor(f, right);
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
    return result;
}

function rotate_forward(f, m, l) {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    let expected;
    pre(() => {
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    });
    const [result, middle] = rotate_forward_step(f, m, l);
    let first = result;
    let next = middle;
    while (!equal(next, l)) {
        [first, next] = rotate_forward_step(first, next, l);
    }
    post(() => equal(result, successor(f, distance(m, l))), "The result must mark the end of the moved suffix.");
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
    return result;
}

function rotate_forward_annotated(f, m, l) {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    let expected;
    pre(() => {
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    });
    let first = f;
    let middle = m;
    let left = distance(f, m);
    let right = distance(m, l);
    while (true) {
        pre(() => left === distance(first, middle) && right === distance(middle, l), "The block counts must match the remaining ranges.");
        const [nextFirst, nextSecond] = swap_ranges_bounded(first, middle, middle, l);
        if (equal(nextFirst, middle) && equal(nextSecond, l))
            break;
        first = nextFirst;
        if (equal(first, middle)) {
            middle = nextSecond;
            right -= left;
        }
        else {
            left -= right;
        }
    }
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
}

function rotate_forward_step(f, m, l) {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    const start = f;
    let expected;
    let middleIndex = 0;
    let completed = 0;
    pre(() => {
        expected = range_snapshot(f, l);
        middleIndex = distance(f, m);
        for (let i = middleIndex; i < expected.length; ++i) {
            [expected[completed], expected[i]] = [expected[i], expected[completed]];
            if (++completed === middleIndex)
                middleIndex = i + 1;
        }
        return true;
    });
    let c = m;
    do {
        exchange_values(f, c);
        f = successor(f);
        c = successor(c);
        if (equal(f, m))
            m = c;
    } while (!equal(c, l));
    post(() => equal(f, successor(start, completed)) && equal(m, successor(start, middleIndex)), "The result must identify the updated start and middle.");
    post(() => range_matches_snapshot(start, l, expected), "The range must reflect the swaps of one pass.");
    return [f, m];
}

function rotate_indexed_nontrivial(f, m, l) {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    const sourceFor = k_rotate_from_permutation_indexed(f, m, l);
    return rotate_cycles(f, m, l, sourceFor);
}

function rotate_partial_nontrivial(f, m, l) {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    let suffix;
    let prefix;
    pre(() => {
        suffix = range_snapshot(m, l);
        prefix = range_value_counts(f, m);
        return true;
    });
    const result = swap_ranges(m, l, f);
    post(() => equal(result, successor(f, suffix.length)), "The result must mark the end of the moved suffix.");
    post(() => range_matches_snapshot(f, result, suffix) && has_range_value_counts(result, l, prefix), "The suffix must keep its order and the remaining values must come from the original prefix.");
    return result;
}

function rotate_random_access_nontrivial(f, m, l) {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    const sourceFor = k_rotate_from_permutation_random_access(f, m, l);
    return rotate_cycles(f, m, l, sourceFor);
}

function rotate_right_by_one(f, l) {
    if (equal(f, l))
        return;
    const butlast = predecessor(l);
    const x = source_move(butlast);
    move_backward(f, butlast, l);
    sink_move(f, x);
}

function rotate_right_by_one_nonempty(f, l) {
    const butlast = predecessor(l);
    const x = source_move(butlast);
    move_backward(f, butlast, l);
    sink_move(f, x);
}

function rotate_unguarded(f, m, l) {
    let expected;
    pre(() => {
        if (!is_bounded_range(f, m) || !is_bounded_range(m, l))
            return false;
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    }, "The middle must lie within the range.");
    pre(() => !equal(f, m) && !equal(m, l), "Both parts must be nonempty.");
    let middle = m;
    let [first, second] = swap_ranges_bounded(f, middle, middle, l);
    while (!equal(first, middle) || !equal(second, l)) {
        if (equal(first, middle))
            middle = second;
        [first, second] = swap_ranges_bounded(first, middle, middle, l);
    }
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
}

function rotate_with_buffer_backward_nontrivial(f, m, l, buffer) {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    let expected;
    pre(() => {
        const n = distance(f, l);
        successor(buffer, n);
        if (!disjoint_counted_ranges(f, n, buffer, n))
            return false;
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    }, "The buffer must be separate and have room for the entire range.");
    const bufferEnd = copy(m, l, buffer);
    copy_backward(f, m, l);
    const result = copy(buffer, bufferEnd, f);
    post(() => equal(result, successor(f, distance(m, l))), "The result must mark the end of the moved suffix.");
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
    return result;
}

function rotate_with_buffer_nontrivial(f, m, l, buffer) {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l)
        && !equal(f, m) && !equal(m, l), "Both parts must be nonempty and belong to the same range.");
    let expected;
    pre(() => {
        const n = distance(f, l);
        successor(buffer, n);
        if (!disjoint_counted_ranges(f, n, buffer, n))
            return false;
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    }, "The buffer must be separate and have room for the entire range.");
    const bufferEnd = copy(f, m, buffer);
    const result = copy(m, l, f);
    copy(buffer, bufferEnd, result);
    post(() => equal(result, successor(f, distance(m, l))), "The result must mark the end of the moved suffix.");
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
    return result;
}

function three_reverse_rotate(f, m, l) {
    let expected;
    pre(() => {
        if (!is_bounded_range(f, m) || !is_bounded_range(m, l))
            return false;
        expected = range_snapshot(m, l).concat(range_snapshot(f, m));
        return true;
    }, "The middle must lie within the range.");
    reverse_bidirectional(f, m);
    reverse_bidirectional(m, l);
    reverse_bidirectional(f, l);
    post(() => range_matches_snapshot(f, l, expected), "The suffix must precede the original prefix.");
}

function shift_right_by_one(f, l) {
    if (equal(f, l))
        return;
    copy_backward(f, predecessor(l), l);
}

function shift_right_while(f, l, p) {
    while (!equal(f, l) && p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
    }
    return l;
}

function shift_right_while_nonempty(f, l, p) {
    //precondition: ! equal(f, l)
    while (p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
        if (equal(f, l))
            break;
    }
    return l;
}

function shift_right_while_unguarded(l, p) {
    while (p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
    }
    return l;
}

function is_heap_until_n(f, n, r) {
    let p = f;
    for (let ci = 1; ci < n; ++ci) {
        const c = successor(f, ci);
        if (r(source(p), source(c))) {
            return ci;
        }
        if (even(ci)) {
            p = successor(p);
        }
    }
    return n;
}

function is_heap_until_n_0(f, n, r) {
    let pi = 0;
    for (let ci = 1; ci < n; ++ci) {
        const c = successor(f, ci);
        const p = successor(f, pi);
        if (r(source(p), source(c))) {
            return ci;
        }
        if (even(ci)) {
            ++pi;
        }
    }
    return n;
}

function make_heap_n(f, n) {
    // assert(n > 2); //other sizes handled outside
    const fpi = Math.floor((n - 3) / 2);
    let fp = successor(f, fpi); //firstParent
    let frk = successor(f, (fpi + 1) * 2); //firstRightKid
    for (;; fp = predecessor(fp), frk = predecessor(frk, 2)) {
        const lucifer = source(fp);
        let parent = fp;
        let rk = frk; //rightKid
        for (;;) {
            const jr = predecessor(rk, Number(source(predecessor(rk)) <= source(rk)));
            const crt = source(jr);
            if (lucifer <= crt)
                break;
            sink(parent, crt);
            parent = jr;
            // rk = (jr + 1) * 2;
            const rki = (distance(f, jr) + 1) * 2;
            // if (rki >= n) goto write;
            if (rki >= n) {
                sink(parent, lucifer);
                break;
            }
            rk = successor(f, rki);
        }
        // if (parent != fp) {
        if (!equal(parent, fp)) {
            sink(parent, lucifer);
        }
        // if (fp == 0) break;
        if (equal(fp, f))
            break;
    }
    if (n & 1)
        return;
    let childIndex = n - 1;
    while (true) {
        const parentIndex = Math.floor((childIndex - 1) / 2);
        const child = successor(f, childIndex);
        const parent = successor(f, parentIndex);
        const childValue = source(child);
        const parentValue = source(parent);
        if (parentValue <= childValue)
            break;
        sink(parent, childValue);
        sink(child, parentValue);
        if (parentIndex === 0)
            break;
        childIndex = parentIndex;
    }
}

function make_heap_n_naive_0(f, n) {
    let i = Math.floor(n / 2) - 1;
    for (; i >= 0; --i) {
        shift_down(f, i, n);
    }
}

function make_heap_n_naive_1(f, n) {
    let i = Math.floor(n / 2) - 1;
    for (; i >= 0; --i) {
        shift_down(f, i, n);
    }
}

function push_heap_gnu_0(f, l, r) {
    //precondition: [f, l - 1) is a valid heap
    l = predecessor(l);
    const value = source_move(l);
    push_heap_gnu_helper(f, distance(f, l), 0, move_obj(value), r);
}

function push_heap_gnu_1(f, l, r) {
    //precondition: [f, l - 1) is a valid heap
    l = predecessor(l);
    const value = source_move(l);
    push_heap_gnu_helper(f, distance(f, l), 0, move_obj(value), r);
}

function push_heap_n(f, n, r) {
    while (n > 1) {
        const l = successor(f, n - 1);
        const pidx = parent(n - 1);
        const p = successor(f, pidx);
        if (!r(source(p), source(l))) {
            return;
        }
        iter_swap(p, l);
        n = pidx + 1;
    }
}

function partition_bidirectional(f, l, p) {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    let original;
    pre(() => {
        original = range_value_counts(f, l);
        return true;
    });
    const misses = (value) => !p(value);
    let first = f;
    let last = l;
    while (true) {
        first = find_if(first, last, p);
        last = find_backward_if(first, last, misses);
        if (equal(first, last))
            break;
        last = predecessor(last);
        exchange_values(first, last);
        first = successor(first);
    }
    post(() => is_bounded_range(f, first) && is_bounded_range(first, l), "The partition point must belong to the range.");
    post(() => partitioned_at_point(f, first, l, p), "The result must separate false and true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
    return first;
}

function partition_forward(f, l, p) {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    let original;
    pre(() => {
        original = range_value_counts(f, l);
        return true;
    });
    const point = potential_partition_point(f, l, p);
    let first = f;
    let next = find_if_not(point, l, p);
    while (!equal(next, l)) {
        first = find_if_unguarded(first, p);
        exchange_values(first, next);
        first = successor(first);
        next = find_if_not(successor(next), l, p);
    }
    post(() => is_bounded_range(f, point) && is_bounded_range(point, l), "The partition point must belong to the range.");
    post(() => partitioned_at_point(f, point, l, p), "The result must separate false and true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
    return point;
}

function partition_semistable(f, l, p) {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    let original;
    pre(() => {
        original = range_value_counts(f, l);
        return true;
    });
    let point = find_if(f, l, p);
    if (!equal(point, l)) {
        let current = successor(point);
        while (!equal(current, l)) {
            if (!p(source(current))) {
                exchange_values(point, current);
                point = successor(point);
            }
            current = successor(current);
        }
    }
    post(() => partitioned_at_point(f, point, l, p), "The result must separate false and true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
    return point;
}

function partition_semistable_1(f, l, p) {
    f = find_if(f, l, p);
    if (f == l)
        return f;
    let j = f;
    j = successor(j);
    while (!equal(j, l)) {
        if (!p(source(j))) {
            iter_swap(f, j);
            f = successor(f);
        }
        j = successor(j);
    }
    return f;
}

function partition_semistable_nonempty(f, l, p) {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    pre(() => !equal(f, l), "The range must not be empty.");
    let original;
    pre(() => {
        original = range_value_counts(f, l);
        return true;
    });
    let point = f;
    let current = f;
    let next = successor(current);
    while (!equal(next, l)) {
        if (!p(source(current))) {
            if (!equal(point, current))
                exchange_values(point, current);
            point = successor(point);
        }
        current = next;
        next = successor(current);
    }
    // Either value can occupy the first position of the true group.
    if (!equal(point, current))
        exchange_values(point, current);
    post(() => partitioned(f, l, p), "False elements must precede true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
}

function partition_sentinel(f, l, p) {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    let original;
    pre(() => {
        original = range_value_counts(f, l);
        return true;
    });
    const misses = (value) => !p(value);
    let first = f;
    let last = l;
    first = find_if(first, last, p);
    last = find_backward_if(first, last, misses);
    if (!equal(first, last)) {
        // The first exchange puts one sentinel on each side.
        last = predecessor(last);
        exchange_values(first, last);
        first = successor(first);
        while (true) {
            first = find_if_unguarded(first, p);
            last = find_backward_if_not_unguarded(last, p);
            if (equal(successor(last), first))
                break;
            exchange_values(first, last);
            first = successor(first);
        }
    }
    post(() => is_bounded_range(f, first) && is_bounded_range(first, l), "The partition point must belong to the range.");
    post(() => partitioned_at_point(f, first, l, p), "The result must separate false and true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
    return first;
}

function partition_single_cycle(f, l, p) {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    let original;
    pre(() => {
        original = range_value_counts(f, l);
        return true;
    });
    const point = potential_partition_point(f, l, p);
    const misses = (value) => !p(value);
    let first = find_if(f, point, p);
    let last = l;
    if (!equal(first, point)) {
        const saved = source(first);
        while (true) {
            last = predecessor(find_backward_if(point, last, misses));
            sink(first, source(last));
            first = find_if(successor(first), point, p);
            if (equal(first, point)) {
                sink(last, saved);
                break;
            }
            sink(last, source(first));
        }
    }
    post(() => is_bounded_range(f, point) && is_bounded_range(point, l), "The partition point must belong to the range.");
    post(() => partitioned_at_point(f, point, l, p), "The result must separate false and true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
    return point;
}

function partition_single_cycle_sentinel(f, l, p) {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    let original;
    pre(() => {
        original = range_value_counts(f, l);
        return true;
    });
    const point = potential_partition_point(f, l, p);
    let remaining = count_if(f, point, p);
    if (remaining > 0) {
        let first = find_if_unguarded(f, p);
        let last = l;
        const saved = source(first);
        while (remaining > 0) {
            last = find_backward_if_not_unguarded(last, p);
            sink(first, source(last));
            --remaining;
            if (remaining === 0) {
                sink(last, saved);
            }
            else {
                first = find_if_unguarded(successor(first), p);
                sink(last, source(first));
            }
        }
    }
    post(() => partitioned_at_point(f, point, l, p), "The result must separate false and true elements.");
    post(() => has_range_value_counts(f, l, original), "The output must be a permutation of the input.");
    return point;
}

function partition_stable_forward(f, l, p) {
    while (true) {
        if (equal(f, l))
            return f;
        if (p(source(f)))
            break;
        f = successor(f);
    }
    let j = f;
    j = successor(j);
    while (!equal(j, l)) {
        if (!p(source(j))) {
            rotate_bidirectional(f, j, successor(j)); //TODO: refine rotate_bidirectional(...)
            f = successor(f);
        }
        j = successor(j);
    }
    return f;
}

function partition_stable_n_adaptive(f, n, buffer, capacity, p) {
    pre(() => Number.isSafeInteger(n) && n >= 0 && Number.isSafeInteger(capacity) && capacity >= 0, "The length and buffer capacity must be nonnegative safe integers.");
    let expected;
    pre(() => {
        const last = successor(f, n);
        successor(buffer, capacity);
        expected = stable_partition_snapshot(f, last, p);
        return true;
    }, "The input and buffer must have enough elements.");
    pre(() => disjoint_counted_ranges(f, n, buffer, capacity), "The input and buffer must not overlap.");
    function leaf(first, count) {
        if (count === 0)
            return { point: first, last: first };
        const last = successor(first, count);
        const point = count === 1
            ? (p(source(first)) ? first : last)
            : partition_buffered_block(first, last, buffer, p);
        return { point, last };
    }
    function divide(first, count) {
        if (count <= Math.max(1, capacity))
            return leaf(first, count);
        const half = Math.floor(count / 2);
        const left = divide(first, half);
        const right = divide(left.last, count - half);
        return combine_partition_blocks(left, right);
    }
    const result = divide(f, n);
    post(() => equal(result.last, successor(f, n)), "The result must include the end of the counted range.");
    post(() => is_bounded_range(f, result.point) && is_bounded_range(result.point, result.last), "The partition point must belong to the range.");
    post(() => partitioned_at_point(f, result.point, result.last, p), "The point must separate false and true elements.");
    post(() => range_matches_snapshot(f, result.last, expected), "The order of each group must be preserved.");
    return [result.point, result.last];
}

function partition_stable_n_iterative(f, n, buffer, capacity, p) {
    pre(() => Number.isSafeInteger(n) && n >= 0 && Number.isSafeInteger(capacity) && capacity >= 0, "The length and buffer capacity must be nonnegative safe integers.");
    let expected;
    pre(() => {
        const last = successor(f, n);
        successor(buffer, capacity);
        expected = stable_partition_snapshot(f, last, p);
        return true;
    }, "The input and buffer must have enough elements.");
    pre(() => disjoint_counted_ranges(f, n, buffer, capacity), "The input and buffer must not overlap.");
    function leaf(first, count) {
        if (count === 0)
            return { point: first, last: first };
        const last = successor(first, count);
        const point = count === 1
            ? (p(source(first)) ? first : last)
            : partition_buffered_block(first, last, buffer, p);
        return { point, last };
    }
    function* blocks() {
        let first = f;
        let remaining = n;
        while (remaining > 0) {
            const width = Math.min(remaining, Math.max(1, capacity));
            const block = leaf(first, width);
            yield block;
            first = block.last;
            remaining -= width;
        }
    }
    const combine = (left, right) => left && right ? combine_partition_blocks(left, right) : left ?? right;
    const result = reduce_balanced_iterable(blocks(), combine, null) ?? { point: f, last: f };
    post(() => equal(result.last, successor(f, n)), "The result must include the end of the counted range.");
    post(() => is_bounded_range(f, result.point) && is_bounded_range(result.point, result.last), "The partition point must belong to the range.");
    post(() => partitioned_at_point(f, result.point, result.last, p), "The point must separate false and true elements.");
    post(() => range_matches_snapshot(f, result.last, expected), "The order of each group must be preserved.");
    return [result.point, result.last];
}

function partition_stable_with_buffer_0(f, l, p, b) {
    const tmp = partition_copy(f, l, f, b, p);
    const tf = tmp[0];
    const ts = tmp[1];
    copy(b, ts, tf);
    return tf;
}

function add_to_counter(f, l, op, x, z) {
    if (x === z)
        return z;
    while (!equal(f, l)) {
        const current = source(f);
        if (current === z) {
            sink(f, x);
            return z;
        }
        x = op(current, x);
        sink(f, z);
        f = successor(f);
    }
    return x;
}

function reduce(f, l, op, z) {
    if (equal(f, l))
        return z;
    return reduce_nonempty(f, l, op);
}

function reduce_balanced(f, l, op, z) {
    const bins = [];
    while (!equal(f, l)) {
        let carry = source(f);
        if (carry !== z) {
            let i = 0;
            while (i < bins.length && bins[i] !== z) {
                carry = op(bins[i], carry);
                bins[i] = z;
                ++i;
            }
            if (i < bins.length || carry !== z)
                bins[i] = carry;
        }
        f = successor(f);
    }
    let i = 0;
    while (i < bins.length && bins[i] === z)
        ++i;
    if (i === bins.length)
        return z;
    let result = bins[i];
    for (++i; i < bins.length; ++i) {
        if (bins[i] !== z)
            result = op(bins[i], result);
    }
    return result;
}

function reduce_balanced_iterable(values, op, z) {
    // Precondition: the traversal is finite, op is partially associative,
    // and z can be skipped as the neutral value.
    const bins = [];
    for (let carry of values) {
        if (carry === z)
            continue;
        let i = 0;
        while (i < bins.length && bins[i] !== z) {
            carry = op(bins[i], carry);
            bins[i] = z;
            ++i;
        }
        if (i < bins.length || carry !== z)
            bins[i] = carry;
    }
    let i = 0;
    while (i < bins.length && bins[i] === z)
        ++i;
    if (i === bins.length)
        return z;
    let result = bins[i];
    for (++i; i < bins.length; ++i) {
        if (bins[i] !== z)
            result = op(bins[i], result);
    }
    return result;
}

function reduce_n(f, n, op, z) {
    if (n === 0)
        return z;
    return reduce_nonempty_n(f, n, op);
}

function reduce_n_projected(f, n, op, project, z) {
    if (n === 0)
        return z;
    return reduce_nonempty_n_projected(f, n, op, project);
}

function reduce_nonempty(f, l, op) {
    pre(() => !equal(f, l), "The range must not be empty.");
    let result = source(f);
    f = successor(f);
    while (!equal(f, l)) {
        result = op(result, source(f));
        f = successor(f);
    }
    return result;
}

function reduce_nonempty_n(f, n, op) {
    pre(() => Number.isSafeInteger(n) && n > 0, "The count must be a positive safe integer.");
    let result = source(f);
    while (n > 1) {
        f = successor(f);
        result = op(result, source(f));
        --n;
    }
    return result;
}

function reduce_nonempty_n_projected(f, n, op, project) {
    pre(() => Number.isSafeInteger(n) && n > 0, "The count must be a positive safe integer.");
    let result = project(f);
    while (n > 1) {
        f = successor(f);
        result = op(result, project(f));
        --n;
    }
    return result;
}

function reduce_nonzeroes(f, l, op, z) {
    let result;
    do {
        if (equal(f, l))
            return z;
        result = source(f);
        f = successor(f);
    } while (result === z);
    while (!equal(f, l)) {
        const value = source(f);
        if (value !== z)
            result = op(result, value);
        f = successor(f);
    }
    return result;
}

function reduce_nonzeroes_n(f, n, op, z) {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");
    let result;
    do {
        if (n === 0)
            return z;
        result = source(f);
        f = successor(f);
        --n;
    } while (result === z);
    while (n !== 0) {
        const value = source(f);
        if (value !== z)
            result = op(result, value);
        f = successor(f);
        --n;
    }
    return result;
}

function reduce_nonzeroes_n_projected(f, n, op, project, z) {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");
    let result;
    do {
        if (n === 0)
            return z;
        result = project(f);
        f = successor(f);
        --n;
    } while (result === z);
    while (n !== 0) {
        const value = project(f);
        if (value !== z)
            result = op(result, value);
        f = successor(f);
        --n;
    }
    return result;
}

function equal_range(f, n, a, r) {
    // Precondition: the counted range is sorted according to r.
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");
    while (n !== 0) {
        const h = half(n);
        const m = successor(f, h);
        const value = source(m);
        if (r(value, a)) {
            f = successor(m);
            n -= h + 1;
        }
        else if (r(a, value)) {
            n = h;
        }
        else {
            const first = lower_bound_n(f, h, a, r);
            const last = upper_bound_n(successor(m), n - h - 1, a, r);
            return [first, last];
        }
    }
    return [f, f];
}

function lower_bound(f, l, a, r) {
    // The delegated search checks the partition and the returned boundary.
    return partition_point(f, l, (x) => r(x, a));
}

function lower_bound_n(f, n, a, r) {
    const below = (x) => r(x, a);
    const p = (x) => !below(x);
    pre(() => is_partitioned_n(f, n, p), "The range must be partitioned around the search value.");
    const result = partition_point_n(f, n, p);
    post(() => all(f, result, below), "Every element before the result must compare less than the search value.");
    post(() => none(result, successor(f, n), below), "No element from the result onward may compare less than the search value.");
    return result;
}

function partition_point(f, l, p) {
    pre(() => is_bounded_range(f, l), "The iterators must delimit a valid range.");
    const n = distance(f, l);
    const fails = (x) => !p(x);
    pre(() => is_partitioned_n(f, n, fails), "The predicate must be true before it is false.");
    const result = partition_point_n(f, n, fails);
    post(() => all(f, result, p), "Every element before the result must satisfy the predicate.");
    post(() => none(result, l, p), "No element from the result onward may satisfy the predicate.");
    return result;
}

function partition_point_n(f, n, p) {
    while (n != 0) {
        const h = half(n);
        const m = successor(f, h);
        if (p(source(m))) {
            n = h;
        }
        else {
            n -= h + 1;
            f = successor(m);
        }
    }
    return f;
}

function partition_point_n_forward(f, n, p) {
    let t = n;
    while (n != 0) {
        const h = half(n);
        const m = successor(f, h);
        if (p(source(m))) {
            n = h;
        }
        else {
            n -= h + 1;
            t -= h + 1;
            f = successor(m);
        }
    }
    return [f, t];
}

function upper_bound(f, l, a, r) {
    // The delegated search checks the partition and the returned boundary.
    return partition_point(f, l, (x) => !r(a, x));
}

function upper_bound_n(f, n, a, r) {
    const p = (x) => r(a, x);
    return partition_point_n(f, n, p);
}

function all(f, l, p) {
    const np = find_if_not(f, l, p);
    return equal(l, np);
}

function all_n(f, n, p) {
    const [, remaining] = find_if_not_n(f, n, p);
    return remaining === 0;
}

function find(f, l, x) {
    while (!equal(f, l) && source(f) !== x) {
        f = successor(f);
    }
    return f;
}

function find_adjacent_mismatch(f, l, r) {
    if (equal(f, l))
        return l;
    let previous = source(f);
    f = successor(f);
    while (!equal(f, l)) {
        const current = source(f);
        if (!r(previous, current))
            return f;
        previous = current;
        f = successor(f);
    }
    return l;
}

function find_adjacent_mismatch_forward(f, l, r) {
    if (equal(f, l))
        return l;
    let previous = f;
    f = successor(f);
    while (!equal(f, l) && r(source(previous), source(f))) {
        previous = f;
        f = successor(f);
    }
    return f;
}

function find_backward_if(f, l, p) {
    while (true) {
        if (equal(l, f))
            return f;
        l = predecessor(l);
        if (p(source(l)))
            return successor(l);
    }
}

function find_backward_if_not_unguarded(l, p) {
    // Precondition: there is a finite integer k > 0 such that
    // p(source(predecessor(l, k))) is false.
    do {
        l = predecessor(l);
    } while (p(source(l)));
    post(() => !p(source(l)), "The result must point to an element that fails the predicate.");
    return l;
}

function find_if(f, l, p) {
    while (!equal(f, l) && !p(source(f))) {
        f = successor(f);
    }
    return f;
}

function find_if_n(f, n, p) {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");
    while (n !== 0 && !p(source(f))) {
        f = successor(f);
        --n;
    }
    return [f, n];
}

function find_if_not(f, l, p) {
    while (!equal(f, l) && p(source(f))) {
        f = successor(f);
    }
    return f;
}

function find_if_not_n(f, n, p) {
    return find_if_n(f, n, value => !p(value));
}

function find_if_not_unguarded(f, p) {
    // Precondition: there is a finite integer k >= 0 such that
    // p(source(successor(f, k))) is false.
    // Without an end iterator, this cannot be checked in general.
    while (p(source(f))) {
        f = successor(f);
    }
    return f;
}

function find_if_unguarded(f, p) {
    // Precondition: there is a finite integer k >= 0 such that
    // p(source(successor(f, k))) is true.
    // Without an end iterator, this cannot be checked in general.
    while (!p(source(f))) {
        f = successor(f);
    }
    return f;
}

function find_mismatch(f0, l0, f1, l1, r) {
    while (!equal(f0, l0) && !equal(f1, l1) && r(source(f0), source(f1))) {
        f0 = successor(f0);
        f1 = successor(f1);
    }
    return [f0, f1];
}

function find_mismatch_bounded_n(f0, l0, f1, n1, r) {
    pre(() => Number.isSafeInteger(n1) && n1 >= 0, "Counts must be nonnegative safe integers.");
    while (!equal(f0, l0) && n1 !== 0 && r(source(f0), source(f1))) {
        f0 = successor(f0);
        f1 = successor(f1);
        --n1;
    }
    return [f0, f1, n1];
}

function find_mismatch_n(f0, n0, f1, n1, r) {
    pre(() => Number.isSafeInteger(n0) && n0 >= 0 && Number.isSafeInteger(n1) && n1 >= 0, "Counts must be nonnegative safe integers.");
    while (n0 !== 0 && n1 !== 0 && r(source(f0), source(f1))) {
        f0 = successor(f0);
        f1 = successor(f1);
        --n0;
        --n1;
    }
    return [f0, f1, n0, n1];
}

function find_mismatch_n_bounded(f0, n0, f1, l1, r) {
    pre(() => Number.isSafeInteger(n0) && n0 >= 0, "Counts must be nonnegative safe integers.");
    while (n0 !== 0 && !equal(f1, l1) && r(source(f0), source(f1))) {
        f0 = successor(f0);
        f1 = successor(f1);
        --n0;
    }
    return [f0, f1, n0];
}

function find_n(f, n, x) {
    return find_if_n(f, n, value => value === x);
}

function find_not(f, l, x) {
    while (!equal(f, l) && source(f) === x) {
        f = successor(f);
    }
    return f;
}

function find_not_n(f, n, x) {
    return find_if_n(f, n, value => value !== x);
}

function find_subsequence_n_naive(f, fn, s, sn, r) {
    if (sn == 0)
        return [f, fn];
    while (true) {
        if (fn < sn)
            return [f, 0];
        let tf = f;
        let ts = s;
        let n = sn;
        while (true) {
            if (n == 0)
                return [f, fn];
            if (!r(source(tf), source(ts)))
                break;
            --n;
            ts = successor(ts);
            tf = successor(tf);
        }
        --fn;
        f = successor(f);
    }
    return [f, fn];
}

function find_subsequence_n_naive_1(f, fn, s, sn, r) {
    if (sn == 0)
        return [f, fn];
    while (true) {
        if (fn < sn)
            return [f, 0];
        let tf = f;
        let ts = s;
        let n = sn;
        while (true) {
            if (n == 0)
                return [f, fn];
            if (!r(source(tf), source(ts)))
                break;
            --n;
            ts = successor(ts);
            tf = successor(tf);
        }
        let skip = 1;
        if (n != sn) {
            const eqf = predicate(function eqf(x) { return r(x, source(tf)); });
            const it = find_if(s, ts, eqf);
            if (equal(it, ts)) {
                skip = sn - n;
            }
        }
        fn -= skip;
        f = successor(f, skip);
    }
    return [f, fn];
}

function find_subsequence_naive(f, l, sf, sl, r) {
    if (equal(sf, sl))
        return f;
    while (true) {
        let tf = f;
        let ts = sf;
        while (true) {
            if (equal(tf, l))
                return l;
            if (equal(ts, sl))
                return f;
            if (!r(source(tf), source(ts)))
                break;
            ts = successor(ts);
            tf = successor(tf);
        }
        f = successor(f);
    }
    return f;
}

function find_with_sentinel(f, l, x) {
    // Precondition: equality is reflexive for x.
    if (equal(f, l))
        return l;
    const last = predecessor(l);
    const saved = source(last);
    sink(last, x);
    const result = find_if_unguarded(f, value => value === x);
    sink(last, saved);
    if (equal(result, last) && saved !== x)
        return l;
    return result;
}

function none(f, l, p) {
    const it = find_if(f, l, p);
    return equal(l, it);
}

function none_n(f, n, p) {
    const [, remaining] = find_if_n(f, n, p);
    return remaining === 0;
}

function not_all(f, l, p) {
    return !all(f, l, p);
}

function not_all_n(f, n, p) {
    return !all_n(f, n, p);
}

function partitioned(f, l, p) {
    const it0 = find_if(f, l, p);
    const it1 = find_if_not(it0, l, p);
    return equal(it1, l);
}

function partitioned_at_point(f, m, l, p) {
    // precondition: readable_bounded_range(f, l) && m belongs to [f, l)
    const c0 = none(f, m, p);
    const c1 = all(m, l, p);
    return c0 && c1;
}

function partitioned_n(f, n, p) {
    const [middle, remaining] = find_if_n(f, n, p);
    if (remaining === 0)
        return true;
    const [, untested] = find_if_n(successor(middle), remaining - 1, value => !p(value));
    return untested === 0;
}

function potential_partition_point(f, l, p) {
    return count_if_not_basis(f, l, p, f);
}

function some(f, l, p) {
    return !none(f, l, p);
}

function some_n(f, n, p) {
    return !none_n(f, n, p);
}

function compare_strict_or_reflexive(a, b, strict, r) {
    // Precondition: r is a pure strict weak ordering.
    const result = strict ? r(a, b) : !r(b, a);
    post(() => result === (r(a, b) || (!strict && !r(b, a))), "Only the reflexive comparison may accept equivalent values.");
    return result;
}

function max_element(f, l, r) {
    if (equal(f, l))
        return l;
    let m = f;
    f = successor(f);
    while (!equal(f, l)) {
        if (!r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function median_5(a, b, c, d, e, r) {
    // Precondition: r is a pure strict weak ordering.
    const entries = [[a, 0], [b, 1], [c, 2], [d, 3], [e, 4]];
    const result = select_2_5(a, b, c, d, e, r);
    post(() => Object.is(result, selection_rank(entries, 2, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function median_5_adaptive(a, b, c, d, e, r) {
    // Precondition: r is a pure strict weak ordering.
    const entries = [[a, 0], [b, 1], [c, 2], [d, 3], [e, 4]];
    let [first, middle, last] = entries;
    const fourth = entries[3];
    const fifth = entries[4];
    if (selection_before(middle, first, r))
        [first, middle] = [middle, first];
    if (selection_before(last, middle, r)) {
        [middle, last] = [last, middle];
        if (selection_before(middle, first, r))
            [first, middle] = [middle, first];
    }
    const fourthBefore = selection_before(fourth, middle, r);
    const fifthBefore = selection_before(fifth, middle, r);
    let candidate = middle;
    if (fourthBefore && fifthBefore) {
        const later = selection_before(fourth, fifth, r) ? fifth : fourth;
        candidate = selection_before(first, later, r) ? later : first;
    }
    else if (!fourthBefore && !fifthBefore) {
        const earlier = selection_before(fourth, fifth, r) ? fourth : fifth;
        candidate = selection_before(last, earlier, r) ? last : earlier;
    }
    const [result] = candidate;
    post(() => Object.is(result, selection_rank(entries, 2, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function min_element(f, l, r) {
    if (equal(f, l))
        return l;
    let m = f;
    f = successor(f);
    while (!equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function min_element_nonempty(f, l, r) {
    let m = f;
    f = successor(f);
    while (!equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function min_value(f, l, r) {
    //precondition: ! equal(f, l)) return l;
    let m = f;
    f = successor(f);
    while (!equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function select_0_2(a, b, r) {
    // Precondition: r is a pure strict weak ordering.
    const entries = [[a, 0], [b, 1]];
    const result = r(b, a) ? b : a;
    post(() => Object.is(result, selection_rank(entries, 0, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function select_0_3(a, b, c, r) {
    // Precondition: r is a pure strict weak ordering.
    const entries = [[a, 0], [b, 1], [c, 2]];
    const result = select_0_2(select_0_2(a, b, r), c, r);
    post(() => Object.is(result, selection_rank(entries, 0, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function select_1_2(a, b, r) {
    return r(b, a) ? a : b;
}

function select_1_3(a, b, c, r) {
    return r(b, a) ?
        select_1_3_ab(b, a, c, r)
        : select_1_3_ab(a, b, c, r);
}

function select_1_3_ab(a, b, c, r) {
    // precondition: a <= b
    return !r(c, b) ?
        b : // a, b, c are sorted
        select_1_2(a, c, r); // b is not the median
}

function select_1_4(a, b, c, d, r) {
    // Precondition: r is a pure strict weak ordering.
    const entries = [[a, 0], [b, 1], [c, 2], [d, 3]];
    const [first, second] = selection_before(entries[1], entries[0], r)
        ? [entries[1], entries[0]] : [entries[0], entries[1]];
    const [value] = select_1_4_ab(first, second, entries[2], entries[3], r);
    const result = value;
    post(() => Object.is(result, selection_rank(entries, 1, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function select_1_4_ab(a, b, c, d, r) {
    // Precondition: r is a pure strict weak ordering.
    const entries = [a, b, c, d];
    pre(() => valid_selection_indices(entries), "Original indices must be distinct nonnegative integers.");
    pre(() => !selection_before(b, a, r), "The first pair must already be in stable order.");
    const [first, second] = selection_before(d, c, r) ? [d, c] : [c, d];
    const result = select_1_4_ab_cd(a, b, first, second, r);
    post(() => Object.is(result, selection_rank(entries, 1, r)), "The result must have the requested stable rank.");
    return result;
}

function select_1_4_ab_cd(a, b, c, d, r) {
    // Precondition: r is a pure strict weak ordering.
    const entries = [a, b, c, d];
    pre(() => valid_selection_indices(entries), "Original indices must be distinct nonnegative integers.");
    pre(() => !selection_before(b, a, r) && !selection_before(d, c, r), "Each pair must already be in stable order.");
    const [x, y] = selection_before(c, a, r) ? [a, d] : [b, c];
    const result = selection_before(y, x, r) ? y : x;
    post(() => Object.is(result, selection_rank(entries, 1, r)), "The result must have the requested stable rank.");
    return result;
}

function select_2_3(a, b, c, r) {
    // Precondition: r is a pure strict weak ordering.
    const entries = [[a, 0], [b, 1], [c, 2]];
    const result = select_1_2(select_1_2(a, b, r), c, r);
    post(() => Object.is(result, selection_rank(entries, 2, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function select_2_4(a, b, c, d, r) {
    // Precondition: r is a pure strict weak ordering.
    const entries = [[a, 0], [b, 1], [c, 2], [d, 3]];
    const [p, q] = r(b, a) ? [entries[1], entries[0]] : [entries[0], entries[1]];
    const [s, t] = r(d, c) ? [entries[3], entries[2]] : [entries[2], entries[3]];
    const [x, y] = selection_before(t, q, r) ? [p, t] : [q, s];
    const [result] = selection_before(x, y, r) ? y : x;
    post(() => Object.is(result, selection_rank(entries, 2, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function select_2_5(a, b, c, d, e, r) {
    // Precondition: r is a pure strict weak ordering.
    const entries = [[a, 0], [b, 1], [c, 2], [d, 3], [e, 4]];
    const [first, second] = selection_before(entries[1], entries[0], r)
        ? [entries[1], entries[0]] : [entries[0], entries[1]];
    const [result] = select_2_5_ab(first, second, entries[2], entries[3], entries[4], r);
    post(() => Object.is(result, selection_rank(entries, 2, r)[0]), "The result must have the requested stable rank.");
    return result;
}

function select_2_5_ab(a, b, c, d, e, r) {
    // Precondition: r is a pure strict weak ordering.
    const entries = [a, b, c, d, e];
    pre(() => valid_selection_indices(entries), "Original indices must be distinct nonnegative integers.");
    pre(() => !selection_before(b, a, r), "The first pair must already be in stable order.");
    const [first, second] = selection_before(d, c, r) ? [d, c] : [c, d];
    const result = select_2_5_ab_cd(a, b, first, second, e, r);
    post(() => Object.is(result, selection_rank(entries, 2, r)), "The result must have the requested stable rank.");
    return result;
}

function select_2_5_ab_cd(a, b, c, d, e, r) {
    // Precondition: r is a pure strict weak ordering.
    const entries = [a, b, c, d, e];
    pre(() => valid_selection_indices(entries), "Original indices must be distinct nonnegative integers.");
    pre(() => !selection_before(b, a, r) && !selection_before(d, c, r), "Each pair must already be in stable order.");
    const result = selection_before(c, a, r)
        ? select_1_4_ab(a, b, d, e, r)
        : select_1_4_ab(c, d, b, e, r);
    post(() => Object.is(result, selection_rank(entries, 2, r)), "The result must have the requested stable rank.");
    return result;
}

function exchange_values_2(x, y) {
    const t = source(x);
    sink(x, source(y));
    sink(y, t);
    increment_assignment_stat(); // we have to count 3 assignments
    increment_swap_stat(); // we need to count a swap
}

function reverse_swap_ranges(f0, l0, f1) {
    pre(() => is_bounded_range(f0, l0), "The first iterators must delimit a valid range.");
    const n = distance(f0, l0);
    const [, result] = reverse_swap_ranges_n(l0, f1, n);
    return result;
}

function reverse_swap_ranges_bounded(f0, l0, f1, l1) {
    pre(() => is_bounded_range(f0, l0) && is_bounded_range(f1, l1), "Each pair of iterators must delimit a valid range.");
    const n = Math.min(distance(f0, l0), distance(f1, l1));
    return reverse_swap_ranges_n(l0, f1, n);
}

function reverse_swap_ranges_n(l0, f1, n) {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The swap count must be a nonnegative safe integer.");
    let first;
    let last;
    let left;
    let right;
    pre(() => {
        first = predecessor(l0, n);
        last = successor(f1, n);
        if (!disjoint_counted_ranges(first, n, f1, n))
            return false;
        left = range_snapshot(first, l0).reverse();
        right = range_snapshot(f1, last).reverse();
        return true;
    }, "The two counted ranges must exist and be disjoint.");
    let back = l0;
    let front = f1;
    for (let i = 0; i < n; ++i) {
        back = predecessor(back);
        iter_swap(back, front);
        front = successor(front);
    }
    post(() => equal(back, first) && equal(front, last), "The iterators must advance by the swap count.");
    post(() => range_matches_snapshot(first, l0, right) && range_matches_snapshot(f1, last, left), "The exchanged ranges must appear in reverse order.");
    return [back, front];
}

function swap_ranges(f, l, f1) {
    while (!equal(f, l)) {
        exchange_values(f, f1);
        f = successor(f);
        f1 = successor(f1);
    }
    return f1;
}

function swap_ranges_bounded(f0, l0, f1, l1) {
    while (!equal(f0, l0) && !equal(f1, l1)) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
    }
    return [f0, f1];
}

function swap_ranges_n(f0, f1, n) {
    while (n != 0) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
        --n;
    }
    return [f0, f1];
}

function circular(x, f, defined) {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const point = collision_point(x, f, defined);
    const result = defined(point) && f(point) === x;
    post(() => {
        const orbit = orbit_reference(x, f, defined);
        return result === (orbit.cycleLength > 0 && orbit.connection === x);
    }, "The orbit is circular exactly when its cycle begins at the starting state.");
    return result;
}

function circular_nonterminating_orbit(x, f) {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const point = collision_point_nonterminating_orbit(x, f);
    const result = f(point) === x;
    post(() => result === (orbit_reference(x, f).connection === x), "The orbit is circular exactly when its cycle begins at the starting state.");
    return result;
}

function collision_point(x, f, defined) {
    // Precondition: f is pure, the orbit has finitely many distinct states, and defined marks where f can be applied.
    let slow = x;
    let fast = x;
    if (defined(fast)) {
        fast = f(fast);
        while (fast !== slow) {
            slow = f(slow);
            if (!defined(fast))
                break;
            fast = f(fast);
            if (!defined(fast))
                break;
            fast = f(fast);
        }
    }
    post(() => fast === orbit_reference(x, f, defined).collision, "The result must be the first collision or the terminal state.");
    return fast;
}

function collision_point_nonterminating_orbit(x, f) {
    // Precondition: f is pure and defined along an eventually periodic orbit.
    let slow = x;
    let fast = f(x);
    while (slow !== fast) {
        slow = f(slow);
        fast = f(f(fast));
    }
    post(() => fast === orbit_reference(x, f).collision, "The result must be the first collision.");
    return fast;
}

function connection_point(x, f, defined) {
    // Precondition: f is pure, the orbit has finitely many distinct states, and defined marks where f can be applied.
    const collision = collision_point(x, f, defined);
    const result = defined(collision) ? convergent_point(x, f(collision), f) : collision;
    post(() => result === orbit_reference(x, f, defined).connection, "The result must be the first state in the cycle or the terminal state.");
    return result;
}

function connection_point_nonterminating_orbit(x, f) {
    // Precondition: f is pure and defined along an eventually periodic orbit.
    const collision = collision_point_nonterminating_orbit(x, f);
    const result = convergent_point(x, f(collision), f);
    post(() => result === orbit_reference(x, f).connection, "The result must be the first state in the cycle.");
    return result;
}

function convergent_point(x, y, f) {
    // Precondition: f is pure and defined along both orbits, each with finitely many distinct states.
    let expected;
    pre(() => {
        const reference = convergence_reference(x, y, f);
        expected = reference.point;
        return reference.converges;
    }, "The two states must meet after the same number of steps.");
    while (x !== y) {
        x = f(x);
        y = f(y);
    }
    post(() => x === expected, "The result must be the first synchronous meeting point.");
    return x;
}

function convergent_point_guarded(x, y, shared, f, defined = () => true) {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    pre(() => orbit_reference(x, f, defined).states.includes(shared)
        && orbit_reference(y, f, defined).states.includes(shared), "The shared state must be reachable from both starting states.");
    const dx = orbit_distance(x, shared, f);
    const dy = orbit_distance(y, shared, f);
    const first = dx > dy ? power_unary(x, dx - dy, f, defined) : x;
    const second = dy > dx ? power_unary(y, dy - dx, f, defined) : y;
    return convergent_point(first, second, f);
}

function orbit_reachable(x, y, f, defined) {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const point = connection_point(x, f, defined);
    let current = x;
    while (current !== y && current !== point)
        current = f(current);
    if (current !== y && defined(point)) {
        current = f(point);
        while (current !== y && current !== point)
            current = f(current);
    }
    const result = current === y;
    post(() => result === orbit_reference(x, f, defined).states.includes(y), "The result must agree with membership in the orbit.");
    return result;
}

function orbit_reachable_nonempty(x, y, f, defined) {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const result = defined(x) && orbit_reachable(f(x), y, f, defined);
    post(() => {
        const orbit = orbit_reference(x, f, defined);
        return result === (orbit.states.slice(1).includes(y) || (orbit.cycleLength > 0 && orbit.connection === y));
    }, "The result must agree with membership after at least one step.");
    return result;
}

function orbit_structure(x, f, defined) {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const point = connection_point(x, f, defined);
    const distance = orbit_distance(x, point, f);
    const cycleSteps = defined(point) ? orbit_distance(f(point), point, f) : 0;
    post(() => {
        const orbit = orbit_reference(x, f, defined);
        return point === orbit.connection && distance === orbit.states.indexOf(point)
            && cycleSteps === Math.max(0, orbit.cycleLength - 1);
    }, "The result must give the connection and the orbit distances.");
    return [distance, cycleSteps, point];
}

function orbit_structure_nonterminating_orbit(x, f) {
    // Precondition: f is pure and defined along an eventually periodic orbit.
    const point = connection_point_nonterminating_orbit(x, f);
    const distance = orbit_distance(x, point, f);
    const cycleSteps = orbit_distance(f(point), point, f);
    post(() => {
        const orbit = orbit_reference(x, f);
        return point === orbit.connection && distance === orbit.states.indexOf(point)
            && cycleSteps === orbit.cycleLength - 1;
    }, "The result must give the cycle entry and the orbit distances.");
    return [distance, cycleSteps, point];
}

function orbits_intersect(x, y, f, defined) {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const first = connection_point(x, f, defined);
    const second = connection_point(y, f, defined);
    const result = first === second || (defined(first) && defined(second) && orbit_reachable(first, second, f, defined));
    post(() => {
        const states = new Set(orbit_reference(x, f, defined).states);
        return result === orbit_reference(y, f, defined).states.some(state => states.has(state));
    }, "The result must agree with whether the two orbits share a state.");
    return result;
}

function power_unary(x, n, f, defined = () => true) {
    // Precondition: f and defined are pure, and defined identifies the domain of f.
    pre(() => Number.isSafeInteger(n) && n >= 0, "The step count must be a nonnegative safe integer.");
    let expected = x;
    pre(() => {
        for (let i = 0; i < n; ++i) {
            if (!defined(expected))
                return false;
            expected = f(expected);
        }
        return true;
    }, "The transformation must be defined at every step.");
    let result = x;
    for (let i = 0; i < n; ++i)
        result = f(result);
    post(() => result === expected, "The result must be the state after n applications.");
    return result;
}

function terminating(x, f, defined) {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const point = collision_point(x, f, defined);
    const result = !defined(point);
    post(() => result === (orbit_reference(x, f, defined).cycleLength === 0), "The orbit terminates exactly when it has no cycle.");
    return result;
}

function for_each(f, l, proc) {
    while (!equal(f, l)) {
        proc(source(f));
        f = successor(f);
    }
    return proc;
}

function for_each_n(f, n, proc) {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");
    while (n !== 0) {
        proc(source(f));
        f = successor(f);
        --n;
    }
    return [proc, f];
}

function count_if(f, l, p) {
    const res = count_if_basis(f, l, p, 0);
    return res;
}

function count_if_basis(f, l, p, j) {
    while (!equal(f, l)) {
        if (p(source(f))) {
            j = successor(j);
        }
        f = successor(f);
    }
    return j;
}

function count_if_for_each(f, l, p) {
    let count = 0;
    const tally = Object.assign((value) => { if (p(value))
        ++count; }, { total: () => count });
    return for_each(f, l, tally).total();
}

function count_if_n(f, n, p) {
    return count_if_n_basis(f, n, p, 0);
}

function count_if_n_basis(f, n, p, j) {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");
    while (n !== 0) {
        if (p(source(f)))
            j = successor(j);
        f = successor(f);
        --n;
    }
    return j;
}

function count_if_not(f, l, p) {
    const res = count_if_not_basis(f, l, p, 0);
    return res;
}

function count_if_not_basis(f, l, p, j) {
    while (!equal(f, l)) {
        if (!p(source(f))) {
            j = successor(j);
        }
        f = successor(f);
    }
    return j;
}

function count_if_not_n(f, n, p) {
    return count_if_not_n_basis(f, n, p, 0);
}

function count_if_not_n_basis(f, n, p, j) {
    return count_if_n_basis(f, n, value => !p(value), j);
}

function equal_r(f, l, f2, r) {
    while (!equal(f, l)) {
        if (!r(source(f), source(f2))) {
            return false;
        }
        f = successor(f);
        f2 = successor(f2);
    }
    return true;
}

function insert(s, ip, f, l) {
    let d = distance(begin(s), ip);
    const ld = distance(ip, end(s));
    while (!equal(f, l)) {
        s = push_back(s, source(f));
        f = successor(f);
        ++d;
    }
    rotate_bidirectional(begin(s), successor(begin(s), ld), end(s));
    return s;
}

function insert_naive(s, ip, f, l) {
    let d = distance(begin(s), ip);
    while (!equal(f, l)) {
        // s = increase_capacity(s, 1)
        s = push_back(s, 0);
        ip = successor(begin(s), d);
        shift_right_by_one(ip, end(s));
        sink(ip, source(f));
        f = successor(f);
        ++d;
    }
    return s;
}

function iota(f, l, start, step) {
    if (!start)
        start = 0;
    if (!step)
        step = 1;
    while (!equal(f, l)) {
        sink(f, start);
        start += step;
        f = successor(f);
    }
    return start;
}

function palindrome_bidirectional(f, l, r) {
    while (!equal(f, l)) {
        l = predecessor(l);
        if (equal(f, l))
            return true;
        if (!r(source(f), source(l)))
            return false;
        f = successor(f);
    }
    return true;
}

function palindrome_naive(seq_arr, r) {
    const haystack = seq(seq_arr, "seq");
    const seq_arr_rev = seq_arr.slice().reverse();
    const seq_rev = seq(seq_arr_rev, "seq_rev");
    const [f, l] = rng(haystack);
    const f2 = begin(seq_rev);
    const res = equal_r(f, l, f2, r);
    return res;
}

function fill(f, l, x) {
    while (!equal(f, l)) {
        sink(f, x);
        f = successor(f);
    }
}

function fill_n(f, n, x) {
    while (n != 0) {
        sink(f, x);
        f = successor(f);
        --n;
    }
}

