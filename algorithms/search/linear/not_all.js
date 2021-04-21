function not_all(f, l, p) {
    return ! all(f, l, p);
}

function usage() {


    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d");
    var f = begin(d);
    var l = end(d);

    if (not_all(f, l, even)) {
        print("There is at least one item in the sequence that is not even.");

    } else {
        print("All the elements of the sequence are even.");
    }
}

function attributes() {

}

