function rotate_right_by_one_nonempty<T>(f: Iter<T>, l: Iter<T>) {
    const butlast = predecessor(l);
    const x = source_move(butlast);
    move_backward(f, butlast, l);
    sink_move(f, x);
}

function __rotate_right_by_one_nonempty_usage() {
}

function __rotate_right_by_one_nonempty_attributes() {
}
