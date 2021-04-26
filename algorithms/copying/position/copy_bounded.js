function copy_bounded(f, l, fo, lo) {
    while ( ! equal(f, l) && ! equal(fo, lo)) {
        sink(fo, source(f));
        fo = successor(fo);
        f = successor(f);
    }
    return [f, fo];
}

function usage() {

    var s = sequence(array_ascending(), "s");
    var z = sequence(array_descending(), "z");

    var res = copy_bounded(successor(begin(s), 5), end(s), begin(z), end(z));
    var f1 = res[0];
    var f2 = res[1];

    print(z);
}

function attributes() {

}
