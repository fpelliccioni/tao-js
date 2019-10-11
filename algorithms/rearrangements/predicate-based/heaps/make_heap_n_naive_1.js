function make_heap_n_naive_1(f, n) {
    var i = Math.floor(n / 2) - 1;
    for (; i >= 0; --i) {
        shift_down(f, i, n);
    }
}

function usage() {
    function source_i(f, i) {
        return source(successor(f, i));
    }
    
    function shift_down(f, i, n) {
        while (i < n) {
            var i_big = i;
            var c1 = 2 * i + 1;
            var c2 = c1 + 1;
    
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
    
    var s = sequence(array_random(), "s");
    // var s = sequence([24, 88, 59, 31, 91, 0, 87, 91, 40, 52], "s");
    
    print(s);
    make_heap_n_naive_1(begin(s), size(s));
    print(s);
}

function attributes() {

}

