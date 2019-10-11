function copy(f, l, o) {
    while ( ! equal(f, l)) {
        sink(o, source(f));
        o = successor(o);
        f = successor(f);
    }
}

function usage() {

}

function attributes() {

}
