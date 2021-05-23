function fill(f, l, x) {
    while ( ! equal(f, l)) {
        sink(f, x);
        f = successor(f);
    }
}

function usage() {

    var s = sequence(new Array(10), "s");
    fill(begin(s), end(s), '?');
    print(s);
}

function attributes() {

}
