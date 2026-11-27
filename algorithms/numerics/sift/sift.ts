function sift(f: Iter<number | string>, n: number) {
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

function __sift_usage() {
    const v = sequence(array_all_equal(20, '0'), "v");
    sift(begin(v), size(v));
    print_sieve(begin(v), size(v));
  }

function __sift_attributes() {
}
