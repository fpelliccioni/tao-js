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

function divides(i, n) {
    return n % i == 0;
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

function remainder_slow(a, b) {
    while (b < a)
        a -= b;
    return a;
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
    const buf = sequence(array_all_equal(1, "-"), "buf");
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
    const buf = sequence(array_all_equal(1, "-"), "buf");
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

function rotate_bidirectional(f, m, l) {
    reverse(f, m);
    reverse(m, l);
    reverse(f, l);
}

function rotate_cycles(f, m, l, from) {
    const m_l = distance(m, l);
    const f_m = distance(f, m);
    let d = gcd(f_m, m_l);
    while (d != 0) {
        cycle_from(successor(f, d), from);
        --d;
    }
    return successor(f, m_l);
}

function rotate_forward(f, m, l) {
    // precondition: mutable_bounded_range(f, l) ∧ f ≺ m ≺ l
    const ref = { f, m };
    rotate_forward_step(ref, l);
    f = ref.f;
    m = ref.m;
    const m_prime = f;
    while (!equal(m, l)) {
        const ref = { f, m };
        rotate_forward_step(ref, l);
        f = ref.f;
        m = ref.m;
    }
    return m_prime;
}

function rotate_random_access_nontrivial(f, m, l) {
    const p = k_rotate_from_permutation_random_access(f, m, l);
    return rotate_cycles(f, m, l, p);
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

function partition_semistable(f, l, p) {
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
            iter_swap(f, j);
            f = successor(f);
        }
        j = successor(j);
    }
    return f;
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
    //precondition: nonempty: ! equal(f, l)
    while (!p(source(f))) {
        f = successor(f);
        if (equal(f, l))
            return;
    }
    let j = f;
    j = successor(j);
    if (equal(j, l))
        return;
    while (!equal(successor(j), l)) {
        if (!p(source(j))) {
            iter_swap(f, j);
            f = successor(f);
        }
        j = successor(j);
    }
    iter_swap(f, j);
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

function lower_bound_n(f, n, a, r) {
    const below = (x) => r(x, a);
    const p = (x) => !below(x);
    pre(() => is_partitioned_n(f, n, p), "The range must be partitioned around the search value.");
    const result = partition_point_n(f, n, p);
    post(() => all(f, result, below), "Every element before the result must compare less than the search value.");
    post(() => none(result, successor(f, n), below), "No element from the result onward may compare less than the search value.");
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
    const res = count_if_not_basis(f, l, p, f);
    return res;
}

function some(f, l, p) {
    return !none(f, l, p);
}

function some_n(f, n, p) {
    return !none_n(f, n, p);
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

function exchange_values_2(x, y) {
    const t = source(x);
    sink(x, source(y));
    sink(y, t);
    increment_assignment_stat(); // we have to count 3 assignments
    increment_swap_stat(); // we need to count a swap
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
    const seq = sequence(seq_arr, "seq");
    const seq_arr_rev = seq_arr.slice().reverse();
    const seq_rev = sequence(seq_arr_rev, "seq_rev");
    const f = begin(seq);
    const l = end(seq);
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

