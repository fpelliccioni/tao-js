// Reference: Elements of Programming, ch. 6, p. 95, exercise 6.1 (companion implementation in eop.h).

function not_all<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    return ! all(f, l, p);
}

function __not_all_usage() {
    const even = predicate((x: number) => (x & 1) === 0);
    const d = sequence(array_random(), "d");
    const f = begin(d);
    const l = end(d);

    if (not_all(f, l, even)) {
        print("There is at least one item in the sequence that is not even.");

    } else {
        print("All the elements of the sequence are even.");
    }
}

function __not_all_attributes() {
}
