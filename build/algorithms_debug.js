function __debug_max_element(f, l, r) {
    if (equal(f, l)) return l;

    var m = f;
    f = successor(f);

    while ( ! equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function max_element(f, l, r) {
    var _f_ = start_f('max_element', f, l, r);
    var res = __debug_max_element(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_min_element(f, l, r) {
    if (equal(f, l)) return l;

    var m = f;
    f = successor(f);

    while ( ! equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function min_element(f, l, r) {
    var _f_ = start_f('min_element', f, l, r);
    var res = __debug_min_element(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_min_element_nonempty(f, l, r) {
    var m = f;
    f = successor(f);

    while ( ! equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function min_element_nonempty(f, l, r) {
    var _f_ = start_f('min_element_nonempty', f, l, r);
    var res = __debug_min_element_nonempty(f, l, r);
    end_f(_f_);
    return res;
}

