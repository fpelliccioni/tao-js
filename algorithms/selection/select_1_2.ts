// Reference: Elements of Programming, ch. 4, p. 51.

function select_1_2<T>(a: T, b: T, r: Relation<T>) {
    return r(b, a) ? a : b;
}

function __select_1_2_usage() {
    const tmp = array_random(3);
    const a = tmp[0];
    const b = tmp[1];

    const m = select_1_2(a, b, lt);
    print(m);
}

function __select_1_2_attributes() {
}
