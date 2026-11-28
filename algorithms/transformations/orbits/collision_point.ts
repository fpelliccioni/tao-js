// Reference: Elements of Programming, ch. 2, p. 21.

// Doc (es): Encuentra el primer encuentro entre dos recorridos a diferente velocidad, o el estado terminal si la órbita termina.
// Doc (en): Finds the first meeting of two traversals at different speeds, or the terminal state for a terminating orbit.
function collision_point<T>(x: T, f: Transformation<T>, defined: Predicate<T>): T {
    // Precondition: f is pure, the orbit has finitely many distinct states, and defined marks where f can be applied.
    let slow = x;
    let fast = x;
    if (defined(fast)) {
        fast = f(fast);
        while (fast !== slow) {
            slow = f(slow);
            if (!defined(fast)) break;
            fast = f(fast);
            if (!defined(fast)) break;
            fast = f(fast);
        }
    }
    post(() => fast === orbit_reference(x, f, defined).collision,
        "The result must be the first collision or the terminal state.");
    return fast;
}

function __collision_point_usage() {
    const links = seq([1, 2, 3]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const hasNext = predicate(x => x < size(links));
    const result = collision_point(0, next, hasNext);
    print("Terminal state: " + result);
}

function __collision_point_attributes() {
}
