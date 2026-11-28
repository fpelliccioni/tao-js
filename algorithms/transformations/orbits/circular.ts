// Reference: Elements of Programming, ch. 2, p. 25.

// Doc (es): Determina si el estado inicial ya pertenece al ciclo.
// Doc (en): Determines whether the starting state is already on the cycle.
function circular<T>(x: T, f: Transformation<T>, defined: Predicate<T>): boolean {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const point = collision_point(x, f, defined);
    const result = defined(point) && f(point) === x;
    post(() => {
        const orbit = orbit_reference(x, f, defined);
        return result === (orbit.cycleLength > 0 && orbit.connection === x);
    }, "The orbit is circular exactly when its cycle begins at the starting state.");
    return result;
}

function __circular_usage() {
    const links = seq([1, 2, 3, 1]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const defined = predicate(x => x < size(links));
    const result = circular(1, next, defined);
    print("Circular: " + result);
}

function __circular_attributes() {
}
