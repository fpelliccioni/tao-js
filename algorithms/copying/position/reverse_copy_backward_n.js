function reverse_copy_backward_n(f, n, o) {
    while (n != 0) {
        o = predecessor(o);
        sink(o, source(f));
        f = successor(f);
        --n;
    }
    return [f, o];
}

function usage() {

    var s = sequence(array_ascending(), "s");
    var z = sequence(array_descending(), "z");

    reverse_copy_backward_n(successor(begin(s), 5), 5, end(z));

    print(z);
}

function attributes() {

}
