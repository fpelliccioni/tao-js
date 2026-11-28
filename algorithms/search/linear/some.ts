// Reference: Elements of Programming, ch. 6, p. 95, exercise 6.1 (companion implementation in eop.h).

// Doc (es): Comprueba si al menos un elemento cumple p en [f, l).
// Doc (en): Checks whether at least one element satisfies p in [f, l).
function some<I extends Iter<unknown>>(f: I, l: I, p: Predicate<ValueOf<I>>): boolean {
    return !none(f, l, p);
}

function __some_usage() {
    const d = seq([1, 2, 3]);
    const f = begin(d);
    const l = end(d);

    const result = some(f, l, even);

    if (result) {
        print("Some of the elements in the sequence are even.");
    } else {
        print("None of the elements in the sequence are even.");
    }
}

function __some_attributes() {
}
