function shift_right_while_unguarded<T>(l: Iter<T>, p: Predicate<T>) {
    while (p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
    }
    return l;
}

function __shift_right_while_unguarded_usage() {
}

function __shift_right_while_unguarded_attributes() {
}
