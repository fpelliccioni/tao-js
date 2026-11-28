// Reference: Elements of Programming, ch. 2, p. 24.

// Doc (es): Determina si una órbita cíclica comienza dentro del ciclo o llega a él más tarde.
// Doc (en): Determines whether an eventually cyclic orbit starts inside its cycle or enters it later.
function circular_nonterminating_orbit<T>(x: T, f: Transformation<T>): boolean {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const point = collision_point_nonterminating_orbit(x, f);
    const result = f(point) === x;
    post(() => result === (orbit_reference(x, f).connection === x),
        "The orbit is circular exactly when its cycle begins at the starting state.");
    return result;
}

function __circular_nonterminating_orbit_usage() {
    const links = seq([1, 2, 3, 1]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const result = circular_nonterminating_orbit(0, next);
    print("Circular: " + result);
}

function __circular_nonterminating_orbit_attributes() {
}
