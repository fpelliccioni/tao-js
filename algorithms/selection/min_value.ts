function min_value<I extends Iter<unknown>>(f: I, l: I, r: Relation<ValueOf<I>>): I {
    //precondition: ! equal(f, l)) return l;

    let m = f;
    f = successor(f);

    while ( ! equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function __min_value_usage() {
    const d = seq(array_random());

    const [f, l] = rng(d);

    const result = min_value(f, l, lt);
    if ( ! equal(result, l)) {
        const minimum = source(result);
        print("The min element is: " + minimum);
    }

}

function __min_value_attributes() {
}
