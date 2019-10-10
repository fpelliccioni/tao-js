function reverse_copy(f_i, l_i, f_o) {
    while ( ! equal(f_i, l_i)) {
        l_i = predecessor(l_i);
        sink(f_o, source(l_i));
        f_o = successor(f_o);
    } 
    return f_o;
}

function usage() {
    var d = sequence(array_random(), "d");
    var b = sequence(new Array(size(d)), "b");
    
    var res = reverse_copy(begin(d), end(d), begin(b));
    print(d);
    print(b);
}

function attributes() {

}

