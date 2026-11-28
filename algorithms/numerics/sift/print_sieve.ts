function print_sieve(f: Iter<number | string>, n: number) {
    let i = 0;
    let out = "2";
    while (i < n) {
        if (source(f)) {
            out += " " + (2 * i + 3);
        }
        f = successor(f);
        ++i;
    }
    print(out);
}

function __print_sieve_usage() {
    const v = seq([1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1]);
    print_sieve(begin(v), size(v));
  }

function __print_sieve_attributes() {
}
