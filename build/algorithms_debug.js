function __debug_copy(f, l, o) {
    while ( ! equal(f, l)) {
        sink(o, source(f));
        o = successor(o);
        f = successor(f);
    }
    return o;
}

function copy(f, l, o) {
    var _f_ = start_f('copy', f, l, o);
    var res = __debug_copy(f, l, o);
    end_f(_f_);
    return res;
}

function __debug_copy_backward(f, l, o) {
    while ( ! equal(f, l)) {
        l = predecessor(l);
        o = predecessor(o);
        sink(o, source(l));
    }
    return o;
}

function copy_backward(f, l, o) {
    var _f_ = start_f('copy_backward', f, l, o);
    var res = __debug_copy_backward(f, l, o);
    end_f(_f_);
    return res;
}

function __debug_copy_backward_n(l, n, o) {
    while (n != 0) {
        l = predecessor(l);
        o = predecessor(o);
        --n;
        sink(o, source(l));
    }
    return [l, o];
}

function copy_backward_n(l, n, o) {
    var _f_ = start_f('copy_backward_n', l, n, o);
    var res = __debug_copy_backward_n(l, n, o);
    end_f(_f_);
    return res;
}

function __debug_copy_bounded(f, l, fo, lo) {
    while ( ! equal(f, l) && ! equal(fo, lo)) {
        sink(fo, source(f));
        fo = successor(fo);
        f = successor(f);
    }
    return [f, fo];
}

function copy_bounded(f, l, fo, lo) {
    var _f_ = start_f('copy_bounded', f, l, fo, lo);
    var res = __debug_copy_bounded(f, l, fo, lo);
    end_f(_f_);
    return res;
}

function __debug_copy_n(f, n, o) {
    while (n != 0) {
        sink(o, source(f));
        f = successor(f);
        o = successor(o);
        --n;
    }
    return [f, o];
}

function copy_n(f, n, o) {
    var _f_ = start_f('copy_n', f, n, o);
    var res = __debug_copy_n(f, n, o);
    end_f(_f_);
    return res;
}

function __debug_move_backward(f, l, o) {
    while (! equal(f, l)) {
        l = predecessor(l);
        o = predecessor(o);
        sink_move(o, source(l));
    }
    return o;
}

function move_backward(f, l, o) {
    var _f_ = start_f('move_backward', f, l, o);
    var res = __debug_move_backward(f, l, o);
    end_f(_f_);
    return res;
}

function __debug_reverse_copy(f, l, o) {
    while ( ! equal(f, l)) {
        l = predecessor(l);
        sink(o, source(l));
        o = successor(o);
    }
    return o;
}

function reverse_copy(f, l, o) {
    var _f_ = start_f('reverse_copy', f, l, o);
    var res = __debug_reverse_copy(f, l, o);
    end_f(_f_);
    return res;
}

function __debug_reverse_copy_backward(f, l, o) {
    while ( ! equal(f, l)) {
        o = predecessor(o);
        sink(o, source(f));
        f = successor(f);
    }
    return o;
}

function reverse_copy_backward(f, l, o) {
    var _f_ = start_f('reverse_copy_backward', f, l, o);
    var res = __debug_reverse_copy_backward(f, l, o);
    end_f(_f_);
    return res;
}

function __debug_reverse_copy_backward_n(f, n, o) {
    while (n != 0) {
        o = predecessor(o);
        sink(o, source(f));
        f = successor(f);
        --n;
    }
    return [f, o];
}

function reverse_copy_backward_n(f, n, o) {
    var _f_ = start_f('reverse_copy_backward_n', f, n, o);
    var res = __debug_reverse_copy_backward_n(f, n, o);
    end_f(_f_);
    return res;
}

function __debug_reverse_copy_n(l, n, o) {
    while (n != 0) {
        l = predecessor(l);
        sink(o, source(l));
        o = successor(o);
        --n;
    }
    return [l, o];
}

function reverse_copy_n(l, n, o) {
    var _f_ = start_f('reverse_copy_n', l, n, o);
    var res = __debug_reverse_copy_n(l, n, o);
    end_f(_f_);
    return res;
}

