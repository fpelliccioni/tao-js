function shift_right_by_one<T>(f: Iter<T>, l: Iter<T>) {
    if (equal(f, l)) return;
    copy_backward(f, predecessor(l), l);
}


function __shift_right_by_one_usage() {
}

function __shift_right_by_one_attributes() {
}
