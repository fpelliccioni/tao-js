function make_heap_n_naive_1<T>(f: Iter<T>, n: number) {
    let i = Math.floor(n / 2) - 1;
    for (; i >= 0; --i) {
        shift_down(f, i, n);
    }
}

function __make_heap_n_naive_1_usage() {
    function source_i<T>(f: Iter<T>, i: number) {
        return source(successor(f, i));
    }

    function shift_down<T>(f: Iter<T>, i: number, n: number) {
        while (i < n) {
            let i_big = i;
            const c1 = 2 * i + 1;
            const c2 = c1 + 1;

            if (c1 < n && source_i(f, c1) > source_i(f, i_big)) {
                i_big = c1;
            }

            if (c2 < n && source_i(f, c2) > source_i(f, i_big)) {
                i_big = c2;
            }

            if (i_big == i) {
                return;
            }

            iter_swap(successor(f, i), successor(f, i_big));
            i = i_big;
        }
    }

    const s = sequence(array_random());
    // var s = sequence([24, 88, 59, 31, 91, 0, 87, 91, 40, 52], "s");

    print(s);
    make_heap_n_naive_1(begin(s), size(s));
    print(s);
}

function __make_heap_n_naive_1_attributes() {
}
