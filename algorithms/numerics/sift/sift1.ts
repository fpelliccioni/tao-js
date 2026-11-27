// Reference: From Mathematics to Generic Programming, ch. 3, p. 26 (ch03.h).

function sift1(f: Iter<number | string>, n: number) {
    fill_n(f, n, 1);
    let i = 0;
    let index_square = 3;
    let factor = 3;
    let current = f;
    const last = successor(f, n);
    while (index_square < n) {
        // invariant: index_square = 2i^2 + 6i + 3

        if (source(current)) {            // if current candidate is prime
            mark_sieve(successor(f, index_square),
                       last,
                       factor);
        }
        ++i;
        current = successor(current);
        factor = i + i + 3;
        index_square = 2 * i * (i + 3) + 3;
    }
}

function __sift1_usage() {
    function mark_sieve(f: Iter<number | string>, l: Iter<number | string>, factor: number) {
        // precondition: ! equal(f, l)

        sink(f, 0);
        while (distance(f, l) > factor) {
            f = successor(f, factor);
            sink(f, 0);
        }
    }

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

    const v = sequence(array_all_equal(20, '0'), "v");
    sift1(begin(v), size(v));
    print_sieve(begin(v), size(v));
  }

function __sift1_attributes() {
}
