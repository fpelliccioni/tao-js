function mark_sieve_n(f, n, factor) {
    // precondition: n > 0
    sink(f, 0);
    while (n > factor) {
        f = successor(f, factor);
        n -= factor;
        sink(f, 0);
    }
}

function usage() {
    var v = sequence(array_all_equal(20, '0'), "v");
    mark_sieve_n(begin(v), size(v), 3);
    print_sieve(begin(v), size(v));
  }

function attributes() {

}

