// Reference: Elements of Programming, ch. 9, p. 162 (instrumented variant of exchange_values).

function exchange_values_2<T>(x: Iter<T>, y: Iter<T>) {
    const t = source(x);
    sink(x, source(y));
    sink(y, t);

    increment_assignment_stat(); // we have to count 3 assignments
    increment_swap_stat(); // we need to count a swap
}

function __exchange_values_2_usage() {
    const s = seq(array_ascending());

    exchange_values_2(begin(s), successor(begin(s), 5));

    print(s);
}

function __exchange_values_2_attributes() {
}
