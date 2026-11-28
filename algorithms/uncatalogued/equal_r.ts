function equal_r<T>(f: Iter<T>, l: Iter<T>, f2: Iter<T>, r: Relation<T>) {
    while ( ! equal(f, l)) {
        if ( ! r(source(f), source(f2))) {
            return false;
        }

        f = successor(f);
        f2 = successor(f2);
    }
    return true;
}

function __equal_r_usage() {
    const d1_raw = ['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'];
    const d2_raw = ['e', 'v', 'i', 't', 'x', 't', 'i', 'v', 'e'];

    const d1 = seq(d1_raw);
    const d2 = seq(d2_raw);

    const [f, l] = rng(d1);
    const f2 = begin(d2);

    const res = equal_r(f, l, f2, eq);
    print(res);

}

function __equal_r_attributes() {
}
