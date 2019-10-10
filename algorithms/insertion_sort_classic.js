function linear_insert(f, c, r) {
    if ( ! call(r, c, predecessor(c))) return c;

    increment_custom_stat("Misplaced elements");

    var value = source_move(c);
    sink_move(c, source(predecessor(c)));
    var d = shift_right_while(f, predecessor(c), bind(r, value));
    sink_move(d, value);

    register_move_distance(distance(d, c));
    return d;
}

function insertion_sort_classic(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function usage() {
    // var s = sequence(array_random(), "s", lt);
    var s = sequence(array_descending(), "s", lt);
    
    print(s);
    insertion_sort_classic(begin(s), end(s), lt);
    print(s);
}

function attributes() {

}

