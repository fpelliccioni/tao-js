// Reference: Elements of Programming, ch. 6, pp. 108–109 (exercise 6.8).

// Doc (es): Busca desde el final. Devuelve el iterador inmediatamente posterior al último elemento que cumple p, o f si ninguno lo cumple. Requiere iteradores bidireccionales.
// Doc (en): Searches from the end. Returns the iterator just after the last element satisfying p, or f if none do. Requires bidirectional iterators.
function find_backward_if<I extends BidirectionalIterator>(
    f: I, l: I, p: Predicate<ValueOf<I>>,
): I {
    while (true) {
        if (equal(l, f)) return f;
        l = predecessor(l);
        if (p(source(l))) return successor(l);
    }
}

function __find_backward_if_usage() {
    const d = seq([2, 3, 4, 7]);
    const f = begin(d);
    const result = find_backward_if(f, end(d), even);

    if (equal(result, f)) {
        print("No matching element.");
    } else {
        const value = source(predecessor(result));
        print("Last even element: " + value);
    }
}

function __find_backward_if_attributes() {
}
