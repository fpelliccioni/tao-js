// Reference: Elements of Programming, ch. 2, p. 23.

// Doc (es): Determina si la órbita alcanza un estado terminal.
// Doc (en): Determines whether the orbit reaches a terminal state.
function terminating<T>(x: T, f: Transformation<T>, defined: Predicate<T>): boolean {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const point = collision_point(x, f, defined);
    const result = !defined(point);
    post(() => result === (orbit_reference(x, f, defined).cycleLength === 0),
        "The orbit terminates exactly when it has no cycle.");
    return result;
}

function __terminating_usage() {
    const links = seq([1, 2, 3]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const defined = predicate(x => x < size(links));
    const result = terminating(0, next, defined);
    print("Terminating: " + result);
}

function __terminating_attributes() {
}
