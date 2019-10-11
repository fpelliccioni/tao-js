function selection_sort_classic(f, l, r) {
    // postcondition: is_sorted(f, l, r)
    while ( ! equal(f, l)) {
        var m = min_element(f, l, r);
        iter_swap(f, m);
        f = successor(f);
    }
}

function usage() {
    
      
    var s = sequence(array_random(), "s", lt);
    
    print(s);
    selection_sort_classic(begin(s), end(s), lt);
    print(s);
    print(is_sorted(begin(s), end(s), lt));
    

}

function attributes() {

}

