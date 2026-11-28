// Reference: From Mathematics to Generic Programming, ch. 11, §11.5, pp. 212–215 (ch11.h).

// Doc (es): Intercambia desde ambos extremos hasta que uno alcanza el punto intermedio.
// Doc (en): Swaps from both ends until either iterator reaches the middle point.
function reverse_until<I extends MutableBidirectionalIterator>(f: I, m: I, l: I): [I, I] {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l),
        "The middle must lie within the range.");
    const n = Math.min(distance(f, m), distance(m, l));
    const [back, front] = reverse_swap_ranges_n(l, f, n);
    return [front, back];
}

function __reverse_until_usage() {
    const d = seq([1, 2, 3, 4, 5]);
    const [f, l] = rng(d);
    const m = successor(f, 2);
    reverse_until(f, m, l);
    print(d);
}

function __reverse_until_attributes() {
}
