function copy_n(f, n, o) {
    while (n != 0) {
        sink(o, source(f));
        f = successor(f);
        o = successor(o);
        --n;
    }
    return [f, o];
}

function usage() {

    var s = sequence(array_ascending(), "s");
    var z = sequence(array_descending(), "z");

    copy_n(begin(s), 5, begin(z));

    print(z);
}

function attributes() {

}

