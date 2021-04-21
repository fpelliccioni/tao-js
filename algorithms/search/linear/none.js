function none(f, l, p) {
    var it = find_if(f, l, p);
    return equal(l, it);
}

function usage() {


    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d");
    var f = begin(d);
    var l = end(d);

    if (none(f, l, even)) {
        print("None of the elements in the sequence are even.");
    } else {
        print("There is at least one item in the sequence that is even.");
    }
}

function attributes() {

}

