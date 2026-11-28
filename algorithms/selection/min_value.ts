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

    let f = begin(d);
    const l = end(d);

    f = min_value(f, l, lt);
    if ( ! equal(f, l)) {
        const minimum = source(f);
        print("The min element is: " + minimum);
    }

}

function __min_value_attributes() {
}
