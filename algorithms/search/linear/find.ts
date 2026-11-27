// Reference: Elements of Programming, ch. 6, p. 94.

// Doc (es): Busca la primera aparición de x en [f, l). Devuelve l si x está ausente.
// Doc (en): Finds the first occurrence of x in [f, l). Returns l if x is absent.
function find<I extends Iter<unknown>>(f: I, l: I, x: ValueOf<I>): I {
    while (!equal(f, l) && source(f) !== x) {
        f = successor(f);
    }
    return f;
}

function __find_usage() {
    const s = sequence(array_from("Hello, World!"));
    const l = end(s);
    const target = "W";
    const result = find(begin(s), l, target);

    if (equal(result, l)) {
        print("No matching character.");
    } else {
        const value = source(result);
        print("Found: " + value);
    }
}

function __find_attributes() {
}
