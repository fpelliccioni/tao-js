function swap_ranges_bounded(f0, l0, f1, l1) {
    while ( ! equal(f0, l0) && ! equal(f1, l1)) {
        iter_swap(f0, f1);
        f0 = successor(f0);
        f1 = successor(f1);
    } 
    return [f0, f1];
}

function usage() {
    
    
    var s1 = sequence(array_random(), "s1");
    var s2 = sequence(array_random(5), "s2");
    
    var r = swap_ranges_bounded(begin(s1), end(s1), begin(s2), end(s2));
    var f0 = r[0];
    var f1 = r[1];
    print('...');

}

function attributes() {

}

