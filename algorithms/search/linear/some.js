function some(f, l, p) {
    return ! none(f, l, p);
}

function usage() {


    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d");
    var f = begin(d);
    var l = end(d);

    if (some(f, l, even)) {
        print("Some of the elements in the sequence are even.");
    } else {
        print("None of the elements in the sequence are even.");
    }
}

function attributes() {

}

