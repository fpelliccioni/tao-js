function copy_backward_n(f, n, o) {
    while (n != 0) {
        l = predecessor(l);
        o = predecessor(o);
        --n;
        sink(o, source(f));
    }
    return [f, o];
}

function usage() {

    var s = sequence(array_ascending(), "s");
    var z = sequence(array_descending(), "z");

    copy_backward_n(end(s), 5, end(z));

    print(z);
}

function attributes() {

}