function __debug_combine_copy(f, l, f2, l2, o, r) {
    while ( ! equal(f, l) && ! equal(f2, l2)) {
        if (r(f2, f)) {
            sink(o, source(f2));
            f2 = successor(f2);
        } else {
            sink(o, source(f));
            f = successor(f);
        }
        o = successor(o);
    }
    return copy(f2, l2, copy(f, l, o));
}

function combine_copy(f, l, f2, l2, o, r) {
    var _f_ = start_f('combine_copy', f, l, f2, l2, o, r);
    var res = __debug_combine_copy(f, l, f2, l2, o, r);
    end_f(_f_);
    return res;
}

function __debug_combine_copy_backward(f, l, f2, l2, o, r) {
    while ( ! equal(f, l) && ! equal(f2, l2)) {
        o = predecessor(o);
        if (r(predecessor(l2), predecessor(l))) {
            l = predecessor(l);
            sink(o, source(l));
        } else {
            l2 = predecessor(l2);
            sink(o, source(l2));
        }
    }
    return copy_backward(f, l, copy_backward(f2, l2, o));
}

function combine_copy_backward(f, l, f2, l2, o, r) {
    var _f_ = start_f('combine_copy_backward', f, l, f2, l2, o, r);
    var res = __debug_combine_copy_backward(f, l, f2, l2, o, r);
    end_f(_f_);
    return res;
}

function __debug_combine_copy_backward_n(l, n, l2, n2, o, r) {
    while (n != 0 && n2 != 0) {
        o = predecessor(o);
        if (r(predecessor(l2), predecessor(l))) {
            l = predecessor(l);
            --n;
            sink(o, source(l));
        } else {
            l2 = predecessor(l2);
            --n2;
            sink(o, source(l2));
        }
    }
    var res0 = copy_backward_n(l2, n2, o);
    o = res0[1];
    var res1 = copy_backward_n(l, n, o);
    o = res1[1];
    return [res1[0], res0[0], o];
}

function combine_copy_backward_n(l, n, l2, n2, o, r) {
    var _f_ = start_f('combine_copy_backward_n', l, n, l2, n2, o, r);
    var res = __debug_combine_copy_backward_n(l, n, l2, n2, o, r);
    end_f(_f_);
    return res;
}

function __debug_combine_copy_n(f, n, f2, n2, o, r) {
    while (n != 0 && n2 != 0) {
        if (r(f2, f)) {
            sink(o, source(f2));
            f2 = successor(f2);
            --n2;
        } else {
            sink(o, source(f));
            f = successor(f);
            --n;
        }
        o = successor(o);
    }
    var res0 = copy_n(f, n, o);
    o = res0[1];
    var res1 = copy_n(f2, n2, o);
    o = res1[1];
    return [res0[0], res1[0], o];
}

function combine_copy_n(f, n, f2, n2, o, r) {
    var _f_ = start_f('combine_copy_n', f, n, f2, n2, o, r);
    var res = __debug_combine_copy_n(f, n, f2, n2, o, r);
    end_f(_f_);
    return res;
}

function __debug_copy_if(f, l, o, p) {
    var ps = predicate_source(p);
    return copy_select(f, l, o, ps);
}

function copy_if(f, l, o, p) {
    var _f_ = start_f('copy_if', f, l, o, p);
    var res = __debug_copy_if(f, l, o, p);
    end_f(_f_);
    return res;
}

function __debug_copy_if_n(f, n, o, p) {
    var ps = predicate_source(p);
    return copy_select(f, n, o, ps);
}

function copy_if_n(f, n, o, p) {
    var _f_ = start_f('copy_if_n', f, n, o, p);
    var res = __debug_copy_if_n(f, n, o, p);
    end_f(_f_);
    return res;
}

function __debug_copy_select(f, l, o, p) {
    while ( ! equal(f, l)) {
        if (p(f)) {
            sink(o, source(f));
            o = successor(o);
        }
        f = successor(f);
    }
    return o;
}

function copy_select(f, l, o, p) {
    var _f_ = start_f('copy_select', f, l, o, p);
    var res = __debug_copy_select(f, l, o, p);
    end_f(_f_);
    return res;
}

