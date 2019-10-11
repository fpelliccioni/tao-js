function linear_insert(f, c, r) {
    var value = source_move(c);
    c = shift_right_while_nonempty(f, c, bind(r, value));
    sink_move(c, value);
    return c;
}

function insertion_sort_classic_2(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function usage() {
    
      
    var s = sequence(array_random(), "s", lt);
    print(s);
    insertion_sort_classic_2(begin(s), end(s), lt);
    print(s);

}

function attributes() {

}

