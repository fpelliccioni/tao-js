function insertion_sort_suffix_nonempty(f, l, r) {
    //precondition: ! equal(f, l)
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert_unguarded(c, r);
        c = successor(c);
    }
}

function usage() {
}

function attributes() {

}

