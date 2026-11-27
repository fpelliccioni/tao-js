function insert_naive<T, K extends SequenceKind>(s: Seq<T | number, K>, ip: Iter<T | number>, f: Iter<T>, l: Iter<T>) {
    let d = distance(begin(s), ip);

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

function __insert_naive_usage() {
    let s = sequence(array_random(), "s");
    const i = sequence(array_random(5), "i");

    print(s);
    print(i);
    s = insert_naive(s, begin(s), begin(i), end(i));
    print(s);
    print('...');
}

function __insert_naive_attributes() {
}
