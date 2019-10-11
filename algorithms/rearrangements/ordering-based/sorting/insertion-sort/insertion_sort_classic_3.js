function insertion_sort_classic_3(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);
        c = successor(c);
    }
}

function usage() {
    function linear_insert(f, c, r) {
        if ( ! r(source(c), source(predecessor(c)))) return c;
    
        var value = source_move(c);
        while (true) {
            sink_move(c, source(predecessor(c)));
            c = predecessor(c);
            
            if (equal(f, c)) break;
            if ( ! r(value, source(predecessor(c)))) break;
        }
        sink_move(c, value);
        return c;
    }

    var s = sequence(array_random(), "s", lt);
    print(s);
    insertion_sort_classic_3(begin(s), end(s), lt);
    print(s);

}

function attributes() {

}

