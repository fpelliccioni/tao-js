function is_partitioned_n(first, count, test) {
    if (!Number.isSafeInteger(count) || count < 0) return false;

    let inTrueGroup = false;
    let current = first;
    for (let i = 0; i < count; i++) {
        if (test(source(current))) inTrueGroup = true;
        else if (inTrueGroup) return false;
        current = successor(current);
    }
    return true;
}

function is_bounded_range(first, last) {
    const count = distance(first, last);
    return count >= 0 && equal(successor(first, count), last);
}

function range_value_counts(first, last) {
    const counts = new Map();
    while (!equal(first, last)) {
        const value = source(first);
        counts.set(value, (counts.get(value) ?? 0) + 1);
        first = successor(first);
    }
    return counts;
}

function has_range_value_counts(first, last, expected) {
    const actual = range_value_counts(first, last);
    if (actual.size !== expected.size) return false;
    for (const [value, count] of expected) {
        if (actual.get(value) !== count) return false;
    }
    return true;
}

function fibonacci_matches(n, result) {
    let a = 0n;
    let b = 1n;
    for (let i = 0; i < n; ++i) {
        [a, b] = [b, a + b];
    }
    return Number.isSafeInteger(result) && BigInt(result) === a;
}

function orbit_reference(x, f, defined = () => true) {
    const indices = new Map();
    const states = [];
    let current = x;
    while (!indices.has(current) && defined(current)) {
        indices.set(current, states.length);
        states.push(current);
        current = f(current);
    }
    const entryIndex = indices.get(current);
    if (entryIndex === undefined) return { collision: current, connection: current };

    const period = states.length - entryIndex;
    // At a collision, the fast traversal is n + 1 steps ahead of the slow one.
    const offset = (period - (entryIndex + 1) % period) % period;
    return { collision: states[entryIndex + offset], connection: current };
}

function convergence_reference(x, y, f) {
    const seen = new Map();
    while (x !== y) {
        let partners = seen.get(x);
        if (!partners) {
            partners = new Set();
            seen.set(x, partners);
        }
        if (partners.has(y)) return { converges: false, point: x };
        partners.add(y);
        x = f(x);
        y = f(y);
    }
    return { converges: true, point: x };
}
