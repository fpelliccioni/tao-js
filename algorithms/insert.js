function reverse(f, l) {
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

function usage() {
    
    
    var s = sequence(array_random(), "s");
    var i = sequence(array_random(5), "i");
    
    print(s);
    print(i);
    s = insert(s, begin(s), begin(i), end(i));
    print(s);
    print('...');

}

function attributes() {

}

