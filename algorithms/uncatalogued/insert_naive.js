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

