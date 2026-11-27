function shift_right_while<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    while ( ! equal(f, l) && p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
    }
    return l;
}

function __shift_right_while_usage() {
}

function __shift_right_while_attributes() {
}
