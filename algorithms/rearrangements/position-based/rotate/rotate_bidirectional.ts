// Reference: Elements of Programming, ch. 10, pp. 179–180 (three-reversal variant).

function rotate_bidirectional<T>(f: Iter<T>, m: Iter<T>, l: Iter<T>) {
    reverse(f, m);
    reverse(m, l);
    reverse(f, l);
}

function __rotate_bidirectional_usage() {
    const s = sequence(array_random(), "s");
    print(s);
    rotate_bidirectional(begin(s), successor(begin(s), 3), end(s));
    print(s);
    print('...');
}

function __rotate_bidirectional_attributes() {
}