function __debug_copy_select_n(f, n, o, p) {
    while (n != 0) {
        if (p(f)) {
            sink(o, source(f));
            o = successor(o);
        }
        f = successor(f);
        --n;
    }
    return [f, o];
}

function copy_select_n(f, n, o, p) {
    var _f_ = start_f('copy_select_n', f, n, o, p);
    var res = __debug_copy_select_n(f, n, o, p);
    end_f(_f_);
    return res;
}

function __debug_merge_copy(f, l, f2, l2, o, r) {
    var rs = relation_source(r);
    return combine_copy(f, l, f2, l2, o, rs);
}

function merge_copy(f, l, f2, l2, o, r) {
    var _f_ = start_f('merge_copy', f, l, f2, l2, o, r);
    var res = __debug_merge_copy(f, l, f2, l2, o, r);
    end_f(_f_);
    return res;
}

function __debug_merge_copy_backward(f, l, f2, l2, o, r) {
    var rs = relation_source(r);
    return combine_copy_backward(f, l, f2, l2, o, rs);
}

function merge_copy_backward(f, l, f2, l2, o, r) {
    var _f_ = start_f('merge_copy_backward', f, l, f2, l2, o, r);
    var res = __debug_merge_copy_backward(f, l, f2, l2, o, r);
    end_f(_f_);
    return res;
}

function __debug_partition_copy(f, l, u, t, p) {
    var ps = predicate_source(p);
    return split_copy(f, l, u, t, ps);
}

function partition_copy(f, l, u, t, p) {
    var _f_ = start_f('partition_copy', f, l, u, t, p);
    var res = __debug_partition_copy(f, l, u, t, p);
    end_f(_f_);
    return res;
}

function __debug_partition_copy_n(f, l, u, t, p) {
    var ps = predicate_source(p);
    return split_copy_n(f, n, u, t, ps);
}

function partition_copy_n(f, l, u, t, p) {
    var _f_ = start_f('partition_copy_n', f, l, u, t, p);
    var res = __debug_partition_copy_n(f, l, u, t, p);
    end_f(_f_);
    return res;
}

function __debug_split_copy(f, l, u, t, p) {
    while ( ! equal(f, l)) {
        if (p(f)) {
            sink(t, source(f));
            t = successor(t);
        } else {
            sink(u, source(f));
            u = successor(u);
        }
        f = successor(f);
    }
    return [u, t];
}

function split_copy(f, l, u, t, p) {
    var _f_ = start_f('split_copy', f, l, u, t, p);
    var res = __debug_split_copy(f, l, u, t, p);
    end_f(_f_);
    return res;
}

function __debug_split_copy_n(f, n, u, t, p) {
    while (n != 0) {
        if (p(f)) {
            sink(t, source(f));
            t = successor(t);
        } else {
            sink(u, source(f));
            u = successor(u);
        }
        f = successor(f);
        --n;
    }
    return [f, u, t];
}

function split_copy_n(f, n, u, t, p) {
    var _f_ = start_f('split_copy_n', f, n, u, t, p);
    var res = __debug_split_copy_n(f, n, u, t, p);
    end_f(_f_);
    return res;
}

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

function __debug_multiply0(n, a) {
    if (n == 1) return a;
    var product = multiply0(n - 1, a)
    product += a;
    return product;
}

function multiply0(n, a) {
    var _f_ = start_f('multiply0', n, a);
    var res = __debug_multiply0(n, a);
    end_f(_f_);
    return res;
}

function __debug_multiply1(n, a) {
    if (n == 1) return a;
    var product = multiply1(half(n),  a + a);
    if (odd(n)) product += a;
    return product;

}

function multiply1(n, a) {
    var _f_ = start_f('multiply1', n, a);
    var res = __debug_multiply1(n, a);
    end_f(_f_);
    return res;
}

function __debug_multiply2(n, a) {
    if (n == 1) return a;
    return multiply_accumulate4(a, n - 1, a);

}

function multiply2(n, a) {
    var _f_ = start_f('multiply2', n, a);
    var res = __debug_multiply2(n, a);
    end_f(_f_);
    return res;
}

function __debug_multiply3(n, a) {
    while (even(n)) {
        a += a;
        n = half(n);
    }
    if (n == 1) return a;
    return multiply_accumulate4(a, n - 1, a);

}

