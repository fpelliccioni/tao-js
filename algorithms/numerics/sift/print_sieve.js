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

function usage() {
    var v = sequence(array_all_equal(20, '0'), "v");
    mark_sieve(begin(v), end(v), 3);
    print_sieve(begin(v), size(v));
  }

function attributes() {

}

