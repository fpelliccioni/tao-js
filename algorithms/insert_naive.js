function copy_backward(f_i, l_i, l_o) {
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

function usage() {
    
    
    var s = sequence(array_random(), "s");
    var i = sequence(array_random(5), "i");
    
    print(s);
    print(i);
    s = insert_naive(s, begin(s), begin(i), end(i));
    print(s);
    print('...');

}

function attributes() {

}

