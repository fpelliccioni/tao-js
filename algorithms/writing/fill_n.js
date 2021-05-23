function fill_n(f, n, x) {
    while (n != 0) {
        sink(f, x);
        f = successor(f);
        --n;
    }
}

function usage() {

    var s = sequence(new Array(10), "s");
    fill_n(begin(s), size(s), '?');
    print(s);
}

function attributes() {

}

