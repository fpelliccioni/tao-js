function insertion_sort_backward(f, l, r) {
    if (equal(f, l)) return;

    r = complement(r);
    var c = predecessor(l);
    while ( ! equal(c, f)) {
        c = predecessor(c);
        linear_insert_backward(c, l, r);     
    }
}

function usage() {
    function linear_insert_backward(c, l, r) {
        var value = source(c);
        c = successor(c);
        while ( ! equal(c, l) && r(value, source(c))) {
          sink(c, source(c));
          c = successor(c);
        }
        sink(c, value); 
        return c;
    }
      
    // var s = sequence(array_random(), "s", lt);
    // var s = sequence([81, 28, 20, 67, 36, 84, 86, 48, 34, 5], "s", lt);
    var s = sequence([34, 5], "s", lt);
    
    print(s);
    insertion_sort_backward(begin(s), end(s), lt);
    print(s);
}

function attributes() {

}