function multiply3(n, a) {
    var _f_ = start_f('multiply3', n, a);
    var res = __debug_multiply3(n, a);
    end_f(_f_);
    return res;
}

function __debug_multiply4(n, a) {
    while (even(n)) {
        a += a;
        n = half(n);
    }
    if (n == 1) return a;
    // even(n - 1) ==> n - 1 != 1
    return multiply_accumulate4(a, half(n - 1), a);

}

function multiply4(n, a) {
    var _f_ = start_f('multiply4', n, a);
    var res = __debug_multiply4(n, a);
    end_f(_f_);
    return res;
}

function __debug_multiply_accumulate0(r, n, a) {
    if (n == 1) return r + a;
    if (odd(n)) {
        return multiply_accumulate0(r + a, half(n),  a + a);
    }
    return multiply_accumulate0(r, half(n),  a + a);
}

function multiply_accumulate0(r, n, a) {
    var _f_ = start_f('multiply_accumulate0', r, n, a);
    var res = __debug_multiply_accumulate0(r, n, a);
    end_f(_f_);
    return res;
}

function __debug_multiply_accumulate1(r, n, a) {
    if (n == 1) return r + a;
    if (odd(n)) r += a;
    return multiply_accumulate1(r, half(n),  a + a);
}

function multiply_accumulate1(r, n, a) {
    var _f_ = start_f('multiply_accumulate1', r, n, a);
    var res = __debug_multiply_accumulate1(r, n, a);
    end_f(_f_);
    return res;
}

function __debug_multiply_accumulate2(r, n, a) {
    if (odd(n)) {
        r += a;
        if (n == 1) return r;
    }
    return multiply_accumulate2(r, half(n),  a + a);
}

function multiply_accumulate2(r, n, a) {
    var _f_ = start_f('multiply_accumulate2', r, n, a);
    var res = __debug_multiply_accumulate2(r, n, a);
    end_f(_f_);
    return res;
}

function __debug_multiply_accumulate3(r, n, a) {
    if (odd(n)) {
        r += a;
        if (n == 1) return r;
    }
    n = half(n);
    a += a;
    return multiply_accumulate3(r, n,  a);
}

function multiply_accumulate3(r, n, a) {
    var _f_ = start_f('multiply_accumulate3', r, n, a);
    var res = __debug_multiply_accumulate3(r, n, a);
    end_f(_f_);
    return res;
}

function __debug_multiply_accumulate4(r, n, a) {
    while (true) {
        if (odd(n)) {
            r += a;
            if (n == 1) return r;
        }
        n = half(n);
        a += a;
    }
}

function multiply_accumulate4(r, n, a) {
    var _f_ = start_f('multiply_accumulate4', r, n, a);
    var res = __debug_multiply_accumulate4(r, n, a);
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

function __debug_insertion_sort_suffix_nonempty(f, l, r) {
    //precondition: ! equal(f, l)
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert_unguarded(c, r);
        c = successor(c);
    }
}

