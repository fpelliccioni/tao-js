// Reference: Elements of Programming, ch. 2, p. 26.

// Doc (es): Devuelve la entrada al ciclo, o el estado terminal si la órbita termina.
// Doc (en): Returns the entry to the cycle, or the terminal state for a terminating orbit.
function connection_point<T>(x: T, f: Transformation<T>, defined: Predicate<T>): T {
    // Precondition: f is pure, the orbit has finitely many distinct states, and defined marks where f can be applied.
    const collision = collision_point(x, f, defined);
    const result = defined(collision) ? convergent_point(x, f(collision), f) : collision;
    post(() => result === orbit_reference(x, f, defined).connection,
        "The result must be the first state in the cycle or the terminal state.");
    return result;
}

function __connection_point_usage() {
    const links = seq([1, 2, 3, 1]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const hasNext = predicate(x => x < size(links));
    const result = connection_point(0, next, hasNext);
    print("Connection point: " + result);
}

function __connection_point_attributes() {
}
