// Reference: Elements of Programming, ch. 10, p. 171.
// Reference: From Mathematics to Generic Programming, ch. 11, §11.4 (rotate_cycle_from).

// Doc (es): Mueve los elementos de un ciclo de una permutación desde sus posiciones de origen.
// Doc (en): Moves elements along one permutation cycle from their source positions.

function cycle_from<I extends Iter<unknown>>(i: I, f: Transformation<I>): void {
    // Precondition: f forms a closed permutation cycle through i, and all its positions are writable.
    const tmp = source(i);
    let j = i;
    let k = f(i);
    while ( ! equal(k, i)) {
        sink(j, source(k));
        j = k;
        k = f(k);
    }
    sink(j, tmp);
}

function __cycle_from_usage() {
    function successorMod10(i: Iter<number>) {
        const f = begin(s);
        let index = distance(begin(s), i);
        ++index;
        index = index % 10;
        const ret = successor(f, index);
        return ret;
    }

    const s = seq(array_random());
    cycle_from(begin(s), successorMod10);
    print(s);
}

function __cycle_from_attributes() {
}
