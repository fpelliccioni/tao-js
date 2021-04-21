function count_if_not_basis(f, l, p, j) {
    while ( ! equal(f, l)) {
        if ( ! p(source(f))) {
            j = successor(j);
        }
        f = successor(f);
    }
    return j;
}

function usage() {

    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even);
    var c = sequence(array_ascending(), "c");

    var f = begin(d);
    var l = end(d);

    var j = begin(c);
    j = count_if_not_basis(f, l, even, j);

    print("Odd numbers: ");
    print(distance(begin(c), j));
}

function attributes() {

}

