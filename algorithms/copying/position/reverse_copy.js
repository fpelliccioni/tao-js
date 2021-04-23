function reverse_copy(f, l, o) {
    while ( ! equal(f, l)) {
        l = predecessor(l);
        sink(o, source(l));
        o = successor(o);
    }
    return o;
}

function usage() {

    var s = sequence(array_ascending(), "s");
    var z = sequence(array_descending(), "z");

    reverse_copy(successor(begin(s), 5), end(s), begin(z));

    print(z);
}

function attributes() {

}
