// Reference: Elements of Programming, ch. 2, p. 26, exercise 2.3.

// Doc (es): Alinea dos recorridos por su distancia a un estado común y encuentra su primer encuentro a partir de esa alineación.
// Doc (en): Aligns two traversals by their distance to a shared state and finds their first meeting after alignment.
function convergent_point_guarded<T>(x: T, y: T, shared: T, f: Transformation<T>, defined: Predicate<T> = () => true): T {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    pre(() => orbit_reference(x, f, defined).states.includes(shared)
        && orbit_reference(y, f, defined).states.includes(shared),
        "The shared state must be reachable from both starting states.");
    const dx = orbit_distance(x, shared, f);
    const dy = orbit_distance(y, shared, f);
    const first = dx > dy ? power_unary(x, dx - dy, f, defined) : x;
    const second = dy > dx ? power_unary(y, dy - dx, f, defined) : y;
    return convergent_point(first, second, f);
}

function __convergent_point_guarded_usage() {
    const links = seq([1, 2, 3, 3]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const defined = predicate(x => x < size(links));
    const result = convergent_point_guarded(0, 2, 3, next, defined);
    print("Guarded convergence: " + result);
}

function __convergent_point_guarded_attributes() {
}
