// Reference: Elements of Programming, ch. 2, pp. 25–26.

// Doc (es): Devuelve el primer estado del ciclo alcanzado desde el estado inicial.
// Doc (en): Returns the first state on the cycle reached from the starting state.
function connection_point_nonterminating_orbit<T>(x: T, f: Transformation<T>): T {
    // Precondition: f is pure and defined along an eventually periodic orbit.
    const collision = collision_point_nonterminating_orbit(x, f);
    const result = convergent_point(x, f(collision), f);
    post(() => result === orbit_reference(x, f).connection, "The result must be the first state in the cycle.");
    return result;
}

function __connection_point_nonterminating_orbit_usage() {
    const links = seq([1, 2, 3, 1]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const result = connection_point_nonterminating_orbit(0, next);
    print("Connection point: " + result);
}

function __connection_point_nonterminating_orbit_attributes() {
}
