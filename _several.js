var snippets = {

find_if:
`function find_if(f, l, p) {
    while ( ! equal(f, l) && ! p(source(f))) {
        f = successor(f)
    }
    return f;
}

var even = predicate(function even(x) { return (x & 1) == 0; });
var d = sequence(array_random(), "d");
var f = begin(d);
var l = end(d);

var it = find_if(f, l, even);
if ( ! equal(it, l)) {
    print(source(it));
}`

,find:
`function find(f, l, x) {
    while ( ! equal(f, l) && ! source(f) != x) {
        f = successor(f)
    }
    return f;
}

print(array_from("Hello, World!"))
var s = sequence(array_from("Hello, World!"), "s");

var it = find(begin(s), end(s), 'x');
if ( ! equal(it, end(s))) {
    print(source(it));
}`


, find_backward_if: 
`function find_backward_if(f, l, p) {
    while (true) {
        if (equal(l, f)) return f;
        l = predecessor(l);
        if (p(source(l))) return successor(l);
    }    
}

var even = predicate(function even(x) { return (x & 1) == 0; });
var d = sequence(array_random(), "d");
var f = begin(d);
var l = end(d);

var it = find_backward_if(f, l, even);
if ( ! equal(it, f)) {
    print(source(predecessor(it)));
}
`

,max_element: 
`function max_element(f, l, r) {
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

var d = sequence(array_random(), "d", lt, true);

var f = begin(d);
var l = end(d);

f = max_element(f, l, lt);
if ( ! equal(f, l)) {
    print("The max element is: " + source(f));
}`

,min_element: 
`function min_element(f, l, r) {
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

var d = sequence(array_random(), "d", true);

var f = begin(d);
var l = end(d);

f = min_element(f, l, lt);
if ( ! equal(f, l)) {
    print("The min element is: " + source(f));
}`


,min_value: 
`function min_value(f, l, r) {
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

var d = sequence(array_random(), "d", true);

var f = begin(d);
var l = end(d);

f = min_element(f, l, lt);
if ( ! equal(f, l)) {
    print("The min element is: " + source(f));
}`


, iota: 
`function iota(f, l, start, step) {
    if ( ! start) start = 0;
    if ( ! step) step = 1;

    while ( ! equal(f, l)) {
        sink(f, start);
        start += step;
        f = successor(f);
    }
    return start;
}

var d1 = sequence(new Array(8), "d1");
var d2 = sequence(new Array(5), "d2");

var f = successor(begin(d1));
var l = predecessor(end(d1));

var r = iota(f, l);
print(r);

f = begin(d2);
l = end(d2);


r = iota(f, l, r);
print(r);`

,partition_semistable_1:
`//Nico Lomutos's partition algorithm: https://en.wikipedia.org/wiki/Quicksort#Lomuto_partition_scheme
//Code taken from: https://github.com/tao-cpp/algorithm/blob/master/include/tao/algorithm/partition/partition.hpp#L40
function find_if(f, l, p) {
    while ( ! equal(f, l) && ! p(source(f))) {
        f = successor(f)
    }
    return f;
}

function partition_semistable_1(f, l, p) {
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

var even = predicate(function even(x) { return (x & 1) == 0; });
var d = sequence(array_random(), "d", even, true);
var f = begin(d);
var l = end(d);

var p = partition_semistable_1(f, l, even);
if ( ! equal(p, l)) {
    print('partition point: ' + source(p));
}`

,partition_semistable:
`//Nico Lomutos's partition algorithm: https://en.wikipedia.org/wiki/Quicksort#Lomuto_partition_scheme
//Code taken from: https://github.com/tao-cpp/algorithm/blob/master/include/tao/algorithm/partition/partition.hpp#L58

var r = range_bounded("f", "l");
var r2 = range_bounded("j", "l");
var r3 = range_bounded("p", "l");

function partition_semistable(f, l, p) {
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

var even = predicate(function even(x) { return (x & 1) == 0; });
var d = sequence(array_random(), "d", even, true);
var f = begin(d);
var l = end(d);

var p = partition_semistable(f, l, even);
if ( ! equal(p, l)) {
    print('partition point: ' + source(p));
}`

,partition_semistable_nonempty:
`//Nico Lomutos's partition algorithm: https://en.wikipedia.org/wiki/Quicksort#Lomuto_partition_scheme
//Code taken from: https://github.com/tao-cpp/algorithm/blob/master/include/tao/algorithm/partition/partition.hpp#L91

var r = range_bounded("f", "l");
var r2 = range_bounded("j", "l");

function partition_semistable_nonempty(f, l, p) {
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

var even = predicate(function even(x) { return (x & 1) == 0; });
var d = sequence(array_random(), "d", even, true);
var f = begin(d);
var l = end(d);

partition_semistable_nonempty(f, l, even);`


,partition_copy:
`function partition_copy(f, l, r_b, r_g, p) {
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


var even = predicate(function even(x) { return (x & 1) == 0; });
var d = sequence(array_random(), "d", even, true);
var bad = sequence(new Array(size(d)), "bad");
var good = sequence(new Array(size(d)), "good");

var res = partition_copy(begin(d), end(d), begin(bad), begin(good), even);

var fg = res[0];
var fb = res[1];

print('...');`



,partition_stable_with_buffer_0:
`function partition_copy(f, l, r_b, r_g, p) {
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

function copy(f, l, o) {
    while ( ! equal(f, l)) {
        sink(o, source(f));
        o = successor(o);
        f = successor(f);
    }
}

function partition_stable_with_buffer_0(f, l, p, b) {
    var tmp = partition_copy(f, l, f, b, p);
    var tf = tmp[0];
    var ts = tmp[1];
    copy(b, ts, tf);
    return tf;
}

var even = predicate(function even(x) { return (x & 1) == 0; });
var d = sequence(array_random(), "d", even);
var buf = sequence(new Array(size(d)), "buf");

var p = partition_stable_with_buffer_0(begin(d), end(d), even, begin(buf));
if ( ! equal(p, l)) {
    print('partition point: ' + source(p));
}`


,partition_stable_forward:
`//Variation of Nico Lomutos's partition algorithm: https://en.wikipedia.org/wiki/Quicksort#Lomuto_partition_scheme
//Code taken from: https://github.com/tao-cpp/algorithm/blob/master/include/tao/algorithm/partition/partition.hpp#L58

var r = range_bounded("f", "l");
var r2 = range_bounded("j", "l");
var r3 = range_bounded("p", "l");

function partition_stable_forward(f, l, p) {
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

var even = predicate(function even(x) { return (x & 1) == 0; });
var d = sequence(array_random(), "d", even);
var f = begin(d);
var l = end(d);

var p = partition_stable_forward(f, l, even);
if ( ! equal(p, l)) {
    print('partition point: ' + source(p));
}`



,partition_point_n:
`skip_debug('half_nonnegative');
var r = range_counted("f", "n");

function half_nonnegative(n) {
    return n >> 1;
}

function partition_point_n(f, n, p) {
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

var even = predicate(function even(x) { return (x & 1) == 0; });

var d = sequence([1, 5, 1, 1, 3, 3, 3, 7, 3, 2, 6, 4], "d", even);

var p = partition_point_n(begin(d), size(d), even);
print('partition point: ' + source(p));`


,make_heap_n_naive_0:
`skip_debug('source_i');
var r = range_counted("f", "n");

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

function make_heap_n_naive(f, n) {
    var i = Math.floor(n / 2) - 1;
    for (; i >= 0; --i) {
        shift_down(f, i, n);
    }
}

var s = sequence(array_random(), "s");
// var s = sequence([24, 88, 59, 31, 91, 0, 87, 91, 40, 52], "s");

print(s);
make_heap_n_naive(begin(s), size(s));
print(s);`



,make_heap_n_naive_1:
`skip_debug('source_i');
var r = range_counted("f", "n");

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

function make_heap_n_naive(f, n) {
    var i = Math.floor(n / 2) - 1;
    for (; i >= 0; --i) {
        shift_down(f, i, n);
    }
}

var s = sequence(array_random(), "s");
// var s = sequence([24, 88, 59, 31, 91, 0, 87, 91, 40, 52], "s");

print(s);
make_heap_n_naive(begin(s), size(s));
print(s);`

,make_heap_n:
`var r = range_counted("f", "n");
function parent(i) {
    return Math.floor((i - 1) / 2);    
}

function push_heap_n(f, n) {
    var ci = n - 1;
    while (true) {
        var pi = parent(ci);
        var c = successor(f, ci);
        var p = successor(f, pi);
        var cv = source(c);
        var pv = source(p);

        if (pv <= cv) break;
        sink(p, cv);
        sink(c, pv);

        if (pi == 0) break;
        ci = pi;
    }
}

function make_heap_n(f, n) {
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

// var s = sequence(array_random(), "s");
var s = sequence([24, 88, 59, 31, 91, 0, 87, 91, 40, 52], "s");

print(s);
make_heap_n(begin(s), size(s));
print(s);`




,select_1_3:
`// Median of 3

function select_1_2(a, b, r) {
    return r(b, a) ? a : b;
}

function select_1_3_ab(a, b, c, r) {
    // precondition: a <= b
    
    return ! r(c, b) ? 
                b :                  // a, b, c are sorted
                select_1_2(a, c, r); // b is not the median
}

function select_1_3(a, b, c, r) {
    return r(b, a) ? 
              select_1_3_ab(b, a, c, r) 
            : select_1_3_ab(a, b, c, r);
}

var tmp = array_random(3);
var a = tmp[0];
var b = tmp[1];
var c = tmp[2];

var m = select_1_3(a, b, c, lt);
print(m);`


,gcd:
`skip_debug('remainder');
function remainder(a, b) {
    return a % b;
}

function gcd(a, b) {
    while (b != 0) {
        var r = remainder(a, b);
        a = b;
        b = r;
    }
    return a;
}

var a = random_int();
var b = random_int();

var g = gcd(a, b);
print(g);`


, equal: 
`function equal_r(f, l, f2, r) {
    while ( ! equal(f, l)) {
        if ( ! r(source(f), source(f2))) {
            return false;
        }

        f = successor(f);
        f2 = successor(f2);
    }
    return true;
}

var d1_raw = ['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'];
var d2_raw = ['e', 'v', 'i', 't', 'x', 't', 'i', 'v', 'e'];

var d1 = sequence(d1_raw, "d1");
var d2 = sequence(d2_raw, "d2");

var f = begin(d1);
var l = end(d1);
var f2 = begin(d2);

var res = equal_r(f, l, f2, eq);
print(res);`


, palindrome_naive:
`function equal_r(f, l, f2, r) {
    while ( ! equal(f, l)) {
        if ( ! r(source(f), source(f2))) {
            return false;
        }

        f = successor(f);
        f2 = successor(f2);
    }
    return true;
}

function palindrome_naive(seq_arr, r) {
    var seq = sequence(seq_arr, "seq");
    var seq_arr_rev = seq_arr.slice().reverse();
    var seq_rev = sequence(seq_arr_rev, "seq_rev");

    var f = begin(seq);
    var l = end(seq);
    var f2 = begin(seq_rev);

    var res = equal_r(f, l, f2, r);

    return res;
}

//var word_arr = ['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'];
var word_arr = ['e', 'v', 'i', 'x', 'a', 't', 'i', 'v', 'e'];

var res = palindrome_naive(word_arr, eq);
if (res) {
    print('the word is palindrome');
} else {
    print('the word not is palindrome');
};`



, palindrome_forward_recursive:
`var r = range_counted("f", "n");
function palindrome_forward_recursive(f, n, r) {
    if (n == 0) return [true, f];
    if (n == 1) return [true, successor(f)];

    var ret = palindrome_forward_recursive(successor(f), n - 2, r);
    var ret_first = ret[0];
    var f2 = ret[1];

    if ( ! ret_first) return ret;
    if ( ! r(source(f), source(f2))) return [false, f2];

    return [true, successor(f2)];
}

function palindrome_forward(f, n, r) {
    return palindrome_forward_recursive(f, n, r)[0];
}

var word = sequence(['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'], "word");
// var word = sequence(['e', 'v', 'i', 'x', 'a', 't', 'i', 'v', 'e'], "word");

var f = begin(word);
var n = size(word);

var res = palindrome_forward(f, n, eq);


if (res[0]) {
    print('the word is palindrome');
} else {
    print('the word not is palindrome');
};`




, palindrome_bidirectional:
`function palindrome_bidirectional(f, l, r) {
    while (true) {
        if (equal(f, l)) break;
        l = predecessor(l);

        if ( ! r(source(f), source(l))) return false;

        f = successor(f);
        if (equal(f, l)) break;
    }
    return true;
}

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
};`



,swap_ranges:
`function swap_ranges(f0, l0, f1) {
    while ( ! equal(f0, l0)) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
    }
    return f1; 
}

var s1 = sequence(array_random(), "s1");
var s2 = sequence(array_random(), "s2");

var r = swap_ranges(begin(s1), end(s1), begin(s2));
print('...');`


,swap_ranges_bounded:
`function swap_ranges_bounded(f0, l0, f1, l1) {
    while ( ! equal(f0, l0) && ! equal(f1, l1)) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
    } 
    return [f0, f1];
}

var s1 = sequence(array_random(), "s1");
var s2 = sequence(array_random(5), "s2");

var r = swap_ranges_bounded(begin(s1), end(s1), begin(s2), end(s2));
var f0 = r[0];
var f1 = r[1];
print('...');`



,swap_ranges_n:
`var r0 = range_counted("f0", "n");
var r1 = range_counted("f1", "n");
function swap_ranges_n(f0, f1, n) {
    while (n != 0) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
        --n;
    }
    return [f0, f1];
}

var s1 = sequence(array_random(), "s1");
var s2 = sequence(array_random(5), "s2");

var r = swap_ranges_n(begin(s1), begin(s2), 5);
var f0 = r[0];
var f1 = r[1];
print('...');`


,reverse_n_indexed:
`var r = range_counted("f", "n");

function reverse_n_indexed(f, n) {
    var i = 0;
    --n;
    while (i < n) {
        iter_swap(successor(f, i), successor(f, n)); 
        ++i;
        --n;
    } 
}

var s = sequence(array_random(), "s1");
print(s);
reverse_n_indexed(begin(s), size(s));
print(s);
print('...');`



,reverse_bidirectional:
`var r = range_bounded("f", "l");

function reverse_bidirectional(f, l) {

    while (true) {
        if (equal(f, l)) return;
        l = predecessor(l);
        if (equal(f, l)) return;
        iter_swap(f, l);
        f = successor(f);        
    }
}

var s = sequence(array_random(), "s1");
print(s);
reverse_bidirectional(begin(s), end(s));
print(s);
print('...');`

,reverse_n_forward:
`skip_debug('half_nonnegative');
skip_debug('twice');
skip_debug('swap_ranges_n');
var r = range_counted("f", "n");

function half_nonnegative(n) {return n >> 1;}
function twice(n) {return n + n;}

function swap_ranges_n(f0, f1, n) {
    while (n != 0) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
        --n;
    }
    return [f0, f1];
}

function reverse_n_forward(f, n) {
    if (n < 2) return successor(f, n);
    var h = half_nonnegative(n);
    var n_mod_2 = n - twice(h);

    var m = successor(reverse_n_forward(f, h), n_mod_2);
    var l = reverse_n_forward(m, h);

    swap_ranges_n(f, m, h);
    return l;
}

var s = sequence(array_random(), "s1");
print(s);
var r = reverse_n_forward(begin(s), size(s));
print(s);
print('...');`


,reverse_copy:
`//var r = range_counted("f", "n");
function reverse_copy(f_i, l_i, f_o) {
    while ( ! equal(f_i, l_i)) {
        l_i = predecessor(l_i);
        sink(f_o, source(l_i));
        f_o = successor(f_o);

    } 
    return f_o;
}

var d = sequence(array_random(), "d");
var b = sequence(new Array(size(d)), "b");

var res = reverse_copy(begin(d), end(d), begin(b));
print(d);
print(b);`


,reverse_n_with_buffer:
`//var r = range_counted("f", "n");

function copy_n(f_i, n, f_o) {
    while (n != 0) {
        sink(f_o, source(f_i));
        f_i = successor(f_i);
        f_o = successor(f_o);
        --n;
    }
    return [f_i, f_o];
}

function reverse_copy(f_i, l_i, f_o) {
    while ( ! equal(f_i, l_i)) {
        l_i = predecessor(l_i);
        sink(f_o, source(l_i));
        f_o = successor(f_o);

    } 
    return f_o;
}

function reverse_n_with_buffer(f_i, n, f_b) {
    return reverse_copy(f_b, copy_n(f_i, n, f_b)[1], f_i);
}

var s = sequence(array_random(), "s");
var b = sequence(new Array(size(s)), "b");
print(s);
var r = reverse_n_with_buffer(begin(s), size(s), begin(b));
print(s);`

,reverse_n_adaptive:
`skip_debug('half_nonnegative');
skip_debug('twice');
skip_debug('swap_ranges_n');
skip_debug('copy_n');
skip_debug('reverse_copy');
skip_debug('reverse_n_with_buffer');
var r = range_counted("f_i", "n_i");

function half_nonnegative(n) {return n >> 1;}
function twice(n) {return n + n;}

function swap_ranges_n(f0, f1, n) {
    while (n != 0) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
        --n;
    }
    return [f0, f1];
}

function copy_n(f_i, n, f_o) {
    while (n != 0) {
        sink(f_o, source(f_i));
        f_i = successor(f_i);
        f_o = successor(f_o);
        --n;
    }
    return [f_i, f_o];
}

function reverse_copy(f_i, l_i, f_o) {
    while ( ! equal(f_i, l_i)) {
        l_i = predecessor(l_i);
        sink(f_o, source(l_i));
        f_o = successor(f_o);

    } 
    return f_o;
}

function reverse_n_with_buffer(f_i, n, f_b) {
    return reverse_copy(f_b, copy_n(f_i, n, f_b)[1], f_i);
}

function reverse_n_adaptive(f_i, n_i, f_b, n_b) {
    if (n_i < 2) return successor(f_i, n_i);
    if (n_i <= n_b) return reverse_n_with_buffer(f_i, n_i, f_b);

    var h_i = half_nonnegative(n_i);
    var n_mod_2 = n_i - twice(h_i);
    var m_i = successor(reverse_n_adaptive(f_i, h_i, f_b, n_b), n_mod_2);
    var l_i = reverse_n_adaptive(m_i, h_i, f_b, n_b);

    swap_ranges_n(f_i, m_i, h_i);
    return l_i;

}

var s = sequence(array_random(16), "s");
//var b = sequence(new Array(size(s)), "b");
var b = sequence(new Array(4), "b");
print(s);
var r = reverse_n_adaptive(begin(s), size(s), begin(b), size(b));
print(s);`



,rotate_bidirectional:
`var r0 = range_bounded("f", "m");
var r1 = range_bounded("m", "l");

function reverse(f, l) {
    while (true) {
        if (equal(f, l)) return;
        l = predecessor(l);
        if (equal(f, l)) return;
        iter_swap(f, l);
        f = successor(f);        
    }
}

function rotate_bidirectional(f, m, l) {
    reverse(f, m);
    reverse(m, l);
    reverse(f, l);
}
var s = sequence(array_random(), "s");
print(s);
rotate_bidirectional(begin(s), successor(begin(s), 3), end(s));
print(s);
print('...');`



,rotate_random_access:
`skip_debug("k_rotate_from_permutation_random_access");
skip_debug("remainder");
skip_debug("gcd");

function remainder(a, b) {
    return a % b;
}

function gcd(a, b) {
    while (b != 0) {
        var r = remainder(a, b);
        a = b;
        b = r;
    }
    return a;
}

function cycle_from(i, f) {
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

function rotate_cycles(f, m, l, from) {
    var d = gcd(distance(f, m), distance(m, l));

    while (d != 0) {
        --d;
        cycle_from(successor(f, d), from);
    }
    return successor(f, distance(m, l));
}

function k_rotate_from_permutation_random_access(f, m, l) {
    var k = distance(m, l);
    var n_minus_k = distance(f, m);
    var m_prime = successor(f, distance(m, l));

    return function(x) {
        if ( distance(x, m_prime) > 0) return successor(x, n_minus_k);
        return predecessor(x, k);
    };
}

function rotate_random_access_nontrivial(f, m, l) {
    var p = k_rotate_from_permutation_random_access(f, m, l);
    return rotate_cycles(f, m, l, p);
}

var s = sequence(array_random(12), "s");
print(s);
rotate_random_access_nontrivial(begin(s), successor(begin(s), 3), end(s));
print(s);
print('...');`





,insert_naive:
`function copy_backward(f_i, l_i, l_o) {
    while ( ! equal(f_i, l_i)) {
        // copy_backward_step(l_i, l_o);
        l_i = predecessor(l_i);
        l_o = predecessor(l_o);
        sink(l_o, source(l_i));
    } 
    return l_o;
}
function shift_right_by_one(f, l) {
    if (equal(f, l)) return;
    copy_backward(f, predecessor(l), l);
}

function insert_naive(s, ip, f, l) {
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

var s = sequence(array_random(), "s");
var i = sequence(array_random(5), "i");

print(s);
print(i);
s = insert_naive(s, begin(s), begin(i), end(i));
print(s);
print('...');`



,insert:
`function reverse(f, l) {
    while (true) {
        if (equal(f, l)) return;
        l = predecessor(l);
        if (equal(f, l)) return;
        iter_swap(f, l);
        f = successor(f);        
    }
}

function rotate(f, m, l) {
    reverse(f, m);
    reverse(m, l);
    reverse(f, l);
}

function insert(s, ip, f, l) {
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

var s = sequence(array_random(), "s");
var i = sequence(array_random(5), "i");

print(s);
print(i);
s = insert(s, begin(s), begin(i), end(i));
print(s);
print('...');`


,insertion_sort_classic_0:
`var r = range_bounded("f", "l");

function linear_insert(f, c, r) {
  var value = source(c);
  while ( ! equal(f, c) && r(value, source(predecessor(c)))) {
    sink(c, source(predecessor(c)));
    c = predecessor(c);
  }
  sink(c, value); 
  return c;
}

function insertion_sort_classic_0(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);     
        c = successor(c);
    }
}
  
//var s = sequence(array_random(), "s", lt);
var s = sequence([34, 5], "s", lt);
print(s);
insertion_sort_classic_0(begin(s), end(s), lt);
print(s);`


,insertion_sort_classic_1:
`var r = range_bounded("f", "l");

function shift_right_while(f, l, p) {
    while ( ! equal(f, l) && p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
    }
    return l;
}

function linear_insert(f, c, r) {
    var value = source_move(c);
    c = shift_right_while(f, c, bind(r, value));
    sink_move(c, value);
    return c;
}

function insertion_sort_classic_1(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}
  
var s = sequence(array_random(), "s", lt);
print(s);
insertion_sort_classic_1(begin(s), end(s), lt);
print(s);`



,insertion_sort_classic_2:
`var r = range_bounded("f", "l");

function shift_right_while_nonempty(f, l, p) {
    //precondition: ! equal(f, l)
    while (p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
        if (equal(f, l)) break;
    }
    return l;
}

function linear_insert(f, c, r) {
    var value = source_move(c);
    c = shift_right_while_nonempty(f, c, bind(r, value));
    sink_move(c, value);
    return c;
}

function insertion_sort_classic_2(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}
  
var s = sequence(array_random(), "s", lt);
print(s);
insertion_sort_classic_2(begin(s), end(s), lt);
print(s);`




,insertion_sort_classic_3:
`var r = range_bounded("f", "l");

function linear_insert(f, c, r) {
    if ( ! r(source(c), source(predecessor(c)))) return c;

    var value = source_move(c);
    while (true) {
        sink_move(c, source(predecessor(c)));
        c = predecessor(c);
        
        if (equal(f, c)) break;
        if ( ! r(value, source(predecessor(c)))) break;
    }
    sink_move(c, value);
    return c;
}

function insertion_sort_classic_3(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}
  
var s = sequence(array_random(), "s", lt);
print(s);
insertion_sort_classic_3(begin(s), end(s), lt);
print(s);`


,insertion_sort_classic:
`var r = range_bounded("f", "l");

register_custom_stat("Misplaced elements");

function shift_right_while(f, l, p) {
    while ( ! equal(f, l) && p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
    }
    return l;
}

function linear_insert(f, c, r) {
    if ( ! call(r, c, predecessor(c))) return c;

    increment_custom_stat("Misplaced elements");

    var value = source_move(c);
    sink_move(c, source(predecessor(c)));
    var d = shift_right_while(f, predecessor(c), bind(r, value));
    sink_move(d, value);

    register_move_distance(distance(d, c));
    return d;
}

function insertion_sort_classic(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}
  
// var s = sequence(array_random(), "s", lt);
var s = sequence(array_descending(), "s", lt);

print(s);
insertion_sort_classic(begin(s), end(s), lt);
print(s);`


,insertion_sort:
`var r = range_bounded("f", "l");
register_custom_stat("Misplaced elements");

function linear_insert_unguarded(c, r) {
    if ( ! call(r, c, predecessor(c))) return c;

    increment_custom_stat("Misplaced elements");

    var value = source_move(c);
    var d = shift_right_while_unguarded(c, bind(r, value));
    sink_move(d, value);
    register_move_distance(distance(d, c));
    return d;
}

function insertion_sort_suffix_nonempty(f, l, r) {
    //precondition: ! equal(f, l) 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert_unguarded(c, r);     
        c = successor(c);
    }
}

function insertion_sort(f, l, r) {
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
  
// var s = sequence([1, 2, 3, 4, 5], "s", lt);
// var s = sequence([1, 2], "s", lt);

// var s = sequence(array_random(), "s", lt);
// var s = sequence(array_all_equal(), "s", lt);
// var s = sequence(array_ascending(), "s", lt);
var s = sequence(array_descending(), "s", lt);

print(s);
insertion_sort(begin(s), end(s), lt);
print(s);`



,insertion_sort_backward:
`var r = range_bounded("f", "l");

function linear_insert_backward(c, l, r) {
  var value = source(c);
  c = successor(c);
  while ( ! equal(c, l) && r(value, source(c))) {
    sink(c, source(c));
    c = successor(c);
  }
  sink(c, value); 
  return c;
}

function insertion_sort_backward(f, l, r) {
    if (equal(f, l)) return;

    r = complement(r);
    var c = predecessor(l);
    while ( ! equal(c, f)) {
        c = predecessor(c);
        linear_insert_backward(c, l, r);     
    }
}
  
// var s = sequence(array_random(), "s", lt);
// var s = sequence([81, 28, 20, 67, 36, 84, 86, 48, 34, 5], "s", lt);
var s = sequence([34, 5], "s", lt);

print(s);
insertion_sort_backward(begin(s), end(s), lt);
print(s);`




,selection_sort_classic:
`//Unstable selection sort

var r = range_bounded("f", "l");

function selection_sort_classic(f, l, r) {
    // postcondition: is_sorted(f, l, r)
    while ( ! equal(f, l)) {
        var m = min_element(f, l, r);
        iter_swap(f, m);
        f = successor(f);
    }
}
  
var s = sequence(array_random(), "s", lt);

print(s);
selection_sort_classic(begin(s), end(s), lt);
print(s);
print(is_sorted(begin(s), end(s), lt));
`


,selection_sort_stable:
`//Stable selection sort

var r = range_bounded("f", "l");

function move_backward(f_i, l_i, l_o) {
    while (! equal(f_i, l_i)) {
        //move_backward_step(l_i, l_o);
        l_i = predecessor(l_i);
        l_o = predecessor(l_o);
        sink_move(l_o, source(l_i));
    } 
    return l_o;
}

function rotate_right_by_one(f, l) {
    if (equal(f, l)) return;
    var butlast = predecessor(l);
    var x = source_move(butlast);
    move_backward(f, butlast, l);
    sink_move(f, x);
}

function selection_sort_stable(f, l, r) {
    while (! equal(f, l)) {
        var m = min_element(f, l, r);
        rotate_right_by_one(f, successor(m));
        f = successor(f);
    }
}
  
var s = sequence(array_random(), "s", lt);
print(s);
selection_sort_stable(begin(s), end(s), lt);
print(s);`
};


