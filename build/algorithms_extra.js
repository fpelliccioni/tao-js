function __copy_usage() {

}

function __copy_attributes() {

}

function __copy_backward_usage() {
}

function __copy_backward_attributes() {

}

function __copy_n_usage() {

}

function __copy_n_attributes() {

}

function __equal_r_usage() {
    
    
    var d1_raw = ['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'];
    var d2_raw = ['e', 'v', 'i', 't', 'x', 't', 'i', 'v', 'e'];
    
    var d1 = sequence(d1_raw, "d1");
    var d2 = sequence(d2_raw, "d2");
    
    var f = begin(d1);
    var l = end(d1);
    var f2 = begin(d2);
    
    var res = equal_r(f, l, f2, eq);
    print(res);

}

function __equal_r_attributes() {

}

function __find_usage() {
    
    
    print(array_from("Hello, World!"))
    var s = sequence(array_from("Hello, World!"), "s");
    
    var it = find(begin(s), end(s), 'x');
    if ( ! equal(it, end(s))) {
        print(source(it));
    }

}

function __find_attributes() {

}

function __find_backward_if_usage() {
    
    
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d");
    var f = begin(d);
    var l = end(d);
    
    var it = find_backward_if(f, l, even);
    if ( ! equal(it, f)) {
        print(source(predecessor(it)));
    }
    

}

function __find_backward_if_attributes() {

}

function __find_if_usage() {
    
    
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d");
    var f = begin(d);
    var l = end(d);
    
    var it = find_if(f, l, even);
    if ( ! equal(it, l)) {
        print(source(it));
    }

}

function __find_if_attributes() {

}

function __gcd_usage() {
    var a = random_int();
    var b = random_int();
    
    var g = gcd(a, b);
    print(g);
}

function __gcd_attributes() {

}

function __insert_usage() {
    
    
    var s = sequence(array_random(), "s");
    var i = sequence(array_random(5), "i");
    
    print(s);
    print(i);
    s = insert(s, begin(s), begin(i), end(i));
    print(s);
    print('...');

}

function __insert_attributes() {

}

function __insert_naive_usage() {
    var s = sequence(array_random(), "s");
    var i = sequence(array_random(5), "i");
    
    print(s);
    print(i);
    s = insert_naive(s, begin(s), begin(i), end(i));
    print(s);
    print('...');
}

function __insert_naive_attributes() {

}

function __insertion_sort_usage() {
    
      
    // var s = sequence([1, 2, 3, 4, 5], "s", lt);
    // var s = sequence([1, 2], "s", lt);
    
    // var s = sequence(array_random(), "s", lt);
    // var s = sequence(array_all_equal(), "s", lt);
    // var s = sequence(array_ascending(), "s", lt);
    var s = sequence(array_descending(), "s", lt);
    
    print(s);
    insertion_sort(begin(s), end(s), lt);
    print(s);

}

function __insertion_sort_attributes() {

}

function __insertion_sort_backward_usage() {
    
      
    // var s = sequence(array_random(), "s", lt);
    // var s = sequence([81, 28, 20, 67, 36, 84, 86, 48, 34, 5], "s", lt);
    var s = sequence([34, 5], "s", lt);
    
    print(s);
    insertion_sort_backward(begin(s), end(s), lt);
    print(s);

}

function __insertion_sort_backward_attributes() {

}

function __insertion_sort_classic_usage() {
    
      
    // var s = sequence(array_random(), "s", lt);
    var s = sequence(array_descending(), "s", lt);
    
    print(s);
    insertion_sort_classic(begin(s), end(s), lt);
    print(s);

}

function __insertion_sort_classic_attributes() {

}

function __insertion_sort_classic_0_usage() {
    
      
    //var s = sequence(array_random(), "s", lt);
    var s = sequence([34, 5], "s", lt);
    print(s);
    insertion_sort_classic_0(begin(s), end(s), lt);
    print(s);

}

function __insertion_sort_classic_0_attributes() {

}

function __insertion_sort_classic_1_usage() {
    
      
    var s = sequence(array_random(), "s", lt);
    print(s);
    insertion_sort_classic_1(begin(s), end(s), lt);
    print(s);

}

function __insertion_sort_classic_1_attributes() {

}

