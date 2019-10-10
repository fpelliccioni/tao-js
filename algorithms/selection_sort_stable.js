function move_backward(f_i, l_i, l_o) {
    while (! equal(f_i, l_i)) {
        //move_backward_step(l_i, l_o);
        l_i = predecessor(l_i);
        l_o = predecessor(l_o);
        sink_move(l_o, source(l_i));
    } 
    return l_o;
}

function rotate_right_by_one(f, l) {
    if (equal(f, l)) return;
    var butlast = predecessor(l);
    var x = source_move(butlast);
    move_backward(f, butlast, l);
    sink_move(f, x);
}

function selection_sort_stable(f, l, r) {
    while (! equal(f, l)) {
        var m = min_element(f, l, r);
        rotate_right_by_one(f, successor(m));
        f = successor(f);
    }
}

function usage() {
    
      
    var s = sequence(array_random(), "s", lt);
    print(s);
    selection_sort_stable(begin(s), end(s), lt);
    print(s);

}

function attributes() {

}

