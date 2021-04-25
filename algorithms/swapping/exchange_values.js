function exchange_values(x, y) {
    var t = source(x);
    sink(x, source(y));
    sink(y, t);
}

function usage() {

    var s = sequence(array_ascending(), "s");

    exchange_values(begin(s), successor(begin(s), 5));

    print(s);
}

function attributes() {

}
