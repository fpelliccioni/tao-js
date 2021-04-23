function shift_right_while_unguarded(f, l, p) {
    while (p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
    }
    return l;
}

function usage() {

}

function attributes() {

}
