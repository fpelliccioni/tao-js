// Called by pre and post, whose iterator operations are silent.
function disjoint_counted_ranges(f, n, b, capacity) {
    if (n === 0 || capacity === 0) return true;
    const offset = distance(f, b);
    if (offset >= n || offset <= -capacity) return true;
    return offset >= 0 ? !equal(successor(f, offset), b) : !equal(f, successor(b, -offset));
}

function stable_partition_snapshot(f, l, p) {
    const first = [];
    const second = [];
    while (!equal(f, l)) {
        const value = source(f);
        (p(value) ? second : first).push(value);
        f = successor(f);
    }
    return first.concat(second);
}

function range_matches_snapshot(f, l, expected) {
    let i = 0;
    while (!equal(f, l)) {
        if (i === expected.length || !Object.is(source(f), expected[i])) return false;
        f = successor(f);
        ++i;
    }
    return i === expected.length;
}

function partition_buffered_block(f, l, buffer, p) {
    const [point, bufferEnd] = partition_copy(f, l, f, buffer, p);
    copy(buffer, bufferEnd, point);
    return point;
}

function combine_partition_blocks(left, right) {
    // Rotate the left true group past the right false group.
    let f = left.point;
    let m = left.last;
    const l = right.point;
    if (equal(f, m)) return { point: l, last: right.last };
    if (equal(m, l)) return { point: f, last: right.last };

    let i = m;
    do {
        exchange_values(f, i);
        f = successor(f);
        i = successor(i);
        if (equal(f, m)) m = i;
    } while (!equal(i, l));

    const point = f;
    i = m;
    while (!equal(i, l)) {
        exchange_values(f, i);
        f = successor(f);
        i = successor(i);
        if (equal(f, m)) m = i;
        else if (equal(i, l)) i = m;
    }
    return { point, last: right.last };
}
