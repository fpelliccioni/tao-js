// Reference: Elements of Programming, ch. 6, p. 95, exercise 6.1 (companion implementation in eop.h).

function none<I extends Iter<unknown>>(f: I, l: I, p: Predicate<ValueOf<I>>): boolean {
    const it = find_if(f, l, p);
    return equal(l, it);
}

function __none_usage() {
    const d = sequence([1, 3, 5]);
    const f = begin(d);
    const l = end(d);

    const result = none(f, l, even);

    if (result) {
        print("None of the elements in the sequence are even.");
    } else {
        print("There is at least one item in the sequence that is even.");
    }
}

function __none_attributes() {
}
