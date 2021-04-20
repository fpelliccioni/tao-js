function __debug_gcd(a, b) {
    while (b != 0) {
        var r = remainder(a, b);
        a = b;
        b = r;
    }
    return a;
}

function gcd(a, b) {
    var _f_ = start_f('gcd', a, b);
    var res = __debug_gcd(a, b);
    end_f(_f_);
    return res;
}

function __debug_insertion_sort(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    if (equal(c, l)) return;

    // create a sentinel
    var min = min_element_nonempty(f, l, r);
    if (! equal(min, f)) {
        rotate_right_by_one_nonempty(f, successor(min));
        increment_custom_stat("Misplaced elements");
        register_move_distance(distance(f, min));
    }
    insertion_sort_suffix_nonempty(c, l, r);
}

function insertion_sort(f, l, r) {
    var _f_ = start_f('insertion_sort', f, l, r);
    var res = __debug_insertion_sort(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_insertion_sort_backward(f, l, r) {
    if (equal(f, l)) return;

    r = complement(r);
    var c = predecessor(l);
    while ( ! equal(c, f)) {
        c = predecessor(c);
        linear_insert_backward(c, l, r);     
    }
}

function insertion_sort_backward(f, l, r) {
    var _f_ = start_f('insertion_sort_backward', f, l, r);
    var res = __debug_insertion_sort_backward(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_insertion_sort_classic(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function insertion_sort_classic(f, l, r) {
    var _f_ = start_f('insertion_sort_classic', f, l, r);
    var res = __debug_insertion_sort_classic(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_insertion_sort_classic_0(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);     
        c = successor(c);
    }
}

function insertion_sort_classic_0(f, l, r) {
    var _f_ = start_f('insertion_sort_classic_0', f, l, r);
    var res = __debug_insertion_sort_classic_0(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_insertion_sort_classic_1(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function insertion_sort_classic_1(f, l, r) {
    var _f_ = start_f('insertion_sort_classic_1', f, l, r);
    var res = __debug_insertion_sort_classic_1(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_insertion_sort_classic_2(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function insertion_sort_classic_2(f, l, r) {
    var _f_ = start_f('insertion_sort_classic_2', f, l, r);
    var res = __debug_insertion_sort_classic_2(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_insertion_sort_classic_3(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function insertion_sort_classic_3(f, l, r) {
    var _f_ = start_f('insertion_sort_classic_3', f, l, r);
    var res = __debug_insertion_sort_classic_3(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_selection_sort_classic(f, l, r) {
    // postcondition: is_sorted(f, l, r)
    while ( ! equal(f, l)) {
        var m = min_element(f, l, r);
        iter_swap(f, m);
        f = successor(f);
    }
}

function selection_sort_classic(f, l, r) {
    var _f_ = start_f('selection_sort_classic', f, l, r);
    var res = __debug_selection_sort_classic(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_selection_sort_stable(f, l, r) {
    while (! equal(f, l)) {
        var m = min_element(f, l, r);
        rotate_right_by_one(f, successor(m));
        f = successor(f);
    }
}

function selection_sort_stable(f, l, r) {
    var _f_ = start_f('selection_sort_stable', f, l, r);
    var res = __debug_selection_sort_stable(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_reverse(f, l) {
    while (true) {
        if (equal(f, l)) return;
        l = predecessor(l);
        if (equal(f, l)) return;
        iter_swap(f, l);
        f = successor(f);        
    }
}

function reverse(f, l) {
    var _f_ = start_f('reverse', f, l);
    var res = __debug_reverse(f, l);
    end_f(_f_);
    return res;
}

function __debug_reverse_bidirectional(f, l) {
    while (true) {
        if (equal(f, l)) return;
        l = predecessor(l);
        if (equal(f, l)) return;
        iter_swap(f, l);
        f = successor(f);        
    }
}

function reverse_bidirectional(f, l) {
    var _f_ = start_f('reverse_bidirectional', f, l);
    var res = __debug_reverse_bidirectional(f, l);
    end_f(_f_);
    return res;
}

function __debug_reverse_copy(f_i, l_i, f_o) {
    while ( ! equal(f_i, l_i)) {
        l_i = predecessor(l_i);
        sink(f_o, source(l_i));
        f_o = successor(f_o);
    } 
    return f_o;
}

function reverse_copy(f_i, l_i, f_o) {
    var _f_ = start_f('reverse_copy', f_i, l_i, f_o);
    var res = __debug_reverse_copy(f_i, l_i, f_o);
    end_f(_f_);
    return res;
}

function __debug_reverse_n_adaptive(f_i, n_i, f_b, n_b) {
    if (n_i < 2) return successor(f_i, n_i);
    if (n_i <= n_b) return reverse_n_with_buffer(f_i, n_i, f_b);

    var h_i = half_nonnegative(n_i);
    var n_mod_2 = n_i - twice(h_i);
    var m_i = successor(reverse_n_adaptive(f_i, h_i, f_b, n_b), n_mod_2);
    var l_i = reverse_n_adaptive(m_i, h_i, f_b, n_b);

    swap_ranges_n(f_i, m_i, h_i);
    return l_i;
}

function reverse_n_adaptive(f_i, n_i, f_b, n_b) {
    var _f_ = start_f('reverse_n_adaptive', f_i, n_i, f_b, n_b);
    var res = __debug_reverse_n_adaptive(f_i, n_i, f_b, n_b);
    end_f(_f_);
    return res;
}

function __debug_reverse_n_forward(f, n) {
    if (n < 2) return successor(f, n);
    var h = half_nonnegative(n);
    var n_mod_2 = n - twice(h);

    var m = successor(reverse_n_forward(f, h), n_mod_2);
    var l = reverse_n_forward(m, h);

    swap_ranges_n(f, m, h);
    return l;
}

function reverse_n_forward(f, n) {
    var _f_ = start_f('reverse_n_forward', f, n);
    var res = __debug_reverse_n_forward(f, n);
    end_f(_f_);
    return res;
}

function __debug_reverse_n_indexed(f, n) {
    var i = 0;
    --n;
    while (i < n) {
        iter_swap(successor(f, i), successor(f, n)); 
        ++i;
        --n;
    } 
}

function reverse_n_indexed(f, n) {
    var _f_ = start_f('reverse_n_indexed', f, n);
    var res = __debug_reverse_n_indexed(f, n);
    end_f(_f_);
    return res;
}

function __debug_reverse_n_with_buffer(f_i, n, f_b) {
    return reverse_copy(f_b, copy_n(f_i, n, f_b)[1], f_i);
}

function reverse_n_with_buffer(f_i, n, f_b) {
    var _f_ = start_f('reverse_n_with_buffer', f_i, n, f_b);
    var res = __debug_reverse_n_with_buffer(f_i, n, f_b);
    end_f(_f_);
    return res;
}

function __debug_rotate_bidirectional(f, m, l) {
    reverse(f, m);
    reverse(m, l);
    reverse(f, l);
}

function rotate_bidirectional(f, m, l) {
    var _f_ = start_f('rotate_bidirectional', f, m, l);
    var res = __debug_rotate_bidirectional(f, m, l);
    end_f(_f_);
    return res;
}

function __debug_rotate_random_access_nontrivial(f, m, l) {
    var p = k_rotate_from_permutation_random_access(f, m, l);
    return rotate_cycles(f, m, l, p);
}

function rotate_random_access_nontrivial(f, m, l) {
    var _f_ = start_f('rotate_random_access_nontrivial', f, m, l);
    var res = __debug_rotate_random_access_nontrivial(f, m, l);
    end_f(_f_);
    return res;
}

function __debug_rotate_right_by_one(f, l) {
    if (equal(f, l)) return;
    var butlast = predecessor(l);
    var x = source_move(butlast);
    move_backward(f, butlast, l);
    sink_move(f, x);
}

function rotate_right_by_one(f, l) {
    var _f_ = start_f('rotate_right_by_one', f, l);
    var res = __debug_rotate_right_by_one(f, l);
    end_f(_f_);
    return res;
}

function __debug_shift_right_by_one(f, l) {
    if (equal(f, l)) return;
    copy_backward(f, predecessor(l), l);
}

function shift_right_by_one(f, l) {
    var _f_ = start_f('shift_right_by_one', f, l);
    var res = __debug_shift_right_by_one(f, l);
    end_f(_f_);
    return res;
}

function __debug_shift_right_while(f, l, p) {
    while ( ! equal(f, l) && p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
    }
    return l;
}

function shift_right_while(f, l, p) {
    var _f_ = start_f('shift_right_while', f, l, p);
    var res = __debug_shift_right_while(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_shift_right_while_nonempty(f, l, p) {
    //precondition: ! equal(f, l)
    while (p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
        if (equal(f, l)) break;
    }
    return l;
}

function shift_right_while_nonempty(f, l, p) {
    var _f_ = start_f('shift_right_while_nonempty', f, l, p);
    var res = __debug_shift_right_while_nonempty(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_make_heap_n(f, n) {
    // assert(n > 2); //other sizes handled outside
    var fpi = Math.floor((n - 3) / 2);
    var fp = successor(f, fpi);    //firstParent
    var frk = successor(f, (fpi + 1) * 2);  //firstRightKid

    for (;; fp = predecessor(fp), frk = predecessor(frk, 2)) {
        var lucifer = source(fp);
        var parent = fp;
        var rk = frk; //rightKid
        for (;;) {
            var jr = predecessor(rk, (source(predecessor(rk)) <= source(rk)));
            var crt = source(jr);
            if (lucifer <= crt) break;
            sink(parent, crt);
            parent = jr;
            // rk = (jr + 1) * 2;
            var rki = (distance(f, jr) + 1) * 2;
            // if (rki >= n) goto write;
            if (rki >= n) {
                sink(parent, lucifer);
                break;
            }
            rk = successor(f, rki);
        }

        // if (parent != fp) {
        if ( ! equal(parent, fp)) {
                sink(parent, lucifer);
        }

        // if (fp == 0) break;
        if (equal(fp, f)) break;
    }

    if (n & 1) return;
    push_heap_n(f, n);
}

function make_heap_n(f, n) {
    var _f_ = start_f('make_heap_n', f, n);
    var res = __debug_make_heap_n(f, n);
    end_f(_f_);
    return res;
}

function __debug_make_heap_n_naive_0(f, n) {
    var i = Math.floor(n / 2) - 1;
    for (; i >= 0; --i) {
        shift_down(f, i, n);
    }
}

function make_heap_n_naive_0(f, n) {
    var _f_ = start_f('make_heap_n_naive_0', f, n);
    var res = __debug_make_heap_n_naive_0(f, n);
    end_f(_f_);
    return res;
}

function __debug_make_heap_n_naive_1(f, n) {
    var i = Math.floor(n / 2) - 1;
    for (; i >= 0; --i) {
        shift_down(f, i, n);
    }
}

function make_heap_n_naive_1(f, n) {
    var _f_ = start_f('make_heap_n_naive_1', f, n);
    var res = __debug_make_heap_n_naive_1(f, n);
    end_f(_f_);
    return res;
}

function __debug_partition_copy(f, l, r_b, r_g, p) {
    while ( ! equal(f, l)) {
        if (p(source(f))) {
            sink(r_g, source(f));
            r_g = successor(r_g);
        } else {
            sink(r_b, source(f));
            r_b = successor(r_b);
        }
        f = successor(f);
    }
    return [r_b, r_g];
}

function partition_copy(f, l, r_b, r_g, p) {
    var _f_ = start_f('partition_copy', f, l, r_b, r_g, p);
    var res = __debug_partition_copy(f, l, r_b, r_g, p);
    end_f(_f_);
    return res;
}

function __debug_partition_semistable(f, l, p) {
    while (true) {
        if (equal(f, l)) return f;
        if (p(source(f))) break;
        f = successor(f);
    }

    var j = f;
    j = successor(j)

    while ( ! equal(j, l)) {
        if ( ! p(source(j))) {
            iter_swap(f, j);
            f = successor(f);
        }
        j = successor(j);
    }
    return f;
}

function partition_semistable(f, l, p) {
    var _f_ = start_f('partition_semistable', f, l, p);
    var res = __debug_partition_semistable(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_partition_semistable_1(f, l, p) {
    f = find_if(f, l, p);
    if (f == l) return f;

    var j = f;
    j = successor(j)

    while ( ! equal(j, l)) {
        if ( ! p(source(j))) {
            iter_swap(f, j);
            f = successor(f);
        }
        j = successor(j);
    }
    return f;
}

function partition_semistable_1(f, l, p) {
    var _f_ = start_f('partition_semistable_1', f, l, p);
    var res = __debug_partition_semistable_1(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_partition_semistable_nonempty(f, l, p) {
    //precondition: nonempty: ! equal(f, l)
    while ( ! p(source(f))) {
        f = successor(f);
        if (equal(f, l)) return;
    }    

    var j = f;
    j = successor(j)
    if (equal(j, l)) return;

    while ( ! equal(successor(j), l)) {
        if ( ! p(source(j))) {
            iter_swap(f, j);
            f = successor(f);
        }
        j = successor(j);
    }
    iter_swap(f, j);
}

function partition_semistable_nonempty(f, l, p) {
    var _f_ = start_f('partition_semistable_nonempty', f, l, p);
    var res = __debug_partition_semistable_nonempty(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_partition_stable_forward(f, l, p) {
    while (true) {
        if (equal(f, l)) return f;
        if (p(source(f))) break;
        f = successor(f);
    }

    var j = f;
    j = successor(j)

    while ( ! equal(j, l)) {
        if ( ! p(source(j))) {
            rotate(f, j, successor(j));     //TODO: refine rotate(...)
            f = successor(f);
        }
        j = successor(j);
    }
    return f;
}

function partition_stable_forward(f, l, p) {
    var _f_ = start_f('partition_stable_forward', f, l, p);
    var res = __debug_partition_stable_forward(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_partition_stable_with_buffer_0(f, l, p, b) {
    var tmp = partition_copy(f, l, f, b, p);
    var tf = tmp[0];
    var ts = tmp[1];
    copy(b, ts, tf);
    return tf;
}

function partition_stable_with_buffer_0(f, l, p, b) {
    var _f_ = start_f('partition_stable_with_buffer_0', f, l, p, b);
    var res = __debug_partition_stable_with_buffer_0(f, l, p, b);
    end_f(_f_);
    return res;
}

function __debug_partition_point_n(f, n, p) {
    while (n != 0) {
        var h = half_nonnegative(n);
        var m = successor(f, h);

        if (p(source(m))) {
            n = h;
        } else {
            n -= h + 1;
            f = successor(m);
        }
    }
    return f;
}

function partition_point_n(f, n, p) {
    var _f_ = start_f('partition_point_n', f, n, p);
    var res = __debug_partition_point_n(f, n, p);
    end_f(_f_);
    return res;
}

function __debug_partition_point_n_forward(f, n, p) {
    var t = n;
    while (n != 0) {
        var h = half_nonnegative(n);
        var m = successor(f, h);

        if (p(source(m))) {
            n = h;
        } else {
            n -= h + 1;
            t -= h + 1;
            f = successor(m);
        }
    }
    return [f, t];
}

function partition_point_n_forward(f, n, p) {
    var _f_ = start_f('partition_point_n_forward', f, n, p);
    var res = __debug_partition_point_n_forward(f, n, p);
    end_f(_f_);
    return res;
}

function __debug_find(f, l, x) {
    while ( ! equal(f, l) && ! source(f) != x) {
        f = successor(f)
    }
    return f;
}

function find(f, l, x) {
    var _f_ = start_f('find', f, l, x);
    var res = __debug_find(f, l, x);
    end_f(_f_);
    return res;
}

function __debug_find_backward_if(f, l, p) {
    while (true) {
        if (equal(l, f)) return f;
        l = predecessor(l);
        if (p(source(l))) return successor(l);
    }    
}

function find_backward_if(f, l, p) {
    var _f_ = start_f('find_backward_if', f, l, p);
    var res = __debug_find_backward_if(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_find_if(f, l, p) {
    while ( ! equal(f, l) && ! p(source(f))) {
        f = successor(f)
    }
    return f;
}

function find_if(f, l, p) {
    var _f_ = start_f('find_if', f, l, p);
    var res = __debug_find_if(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_find_subsequence_n_naive(f, fn, s, sn, r) {
    if (sn == 0) return [f, fn];

    while (true) {
        if (fn < sn) return [f, 0];

        var tf = f;
        var ts = s;
        var n = sn;
        while (true) {
            if (n == 0) return [f, fn];
            if ( ! r(source(tf), source(ts))) break;
            --n;
            ts = successor(ts);
            tf = successor(tf);
        }
        --fn;
        f = successor(f);
    }

    return [f, fn];
}

function find_subsequence_n_naive(f, fn, s, sn, r) {
    var _f_ = start_f('find_subsequence_n_naive', f, fn, s, sn, r);
    var res = __debug_find_subsequence_n_naive(f, fn, s, sn, r);
    end_f(_f_);
    return res;
}

function __debug_find_subsequence_n_naive_1(f, fn, s, sn, r) {
    if (sn == 0) return [f, fn];

    while (true) {
        if (fn < sn) return [f, 0];

        var tf = f;
        var ts = s;
        var n = sn;
        while (true) {
            if (n == 0) return [f, fn];
            if ( ! r(source(tf), source(ts))) break;
            --n;
            ts = successor(ts);
            tf = successor(tf);
        }
        var skip = 1;
        if (n != sn) {
            var eqf = predicate(function eqf(x) { return r(x, source(tf)); });
            var it = find_if(s, ts, eqf);

            if (equal(it, ts)) {
                skip = sn - n;
            }
        }
        fn -= skip;
        f = successor(f, skip);
    }

    return [f, fn];
}

function find_subsequence_n_naive_1(f, fn, s, sn, r) {
    var _f_ = start_f('find_subsequence_n_naive_1', f, fn, s, sn, r);
    var res = __debug_find_subsequence_n_naive_1(f, fn, s, sn, r);
    end_f(_f_);
    return res;
}

function __debug_find_subsequence_naive(f, l, sf, sl, r) {
    if (equal(sf, sl)) return f;

    while (true) {
        var tf = f;
        var ts = sf;
        while (true) {
            if (equal(tf, l)) return l;
            if (equal(ts, sl)) return f;
            if ( ! r(source(tf), source(ts))) break;
            ts = successor(ts);
            tf = successor(tf);
        }
        f = successor(f);
    }
    return f;
}

function find_subsequence_naive(f, l, sf, sl, r) {
    var _f_ = start_f('find_subsequence_naive', f, l, sf, sl, r);
    var res = __debug_find_subsequence_naive(f, l, sf, sl, r);
    end_f(_f_);
    return res;
}

function __debug_max_element(f, l, r) {
    if (equal(f, l)) return l;

    var m = f;
    f = successor(f);

    while ( ! equal(f, l)) {
        if ( ! r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function max_element(f, l, r) {
    var _f_ = start_f('max_element', f, l, r);
    var res = __debug_max_element(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_min_element(f, l, r) {
    if (equal(f, l)) return l;

    var m = f;
    f = successor(f);

    while ( ! equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function min_element(f, l, r) {
    var _f_ = start_f('min_element', f, l, r);
    var res = __debug_min_element(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_min_element_nonempty(f, l, r) {
    var m = f;
    f = successor(f);

    while ( ! equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function min_element_nonempty(f, l, r) {
    var _f_ = start_f('min_element_nonempty', f, l, r);
    var res = __debug_min_element_nonempty(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_min_value(f, l, r) {
    //precondition: ! equal(f, l)) return l;

    var m = f;
    f = successor(f);

    while ( ! equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function min_value(f, l, r) {
    var _f_ = start_f('min_value', f, l, r);
    var res = __debug_min_value(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_select_1_2(a, b, r) {
    return r(b, a) ? a : b;
}

function select_1_2(a, b, r) {
    var _f_ = start_f('select_1_2', a, b, r);
    var res = __debug_select_1_2(a, b, r);
    end_f(_f_);
    return res;
}

function __debug_select_1_3(a, b, c, r) {
    return r(b, a) ? 
              select_1_3_ab(b, a, c, r) 
            : select_1_3_ab(a, b, c, r);
}

function select_1_3(a, b, c, r) {
    var _f_ = start_f('select_1_3', a, b, c, r);
    var res = __debug_select_1_3(a, b, c, r);
    end_f(_f_);
    return res;
}

function __debug_select_1_3_ab(a, b, c, r) {
    // precondition: a <= b
    
    return ! r(c, b) ? 
                b :                  // a, b, c are sorted
                select_1_2(a, c, r); // b is not the median
}

function select_1_3_ab(a, b, c, r) {
    var _f_ = start_f('select_1_3_ab', a, b, c, r);
    var res = __debug_select_1_3_ab(a, b, c, r);
    end_f(_f_);
    return res;
}

function __debug_copy(f, l, o) {
    while ( ! equal(f, l)) {
        sink(o, source(f));
        o = successor(o);
        f = successor(f);
    }
}

function copy(f, l, o) {
    var _f_ = start_f('copy', f, l, o);
    var res = __debug_copy(f, l, o);
    end_f(_f_);
    return res;
}

function __debug_copy_backward(f_i, l_i, l_o) {
    while ( ! equal(f_i, l_i)) {
        // copy_backward_step(l_i, l_o);
        l_i = predecessor(l_i);
        l_o = predecessor(l_o);
        sink(l_o, source(l_i));
    } 
    return l_o;
}

function copy_backward(f_i, l_i, l_o) {
    var _f_ = start_f('copy_backward', f_i, l_i, l_o);
    var res = __debug_copy_backward(f_i, l_i, l_o);
    end_f(_f_);
    return res;
}

function __debug_copy_n(f_i, n, f_o) {
    while (n != 0) {
        sink(f_o, source(f_i));
        f_i = successor(f_i);
        f_o = successor(f_o);
        --n;
    }
    return [f_i, f_o];
}

function copy_n(f_i, n, f_o) {
    var _f_ = start_f('copy_n', f_i, n, f_o);
    var res = __debug_copy_n(f_i, n, f_o);
    end_f(_f_);
    return res;
}

function __debug_equal_r(f, l, f2, r) {
    while ( ! equal(f, l)) {
        if ( ! r(source(f), source(f2))) {
            return false;
        }

        f = successor(f);
        f2 = successor(f2);
    }
    return true;
}

function equal_r(f, l, f2, r) {
    var _f_ = start_f('equal_r', f, l, f2, r);
    var res = __debug_equal_r(f, l, f2, r);
    end_f(_f_);
    return res;
}

function __debug_insert(s, ip, f, l) {
    var d = distance(begin(s), ip);
    var ld = distance(ip, end(s));
    
    while ( ! equal(f, l)) {
        s = push_back(s, source(f));
        f = successor(f);
        ++d;
    }

    rotate(begin(s), successor(begin(s), ld), end(s));

    return s;
}

function insert(s, ip, f, l) {
    var _f_ = start_f('insert', s, ip, f, l);
    var res = __debug_insert(s, ip, f, l);
    end_f(_f_);
    return res;
}

function __debug_insert_naive(s, ip, f, l) {
    var d = distance(begin(s), ip);
    
    while ( ! equal(f, l)) {
        // s = increase_capacity(s, 1)
        s = push_back(s, 0);
        ip = successor(begin(s), d)
        shift_right_by_one(ip, end(s));
        sink(ip, source(f));
        f = successor(f);
        ++d;
    }

    return s;
}

function insert_naive(s, ip, f, l) {
    var _f_ = start_f('insert_naive', s, ip, f, l);
    var res = __debug_insert_naive(s, ip, f, l);
    end_f(_f_);
    return res;
}

function __debug_iota(f, l, start, step) {
    if ( ! start) start = 0;
    if ( ! step) step = 1;

    while ( ! equal(f, l)) {
        sink(f, start);
        start += step;
        f = successor(f);
    }
    return start;
}

function iota(f, l, start, step) {
    var _f_ = start_f('iota', f, l, start, step);
    var res = __debug_iota(f, l, start, step);
    end_f(_f_);
    return res;
}

function __debug_move_backward(f_i, l_i, l_o) {
    while (! equal(f_i, l_i)) {
        //move_backward_step(l_i, l_o);
        l_i = predecessor(l_i);
        l_o = predecessor(l_o);
        sink_move(l_o, source(l_i));
    } 
    return l_o;
}

function move_backward(f_i, l_i, l_o) {
    var _f_ = start_f('move_backward', f_i, l_i, l_o);
    var res = __debug_move_backward(f_i, l_i, l_o);
    end_f(_f_);
    return res;
}

function __debug_palindrome_bidirectional(f, l, r) {
    while (true) {
        if (equal(f, l)) break;
        l = predecessor(l);

        if ( ! r(source(f), source(l))) return false;

        f = successor(f);
        if (equal(f, l)) break;
    }
    return true;
}

function palindrome_bidirectional(f, l, r) {
    var _f_ = start_f('palindrome_bidirectional', f, l, r);
    var res = __debug_palindrome_bidirectional(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_palindrome_naive(seq_arr, r) {
    var seq = sequence(seq_arr, "seq");
    var seq_arr_rev = seq_arr.slice().reverse();
    var seq_rev = sequence(seq_arr_rev, "seq_rev");

    var f = begin(seq);
    var l = end(seq);
    var f2 = begin(seq_rev);

    var res = equal_r(f, l, f2, r);

    return res;
}

function palindrome_naive(seq_arr, r) {
    var _f_ = start_f('palindrome_naive', seq_arr, r);
    var res = __debug_palindrome_naive(seq_arr, r);
    end_f(_f_);
    return res;
}

function __debug_swap_ranges(f0, l0, f1) {
    while ( ! equal(f0, l0)) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
    }
    return f1; 
}

function swap_ranges(f0, l0, f1) {
    var _f_ = start_f('swap_ranges', f0, l0, f1);
    var res = __debug_swap_ranges(f0, l0, f1);
    end_f(_f_);
    return res;
}

function __debug_swap_ranges_bounded(f0, l0, f1, l1) {
    while ( ! equal(f0, l0) && ! equal(f1, l1)) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
    } 
    return [f0, f1];
}

function swap_ranges_bounded(f0, l0, f1, l1) {
    var _f_ = start_f('swap_ranges_bounded', f0, l0, f1, l1);
    var res = __debug_swap_ranges_bounded(f0, l0, f1, l1);
    end_f(_f_);
    return res;
}

function __debug_swap_ranges_n(f0, f1, n) {
    while (n != 0) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
        --n;
    }
    return [f0, f1];
}

function swap_ranges_n(f0, f1, n) {
    var _f_ = start_f('swap_ranges_n', f0, f1, n);
    var res = __debug_swap_ranges_n(f0, f1, n);
    end_f(_f_);
    return res;
}



function half_nonnegative(n) {return n >> 1;}
function twice(n) {return n + n;}
function remainder(a, b) {return a % b;}var eq = relation(function eq(x, y) {return x == y;});
var lt = relation(function lt(x, y) {return x < y;});
var gt = relation(function gt(x, y) {return x < y;});
var lte = relation(function lte(x, y) {return x <= y;});
var gte = relation(function gte(x, y) {return x >= y;});
