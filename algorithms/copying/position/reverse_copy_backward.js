function reverse_copy_backward(f, l, o) {
    while ( ! equal(f, l)) {
        o = predecessor(o);
        sink(o, source(f));
        f = successor(f);
    }
    return o;
}

function usage() {

    var s = sequence(array_ascending(), "s");
    var z = sequence(array_descending(), "z");

    reverse_copy_backward(successor(begin(s), 5), end(s), end(z));

    print(z);
}

function attributes() {

}
