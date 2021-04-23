function rotate_right_by_one_nonempty(f, l) {
    var butlast = predecessor(l);
    var x = source_move(butlast);
    move_backward(f, butlast, l);
    sink_move(f, x);
}

function usage() {
}

function attributes() {

}

