function all<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>): boolean {
    const np = find_if_not(f, l, p);
    return equal(l, np);
}

function __all_usage() {
    const even = predicate<number>(x => (x & 1) === 0);
    const d = sequence(array_random(), "d");
    const f = begin(d);
    const l = end(d);

    if (all(f, l, even)) {
        print("All the elements of the sequence are even.");
    } else {
        print("There is at least one item in the sequence that is not even.");
    }
}

function __all_attributes() {
}