// ----------------------------------------

const acorn = require("acorn")
const fs = require('fs');

function function_content(code, start, end) {
    return code.substring(start, end);
}

function indent_code(code, n) {
    if (!n) n = 4;
    var res = [];
    var lines = code.split('\n');
    for(var i = 0; i < lines.length; ++i) {
        var line = " ".repeat(n) + lines[i] + '\n';
        res.push(line);
    }
    return res.join('');
}

function process_node(snippet_name, code, root) {
    // console.log(root);

    var last_function_index = 0;
    var file_content = '';

    for (var n in root.body) {
        // console.log(n, root.body[n]);
        const node = root.body[n];
        if (node.type == 'FunctionDeclaration') {
            var fname = node.id.name;
            const func_code = function_content(code, node.start, node.end);

            file_content += func_code;
            file_content += '\n\n';

            if (node.end > last_function_index) {
                last_function_index = node.end;
            }
        }
        // } else {
        //     console.log(value);
        // }
    }

    console.log(`last_function_index = ${last_function_index}`);

    var extra_code = 'function usage() {\n'+ indent_code(code.substring(last_function_index, root.end)) + '\n}\n\n';
    extra_code += 'function attributes() {\n\n}\n\n'
    // console.log(extra_code);

    var all_code = file_content + extra_code;

    fs.writeFile(`./algorithms/${snippet_name}.js`, all_code, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(`./algorithms/${snippet_name}.js  was saved!`);
    });


}

for (var s in snippets) {
    // console.log(s, snippets[s]);
    var code = snippets[s];

    var p = acorn.parse(code);
    // console.log(p);
    process_node(s, code, p);

    // console.log(p.body);

    // for (var n in p.body) {
    //     console.log(n, p.body[n]);
    //     const value = p.body[n];
    //     if (value.type == 'FunctionDeclaration') {
    //     } else {
    //         console.log(value);
    //     }

    // }

    // break;
}