function reverse(f, l) {
    while (true) {
        if (equal(f, l)) return;
        l = predecessor(l);
        if (equal(f, l)) return;
        iter_swap(f, l);
        f = successor(f);        
    }
}

function usage() {
    var s = sequence(array_random(), "s1");
    print(s);
    reverse(begin(s), end(s));
    print(s);
    print('...');
}

function attributes() {

}

