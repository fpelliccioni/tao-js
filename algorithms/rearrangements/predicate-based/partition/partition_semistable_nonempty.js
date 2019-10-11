function partition_semistable_nonempty(f, l, p) {
    //precondition: nonempty: ! equal(f, l)
    while ( ! p(source(f))) {
        f = successor(f);
        if (equal(f, l)) return;
    }    

    var j = f;
    j = successor(j)
    if (equal(j, l)) return;

    while ( ! equal(successor(j), l)) {
        if ( ! p(source(j))) {
            iter_swap(f, j);
            f = successor(f);
        }
        j = successor(j);
    }
    iter_swap(f, j);
}

function usage() {
    
    
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even, true);
    var f = begin(d);
    var l = end(d);
    
    partition_semistable_nonempty(f, l, even);

}

function attributes() {

}

