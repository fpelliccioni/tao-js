function insert<T>(s: Seq<T>, ip: Iter<T>, f: Iter<T>, l: Iter<T>) {
    let d = distance(begin(s), ip);
    const ld = distance(ip, end(s));

    while ( ! equal(f, l)) {
        s = push_back(s, source(f));
        f = successor(f);
        ++d;
    }

    rotate_bidirectional(begin(s), successor(begin(s), ld), end(s));

    return s;
}

function __insert_usage() {
    let s = sequence(array_random(), "s");
    const i = sequence(array_random(5), "i");

    print(s);
    print(i);
    s = insert(s, begin(s), begin(i), end(i));
    print(s);
    print('...');
}

function __insert_attributes() {
}
