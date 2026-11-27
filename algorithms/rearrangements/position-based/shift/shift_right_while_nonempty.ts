function shift_right_while_nonempty<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    //precondition: ! equal(f, l)
    while (p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
        if (equal(f, l)) break;
    }
    return l;
}

function __shift_right_while_nonempty_usage() {
}

function __shift_right_while_nonempty_attributes() {
}
