function copy_backward(f, l, o) {
    while ( ! equal(f, l)) {
        l = predecessor(l);
        o = predecessor(o);
        sink(o, source(l));
    }
    return o;
}

function usage() {

    var s = sequence(array_ascending(), "s");
    var z = sequence(array_descending(), "z");

    copy_backward(successor(begin(s), 5), end(s), end(z));

    print(z);
}

function attributes() {

}

