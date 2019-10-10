function partition_stable_forward(f, l, p) {
    while (true) {
        if (equal(f, l)) return f;
        if (p(source(f))) break;
        f = successor(f);
    }

    var j = f;
    j = successor(j)

    while ( ! equal(j, l)) {
        if ( ! p(source(j))) {
            rotate(f, j, successor(j));     //TODO: refine rotate(...)
            f = successor(f);
        }
        j = successor(j);
    }
    return f;
}

function usage() {
    
    
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even);
    var f = begin(d);
    var l = end(d);
    
    var p = partition_stable_forward(f, l, even);
    if ( ! equal(p, l)) {
        print('partition point: ' + source(p));
    }

}

function attributes() {

}

