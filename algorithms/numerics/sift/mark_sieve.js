function mark_sieve(f, l, factor) {
    // precondition: ! equal(f, l)
    sink(f, 0);
    while (distance(f, l) > factor) {
        f = successor(f, factor);
        sink(f, 0);
    }
}

function usage() {
    var v = sequence(array_all_equal(20, '0'), "v");
    mark_sieve(begin(v), end(v), 3);
    print_sieve(begin(v), size(v));
  }

function attributes() {

}

