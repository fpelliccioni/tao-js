function sift0(f, n) {
    fill_n(f, n, 1);
    var i = 0;
    var index_square = 3;
    var current = f;
    while (index_square < n) {
        // invariant: index_square = 2i^2 + 6i + 3

        if (source(current)) {            // if current candidate is prime
            mark_sieve(successor(f, index_square),
                       successor(f, n),
                       i + i + 3);
        }
        ++i;
        current = successor(current);
        index_square = 2 * i * (i + 3) + 3;
    }
}

function usage() {
    function mark_sieve(f, l, factor) {
        // precondition: ! equal(f, l)

        sink(f, 0);
        while (distance(f, l) > factor) {
            f = successor(f, factor);
            sink(f, 0);
        }
    }

    function print_sieve(f, n) {
        var i = 0;
        var out = "2";
        while (i < n) {
            if (source(f)) {
                out += " " + (2 * i + 3);
            }
            f = successor(f);
            ++i;
        }
        print(out);
    }

    var v = sequence(array_all_equal(20, '0'), "v");
    sift0(begin(v), size(v));
    print_sieve(begin(v), size(v));
  }

function attributes() {

}

