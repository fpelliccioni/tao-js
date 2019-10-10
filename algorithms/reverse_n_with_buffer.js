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

function usage() {
    
    
    var s = sequence(array_random(), "s");
    var b = sequence(new Array(size(s)), "b");
    print(s);
    var r = reverse_n_with_buffer(begin(s), size(s), begin(b));
    print(s);

}

function attributes() {

}

