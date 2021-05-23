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
    var v = sequence([1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1], "v");
    print_sieve(begin(v), size(v));
  }

function attributes() {

}

