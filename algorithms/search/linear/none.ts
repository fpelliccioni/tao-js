function none<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>): boolean {
    const it = find_if(f, l, p);
    return equal(l, it);
}

function usage() {
    const even = predicate<number>(x => (x & 1) === 0);
    const d = sequence(array_random(), "d");
    const f = begin(d);
    const l = end(d);

    if (none(f, l, even)) {
        print("None of the elements in the sequence are even.");
    } else {
        print("There is at least one item in the sequence that is even.");
    }
}

function attributes() {

}

