// Reference: Elements of Programming, ch. 10, p. 177.

// Doc (es): Construye la permutación que identifica el origen de cada posición después de rotar.
// Doc (en): Builds the permutation that identifies the source of each position after rotation.
function k_rotate_from_permutation_random_access<I extends MutableRandomAccessIterator>(f: I, m: I, l: I): Transformation<I> {
    pre(() => is_bounded_range(f, m) && is_bounded_range(m, l) && !equal(m, l),
        "The middle must belong to the nonempty range.");
    const left = distance(f, m);
    const right = distance(m, l);
    const boundary = successor(f, right);

    return x => {
        pre(() => is_bounded_range(f, x) && is_bounded_range(x, l) && !equal(x, l),
            "The destination must belong to the range.");
        const result = distance(x, boundary) > 0 ? successor(x, left) : predecessor(x, right);
        post(() => equal(result, successor(f, (distance(f, x) + left) % (left + right))),
            "The result must identify the source of the rotated element.");
        return result;
    };
}

function __k_rotate_from_permutation_random_access_usage() {
    const d = seq([1, 2, 3, 4, 5]);
    const [f, l] = rng(d);
    const m = successor(f, 2);
    const from = k_rotate_from_permutation_random_access(f, m, l);
    const origin = from(f);
    const value = source(origin);
    print("Source of the first position: " + value);
}

function __k_rotate_from_permutation_random_access_attributes() {
}
