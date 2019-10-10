function swap_ranges(f0, l0, f1) {
    while ( ! equal(f0, l0)) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
    }
    return f1; 
}

function usage() {
    
    
    var s1 = sequence(array_random(), "s1");
    var s2 = sequence(array_random(), "s2");
    
    var r = swap_ranges(begin(s1), end(s1), begin(s2));
    print('...');

}

function attributes() {

}

