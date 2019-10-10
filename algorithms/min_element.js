
function min_element(f, l, r) {
    if (equal(f, l)) return l;

    var m = f;
    f = successor(f);

    while ( ! equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}
​
function usage() {
    var d = sequence(array_random(), "d");

    var f = begin(d);
    var l = end(d);
    
    f = min_element(f, l, lt);
    if ( ! equal(f, l)) {
        print("The min element is: " + source(f));
    }    
}