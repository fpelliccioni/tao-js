function insert<T, K extends SequenceKind>(s: Seq<T, K>, ip: Iter<T>, f: Iter<T>, l: Iter<T>) {
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
    let s = seq(array_random());
    const i = seq(array_random(5));

    s = insert(s, begin(s), begin(i), end(i));
    print(s);
}

function __insert_attributes() {
}