function __insertion_sort_classic_2_usage() {
    
      
    var s = sequence(array_random(), "s", lt);
    print(s);
    insertion_sort_classic_2(begin(s), end(s), lt);
    print(s);

}

function __insertion_sort_classic_2_attributes() {

}

function __insertion_sort_classic_3_usage() {
    
      
    var s = sequence(array_random(), "s", lt);
    print(s);
    insertion_sort_classic_3(begin(s), end(s), lt);
    print(s);

}

function __insertion_sort_classic_3_attributes() {

}

function __iota_usage() {
    
    
    var d1 = sequence(new Array(8), "d1");
    var d2 = sequence(new Array(5), "d2");
    
    var f = successor(begin(d1));
    var l = predecessor(end(d1));
    
    var r = iota(f, l);
    print(r);
    
    f = begin(d2);
    l = end(d2);
    
    
    r = iota(f, l, r);
    print(r);

}

function __iota_attributes() {

}

function __make_heap_n_usage() {
    
    
    // var s = sequence(array_random(), "s");
    var s = sequence([24, 88, 59, 31, 91, 0, 87, 91, 40, 52], "s");
    
    print(s);
    make_heap_n(begin(s), size(s));
    print(s);

}

function __make_heap_n_attributes() {

}

function __make_heap_n_naive_0_usage() {
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
    make_heap_n_naive_0(begin(s), size(s));
    print(s);
}

function __make_heap_n_naive_0_attributes() {

}

function __make_heap_n_naive_1_usage() {
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

function __make_heap_n_naive_1_attributes() {

}

function __max_element_usage() {
    var s = sequence(array_random(), "s");

    var l = end(s);
    
    var m = max_element(begin(s), l, lt);
    if ( ! equal(m, l)) {
        print("The max element is: " + source(m));
    } else {
        print("An empty sequence has no max element");
    }
}

function __max_element_attributes() {
    return {
        class: ['Selection'],
        complexity: 'n - 1 comparisons',
        "type requirements": ['f, l: I: Iterator \u2227 Readable',
                              'r: R: StrictWeakOrdering relation',
                              'Domain(R) = ValueType(I)'],
        precondition: 'readable_bounded_range(f, l)',
        postcondition: 'source(m) = sort_stable_copy(f, l, r)[0]',
        other: ['Stable'],
    };
}

function __min_element_usage() {
    var s = sequence(array_random(), "s");
    var l = end(s);
    
    var m = min_element(begin(s), l, lt);
    if ( ! equal(m, l)) {
        print("The min element is: " + source(f));
    } else {
        print("An empty sequence has no min element");
    }
}

function __min_element_attributes() {
    return {
        class: ['Selection'],
        complexity: 'n - 1 comparisons',
        "type requirements": ['f, l: I: Iterator \u2227 Readable',
                              'r: R: StrictWeakOrdering relation',
                              'Domain(R) = ValueType(I)'],
        precondition: 'readable_bounded_range(f, l)',
        postcondition: 'source(m) = sort_stable_copy(f, l, r)[0]',
        other: ['Stable'],
    };
}

function __min_element_nonempty_usage() {
    var s = sequence(array_random(), "s");
    var l = end(s);
    
    var m = min_element_nonempty(begin(s), l, lt);
    if ( ! equal(m, l)) {
        print("The min element is: " + source(f));
    }
}

function __min_element_nonempty_attributes() {
    return {
        class: ['Selection'],
        complexity: 'n - 1 comparisons',
        "type requirements": ['f, l: I: Iterator \u2227 Readable',
                              'r: R: StrictWeakOrdering relation',
                              'Domain(R) = ValueType(I)'],
        precondition: 
`readable_bounded_range(f, l)
\u2227 f != l
`,
        postcondition: 'source(m) = sort_stable_copy(f, l, r)[0]',
        other: ['Stable'],
    };
}

function __min_value_usage() {
    
    
    var d = sequence(array_random(), "d", true);
    
    var f = begin(d);
    var l = end(d);
    
    f = min_element(f, l, lt);
    if ( ! equal(f, l)) {
        print("The min element is: " + source(f));
    }

}

function __min_value_attributes() {

}

function __move_backward_usage() {

}

function __move_backward_attributes() {

}

function __palindrome_bidirectional_usage() {
    
    
    //var word = sequence(['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'], "word");
    //var word = sequence(['e', 'v', 'i', 'x', 'a', 't', 'i', 'v', 'e'], "word");
    var word = sequence(['e', 'v', 'i', 't', 't', 'i', 'v', 'e'], "word");
    
    var f = begin(word);
    var l = end(word);
    
    var res = palindrome_bidirectional(f, l, eq);
    
    if (res) {
        print('the word is palindrome');
    } else {
        print('the word not is palindrome');
    };

}

function __palindrome_bidirectional_attributes() {

}

function __palindrome_forward_recursive_usage() {
    
    
    var word = sequence(['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'], "word");
    // var word = sequence(['e', 'v', 'i', 'x', 'a', 't', 'i', 'v', 'e'], "word");
    
    var f = begin(word);
    var n = size(word);
    
    var res = palindrome_forward(f, n, eq);
    
    
    if (res[0]) {
        print('the word is palindrome');
    } else {
        print('the word not is palindrome');
    };

}

function __palindrome_forward_recursive_attributes() {

}

function __palindrome_naive_usage() {
    //var word_arr = ['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'];
    var word_arr = ['e', 'v', 'i', 'x', 'a', 't', 'i', 'v', 'e'];
    
    var res = palindrome_naive(word_arr, eq);
    if (res) {
        print('the word is palindrome');
    } else {
        print('the word not is palindrome');
    };
}

function __palindrome_naive_attributes() {

}

function __partition_copy_usage() {
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even, true);
    var bad = sequence(new Array(size(d)), "bad");
    var good = sequence(new Array(size(d)), "good");
    
    var res = partition_copy(begin(d), end(d), begin(bad), begin(good), even);
    
    var fg = res[0];
    var fb = res[1];
    
    print('...');
}

