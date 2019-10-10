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

function usage() {
    
    var s = sequence(array_random(), "s");
    print(s);
    rotate_bidirectional(begin(s), successor(begin(s), 3), end(s));
    print(s);
    print('...');

}

function attributes() {

}

