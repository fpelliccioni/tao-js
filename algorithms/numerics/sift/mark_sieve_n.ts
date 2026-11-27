function mark_sieve_n(f: Iter<number | string>, n: number, factor: number) {
    // precondition: n > 0
    sink(f, 0);
    while (n > factor) {
        f = successor(f, factor);
        n -= factor;
        sink(f, 0);
    }
}

function __mark_sieve_n_usage() {
    const v = sequence(array_all_equal(20, '0'));
    mark_sieve_n(begin(v), size(v), 3);
    print_sieve(begin(v), size(v));
  }

function __mark_sieve_n_attributes() {
}