function __partition_copy_attributes() {

}

function __partition_point_n_usage() {
    
    
    var even = predicate(function even(x) { return (x & 1) == 0; });
    
    var d = sequence([1, 5, 1, 1, 3, 3, 3, 7, 3, 2, 6, 4], "d", even);
    
    var p = partition_point_n(begin(d), size(d), even);
    print('partition point: ' + source(p));

}

function __partition_point_n_attributes() {

}

function __partition_semistable_usage() {
    
    
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even, true);
    var f = begin(d);
    var l = end(d);
    
    var p = partition_semistable(f, l, even);
    if ( ! equal(p, l)) {
        print('partition point: ' + source(p));
    }

}

function __partition_semistable_attributes() {

}

function __partition_semistable_1_usage() {
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even, true);
    var f = begin(d);
    var l = end(d);
    
    var p = partition_semistable_1(f, l, even);
    if ( ! equal(p, l)) {
        print('partition point: ' + source(p));
    }
}

function __partition_semistable_1_attributes() {

}

function __partition_semistable_nonempty_usage() {
    
    
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even, true);
    var f = begin(d);
    var l = end(d);
    
    partition_semistable_nonempty(f, l, even);

}

function __partition_semistable_nonempty_attributes() {

}

function __partition_stable_forward_usage() {
    
    
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even);
    var f = begin(d);
    var l = end(d);
    
    var p = partition_stable_forward(f, l, even);
    if ( ! equal(p, l)) {
        print('partition point: ' + source(p));
    }

}

function __partition_stable_forward_attributes() {

}

function __partition_stable_with_buffer_0_usage() {
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even);
    var buf = sequence(new Array(size(d)), "buf");
    
    var p = partition_stable_with_buffer_0(begin(d), end(d), even, begin(buf));
    if ( ! equal(p, l)) {
        print('partition point: ' + source(p));
    }
}

function __partition_stable_with_buffer_0_attributes() {

}

function __reverse_bidirectional_usage() {
    var s = sequence(array_random(), "s1");
    print(s);
    reverse_bidirectional(begin(s), end(s));
    print(s);
    print('...');
}

function __reverse_bidirectional_attributes() {

}

function __reverse_copy_usage() {
    var d = sequence(array_random(), "d");
    var b = sequence(new Array(size(d)), "b");
    
    var res = reverse_copy(begin(d), end(d), begin(b));
    print(d);
    print(b);
}

function __reverse_copy_attributes() {

}

