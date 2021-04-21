function all(f, l, p) {
    var np = find_if_not(f, l, p);
    return equal(l, np);
}

function usage() {


    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d");
    var f = begin(d);
    var l = end(d);

    if (all(f, l, even)) {
        print("All the elements of the sequence are even.");
    } else {
        print("There is at least one item in the sequence that is not even.");
    }
}

function attributes() {

}

