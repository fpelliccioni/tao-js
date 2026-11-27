// Reference: Elements of Programming, ch. 6, p. 95, exercise 6.1 (companion implementation in eop.h).

function not_all<I extends Iter<unknown>>(f: I, l: I, p: Predicate<ValueOf<I>>): boolean {
    return !all(f, l, p);
}

function __not_all_usage() {
    const d = sequence([2, 3, 4]);
    const f = begin(d);
    const l = end(d);

    const result = not_all(f, l, even);

    if (result) {
        print("There is at least one item in the sequence that is not even.");
    } else {
        print("All the elements of the sequence are even.");
    }
}

function __not_all_attributes() {
}
