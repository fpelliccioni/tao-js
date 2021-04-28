function exchange_values_2(x, y) {
    var t = source(x);
    sink(x, source(y));
    sink(y, t);

    increment_assignment_stat(); // we have to count 3 assignments
    increment_swap_stat(); // we need to count a swap
}

function usage() {

    var s = sequence(array_ascending(), "s");

    exchange_values_2(begin(s), successor(begin(s), 5));

    print(s);
}

function attributes() {

}
