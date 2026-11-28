// Reference: Elements of Programming, ch. 6, p. 95, exercise 6.1 (companion implementation in eop.h).

// Doc (es): Comprueba si al menos un elemento falla p en [f, l).
// Doc (en): Checks whether at least one element fails p in [f, l).
function not_all<I extends Iter<unknown>>(f: I, l: I, p: Predicate<ValueOf<I>>): boolean {
    return !all(f, l, p);
}

function __not_all_usage() {
    const d = seq([2, 3, 4]);
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
