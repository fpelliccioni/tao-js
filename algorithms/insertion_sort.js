function insertion_sort(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    if (equal(c, l)) return;

    // create a sentinel
    var min = min_element_nonempty(f, l, r);
    if (! equal(min, f)) {
        rotate_right_by_one_nonempty(f, successor(min));
        increment_custom_stat("Misplaced elements");
        register_move_distance(distance(f, min));
    }
    insertion_sort_suffix_nonempty(c, l, r);
}

function usage() {
    function linear_insert_unguarded(c, r) {
        if ( ! call(r, c, predecessor(c))) return c;
    
        increment_custom_stat("Misplaced elements");
    
        var value = source_move(c);
        var d = shift_right_while_unguarded(c, bind(r, value));
        sink_move(d, value);
        register_move_distance(distance(d, c));
        return d;
    }
    
    function insertion_sort_suffix_nonempty(f, l, r) {
        //precondition: ! equal(f, l) 
        var c = successor(f);
        while ( ! equal(c, l)) {
            linear_insert_unguarded(c, r);     
            c = successor(c);
        }
    }    
      
    // var s = sequence([1, 2, 3, 4, 5], "s", lt);
    // var s = sequence([1, 2], "s", lt);
    
    // var s = sequence(array_random(), "s", lt);
    // var s = sequence(array_all_equal(), "s", lt);
    // var s = sequence(array_ascending(), "s", lt);
    var s = sequence(array_descending(), "s", lt);
    
    print(s);
    insertion_sort(begin(s), end(s), lt);
    print(s);

}

function attributes() {

}

