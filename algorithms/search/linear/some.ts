// Reference: Elements of Programming, ch. 6, p. 95, exercise 6.1 (companion implementation in eop.h).

function some<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    return ! none(f, l, p);
}

function __some_usage() {
    const even = predicate<number>(x => (x & 1) === 0);
    const d = sequence(array_random(), "d");
    const f = begin(d);
    const l = end(d);

    if (some(f, l, even)) {
        print("Some of the elements in the sequence are even.");
    } else {
        print("None of the elements in the sequence are even.");
    }
}

function __some_attributes() {
}
