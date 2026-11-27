function mark_sieve(f: Iter<number | string>, l: Iter<number | string>, factor: number) {
    // precondition: ! equal(f, l)
    sink(f, 0);
    while (distance(f, l) > factor) {
        f = successor(f, factor);
        sink(f, 0);
    }
}

function __mark_sieve_usage() {
    const v = sequence(array_all_equal(20, '0'), "v");
    mark_sieve(begin(v), end(v), 3);
    print_sieve(begin(v), size(v));
  }

function __mark_sieve_attributes() {
}
