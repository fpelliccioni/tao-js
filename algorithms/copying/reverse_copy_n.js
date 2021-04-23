function reverse_copy_n(l, n, o) {
    while (n != 0) {
        l = predecessor(l);
        sink(o, source(l));
        o = successor(o);
        --n;
    }
    return [l, o];
}

function usage() {

    var s = sequence(array_ascending(), "s");
    var z = sequence(array_descending(), "z");

    reverse_copy_n(successor(begin(s), 5), 5, begin(z));

    print(z);
}

function attributes() {

}
