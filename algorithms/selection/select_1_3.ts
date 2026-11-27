function select_1_3<T>(a: T, b: T, c: T, r: Relation<T>) {
    return r(b, a) ?
              select_1_3_ab(b, a, c, r)
            : select_1_3_ab(a, b, c, r);
}

function __select_1_3_usage() {
    const tmp = array_random(3);
    const a = tmp[0];
    const b = tmp[1];
    const c = tmp[2];

    const m = select_1_3(a, b, c, lt);
    print(m);
}

function __select_1_3_attributes() {
}
