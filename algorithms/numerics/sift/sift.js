function sift(f, n) {
    fill_n(f, n, 1);
    var i = 0;
    var index_square = 3;
    var factor = 3;
    var current = f;
    var last = successor(f, n);
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

function usage() {
    var v = sequence(array_all_equal(20, '0'), "v");
    sift(begin(v), size(v));
    print_sieve(begin(v), size(v));
  }

function attributes() {

}

