// Reference: Elements of Programming, ch. 6, p. 95, exercise 6.1 (companion implementation in eop.h).

// Doc (es): Comprueba si todos los elementos cumplen p en [f, l).
// Doc (en): Checks whether every element satisfies p in [f, l).
function all<I extends Iter<unknown>>(f: I, l: I, p: Predicate<ValueOf<I>>): boolean {
    const np = find_if_not(f, l, p);
    return equal(l, np);
}

function __all_usage() {
    const d = seq([2, 4, 6]);
    const f = begin(d);
    const l = end(d);

    const result = all(f, l, even);

    if (result) {
        print("All the elements of the sequence are even.");
    } else {
        print("There is at least one item in the sequence that is not even.");
    }
}

function __all_attributes() {
}
