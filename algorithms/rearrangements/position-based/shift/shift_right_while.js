function shift_right_while(f, l, p) {
    while ( ! equal(f, l) && p(source(predecessor(l)))) {
        sink_move(l, source_move(predecessor(l)));
        l = predecessor(l);
    }
    return l;
}

function usage() {

}

function attributes() {

}
