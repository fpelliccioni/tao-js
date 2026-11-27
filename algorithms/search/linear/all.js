function all(f, l, p) {
    const np = find_if_not(f, l, p);
    return equal(l, np);
}

function usage() {


    const isEven = predicate(function even(x) { return (x & 1) == 0; });
    const d = sequence(array_random(), "d");
    const f = begin(d);
    const l = end(d);

    if (all(f, l, isEven)) {
        print("All the elements of the sequence are even.");
    } else {
        print("There is at least one item in the sequence that is not even.");
    }
}

function attributes() {

}