function __reverse_n_adaptive_usage() {
    var s = sequence(array_random(16), "s");
    //var b = sequence(new Array(size(s)), "b");
    var b = sequence(new Array(4), "b");
    print(s);
    var r = reverse_n_adaptive(begin(s), size(s), begin(b), size(b));
    print(s);
}

function __reverse_n_adaptive_attributes() {

}

function __reverse_n_forward_usage() {
    var s = sequence(array_random(), "s1");
    print(s);
    var r = reverse_n_forward(begin(s), size(s));
    print(s);
    print('...');
}

function __reverse_n_forward_attributes() {

}

function __reverse_n_indexed_usage() {
    var s = sequence(array_random(), "s1");
    print(s);
    reverse_n_indexed(begin(s), size(s));
    print(s);
    print('...');
}

function __reverse_n_indexed_attributes() {

}

function __reverse_n_with_buffer_usage() {
    var s = sequence(array_random(), "s");
    var b = sequence(new Array(size(s)), "b");
    print(s);
    var r = reverse_n_with_buffer(begin(s), size(s), begin(b));
    print(s);
}

function __reverse_n_with_buffer_attributes() {

}

function __rotate_bidirectional_usage() {
    var s = sequence(array_random(), "s");
    print(s);
    rotate_bidirectional(begin(s), successor(begin(s), 3), end(s));
    print(s);
    print('...');
}

function __rotate_bidirectional_attributes() {

}

function __rotate_random_access_usage() {
    var s = sequence(array_random(12), "s");
    print(s);
    rotate_random_access_nontrivial(begin(s), successor(begin(s), 3), end(s));
    print(s);
    print('...');
}

function __rotate_random_access_attributes() {

}

function __rotate_right_by_one_usage() {
}

function __rotate_right_by_one_attributes() {

}

function __select_1_2_usage() {
    var tmp = array_random(3);
    var a = tmp[0];
    var b = tmp[1];
    
    var m = select_1_2(a, b, lt);
    print(m);
}

function __select_1_2_attributes() {

}

function __select_1_3_usage() {
    var tmp = array_random(3);
    var a = tmp[0];
    var b = tmp[1];
    var c = tmp[2];
    
    var m = select_1_3(a, b, c, lt);
    print(m);
}

function __select_1_3_attributes() {

}

function __select_1_3_ab_usage() {
    var a = 1;
    var b = 2;
    var c = random_int();
    
    var m = select_1_3_ab(a, b, c, lt);
    print(m);
}

function __select_1_3_ab_attributes() {

}

function __selection_sort_classic_usage() {
    
      
    var s = sequence(array_random(), "s", lt);
    
    print(s);
    selection_sort_classic(begin(s), end(s), lt);
    print(s);
    print(is_sorted(begin(s), end(s), lt));
    

}

function __selection_sort_classic_attributes() {

}

function __selection_sort_stable_usage() {
    var s = sequence(array_random(), "s", lt);
    print(s);
    selection_sort_stable(begin(s), end(s), lt);
    print(s);
}

function __selection_sort_stable_attributes() {

}

function __shift_right_by_one_usage() {

}

function __shift_right_by_one_attributes() {

}

function __shift_right_while_usage() {

}

function __shift_right_while_attributes() {

}

function __shift_right_while_nonempty_usage() {

}

function __shift_right_while_nonempty_attributes() {

}

function __swap_ranges_usage() {
    
    
    var s1 = sequence(array_random(), "s1");
    var s2 = sequence(array_random(), "s2");
    
    var r = swap_ranges(begin(s1), end(s1), begin(s2));
    print('...');

}

function __swap_ranges_attributes() {

}

function __swap_ranges_bounded_usage() {
    
    
    var s1 = sequence(array_random(), "s1");
    var s2 = sequence(array_random(5), "s2");
    
    var r = swap_ranges_bounded(begin(s1), end(s1), begin(s2), end(s2));
    var f0 = r[0];
    var f1 = r[1];
    print('...');

}

function __swap_ranges_bounded_attributes() {

}

function __swap_ranges_n_usage() {
    var s1 = sequence(array_random(), "s1");
    var s2 = sequence(array_random(5), "s2");
    
    var r = swap_ranges_n(begin(s1), begin(s2), 5);
    var f0 = r[0];
    var f1 = r[1];
    print('...');
}

function __swap_ranges_n_attributes() {

}