function insertion_sort_suffix_nonempty(f, l, r) {
    var _f_ = start_f('insertion_sort_suffix_nonempty', f, l, r);
    var res = __debug_insertion_sort_suffix_nonempty(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_linear_insert_unguarded(c, r) {
    if ( ! call(r, c, predecessor(c))) return c;

    increment_custom_stat("Misplaced elements");

    var value = source_move(c);
    var d = shift_right_while_unguarded(c, bind(r, value));
    sink_move(d, value);
    register_move_distance(distance(d, c));
    return d;
}

function linear_insert_unguarded(c, r) {
    var _f_ = start_f('linear_insert_unguarded', c, r);
    var res = __debug_linear_insert_unguarded(c, r);
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

function __debug_cycle_from(i, f) {
    var tmp = source(i);
    var j = i;
    var k = f(i);
    while ( ! equal(k, i)) {
        sink(j, source(k));
        j = k;
        k = f(k);
    }
    sink(j, tmp);
}

function cycle_from(i, f) {
    var _f_ = start_f('cycle_from', i, f);
    var res = __debug_cycle_from(i, f);
    end_f(_f_);
    return res;
}

function __debug_cycle_to(i, f) {
    var k = f(i);
    while ( ! equal(k, i)) {
        exchange_values(i, k);
        k = f(k);
    }
}

function cycle_to(i, f) {
    var _f_ = start_f('cycle_to', i, f);
    var res = __debug_cycle_to(i, f);
    end_f(_f_);
    return res;
}

function __debug_cycle_to_2n_1(i, f) {
    var k = f(i);
    if (equal(k, i)) return;

    var buf = sequence(array_all_equal(1, "-"), "buf");
    var b = begin(buf);
    var b2 = i;

    sink(b, source(k));
    sink(k, source(b2));

    var res = swap_iters(b, b2);
    b = res[0];
    b2 = res[1];

    k = f(k);
    while ( ! equal(k, i)) {
        sink(b, source(k));
        sink(k, source(b2));

        var res = swap_iters(b, b2);
        b = res[0];
        b2 = res[1];

        k = f(k);
    }
    sink(i, source(b2));
}

function cycle_to_2n_1(i, f) {
    var _f_ = start_f('cycle_to_2n_1', i, f);
    var res = __debug_cycle_to_2n_1(i, f);
    end_f(_f_);
    return res;
}

function __debug_cycle_to_recursive(i, f) {
    var k = f(i);
    if (equal(k, i)) return;

    var buf = sequence(array_all_equal(1, "-"), "buf");
    var b = begin(buf);
    cycle_to_internal(i, k, f, b);
    sink(k, source(i));
    sink(i, source(b));
}

function cycle_to_recursive(i, f) {
    var _f_ = start_f('cycle_to_recursive', i, f);
    var res = __debug_cycle_to_recursive(i, f);
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

function __debug_rotate_cycles(f, m, l, from) {
    var l_m = distance(l, m);
    var d = gcd(distance(m, f), l_m);

    while (d != 0) {
        cycle_from(successor(f, d), from);
        --d;
    }
    return successor(f, l_m);
}

function rotate_cycles(f, m, l, from) {
    var _f_ = start_f('rotate_cycles', f, m, l, from);
    var res = __debug_rotate_cycles(f, m, l, from);
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

function __debug_rotate_right_by_one_nonempty(f, l) {
    var butlast = predecessor(l);
    var x = source_move(butlast);
    move_backward(f, butlast, l);
    sink_move(f, x);
}

function rotate_right_by_one_nonempty(f, l) {
    var _f_ = start_f('rotate_right_by_one_nonempty', f, l);
    var res = __debug_rotate_right_by_one_nonempty(f, l);
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

function __debug_shift_right_while_unguarded(l, p) {
    while (p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
    }
    return l;
}

function shift_right_while_unguarded(l, p) {
    var _f_ = start_f('shift_right_while_unguarded', l, p);
    var res = __debug_shift_right_while_unguarded(l, p);
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

function __debug_all(f, l, p) {
    var np = find_if_not(f, l, p);
    return equal(l, np);
}

function all(f, l, p) {
    var _f_ = start_f('all', f, l, p);
    var res = __debug_all(f, l, p);
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

function __debug_find_if_not(f, l, p) {
    while ( ! equal(f, l) && p(source(f))) {
        f = successor(f)
    }
    return f;
}

function find_if_not(f, l, p) {
    var _f_ = start_f('find_if_not', f, l, p);
    var res = __debug_find_if_not(f, l, p);
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

function __debug_none(f, l, p) {
    var it = find_if(f, l, p);
    return equal(l, it);
}

function none(f, l, p) {
    var _f_ = start_f('none', f, l, p);
    var res = __debug_none(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_not_all(f, l, p) {
    return ! all(f, l, p);
}

function not_all(f, l, p) {
    var _f_ = start_f('not_all', f, l, p);
    var res = __debug_not_all(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_partitioned(f, l, p) {
    var it0 = find_if(f, l, p);
    var it1 = find_if_not(it0, l, p);
    return equal(it1, l);
}

function partitioned(f, l, p) {
    var _f_ = start_f('partitioned', f, l, p);
    var res = __debug_partitioned(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_partitioned_at_point(f, m, l, p) {
    // precondition: readable_bounded_range(f, l) && m belongs to [f, l)
    var c0 = none(f, m, p);
    var c1 = all(m, l, p);
    return c0 && c1;
}

function partitioned_at_point(f, m, l, p) {
    var _f_ = start_f('partitioned_at_point', f, m, l, p);
    var res = __debug_partitioned_at_point(f, m, l, p);
    end_f(_f_);
    return res;
}

function __debug_potential_partition_point(f, l, p) {
    var res = count_if_not_basis(f, l, p, f);
    return res;
}

function potential_partition_point(f, l, p) {
    var _f_ = start_f('potential_partition_point', f, l, p);
    var res = __debug_potential_partition_point(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_some(f, l, p) {
    return ! none(f, l, p);
}

function some(f, l, p) {
    var _f_ = start_f('some', f, l, p);
    var res = __debug_some(f, l, p);
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

function __debug_exchange_values_2(x, y) {
    var t = source(x);
    sink(x, source(y));
    sink(y, t);

    increment_assignment_stat(); // we have to count 3 assignments
    increment_swap_stat(); // we need to count a swap
}

function exchange_values_2(x, y) {
    var _f_ = start_f('exchange_values_2', x, y);
    var res = __debug_exchange_values_2(x, y);
    end_f(_f_);
    return res;
}

function __debug_swap_ranges(f, l, f1) {
    while ( ! equal(f, l)) {
        exchange_values(f, f1);
        f = successor(f);
        f1 = successor(f1);
    }
    return f1;
}

function swap_ranges(f, l, f1) {
    var _f_ = start_f('swap_ranges', f, l, f1);
    var res = __debug_swap_ranges(f, l, f1);
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

function __debug_count_if(f, l, p) {
    var res = count_if_basis(f, l, p, 0);
    return res;
}

function count_if(f, l, p) {
    var _f_ = start_f('count_if', f, l, p);
    var res = __debug_count_if(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_count_if_basis(f, l, p, j) {
    while ( ! equal(f, l)) {
        if (p(source(f))) {
            j = successor(j);
        }
        f = successor(f);
    }
    return j;
}

function count_if_basis(f, l, p, j) {
    var _f_ = start_f('count_if_basis', f, l, p, j);
    var res = __debug_count_if_basis(f, l, p, j);
    end_f(_f_);
    return res;
}

function __debug_count_if_not(f, l, p) {
    var res = count_if_not_basis(f, l, p, 0);
    return res;
}

function count_if_not(f, l, p) {
    var _f_ = start_f('count_if_not', f, l, p);
    var res = __debug_count_if_not(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_count_if_not_basis(f, l, p, j) {
    while ( ! equal(f, l)) {
        if ( ! p(source(f))) {
            j = successor(j);
        }
        f = successor(f);
    }
    return j;
}

function count_if_not_basis(f, l, p, j) {
    var _f_ = start_f('count_if_not_basis', f, l, p, j);
    var res = __debug_count_if_not_basis(f, l, p, j);
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

function __debug_fill(f, l, x) {
    while ( ! equal(f, l)) {
        sink(f, x);
        f = successor(f);
    }
}

function fill(f, l, x) {
    var _f_ = start_f('fill', f, l, x);
    var res = __debug_fill(f, l, x);
    end_f(_f_);
    return res;
}

function __debug_fill_n(f, n, x) {
    while (n != 0) {
        sink(f, x);
        f = successor(f);
        --n;
    }
}

function fill_n(f, n, x) {
    var _f_ = start_f('fill_n', f, n, x);
    var res = __debug_fill_n(f, n, x);
    end_f(_f_);
    return res;
}



function half_nonnegative(n) {return n >> 1;}
function half(n) {return n >> 1;}
function twice(n) {return n + n;}
function remainder(a, b) {return a % b;}
function even(x) { return (x & 1) == 0; }
function odd(x) { return ! even(x); }
var eq = relation(function eq(x, y) {return x == y;});
var lt = relation(function lt(x, y) {return x < y;});
var gt = relation(function gt(x, y) {return x > y;});
var lte = relation(function lte(x, y) {return x <= y;});
var gte = relation(function gte(x, y) {return x >= y;});
