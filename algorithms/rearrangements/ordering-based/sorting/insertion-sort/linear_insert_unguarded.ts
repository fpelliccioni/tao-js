function linear_insert_unguarded<T>(c: Iter<T>, r: Relation<T>) {
    if ( ! call(r, c, predecessor(c))) return c;

    increment_custom_stat("Misplaced elements");

    const value = source_move(c);
    const d = shift_right_while_unguarded(c, bind(r, value));
    sink_move(d, value);
    register_move_distance(distance(d, c));
    return d;
}

function __linear_insert_unguarded_usage() {
    register_custom_stat("Misplaced elements");
}

function __linear_insert_unguarded_attributes() {
}
