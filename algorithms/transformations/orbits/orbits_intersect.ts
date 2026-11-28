// Reference: Elements of Programming, ch. 2, p. 26, exercise 2.2.

// Doc (es): Determina si dos órbitas comparten un estado, aunque lleguen a él en momentos distintos.
// Doc (en): Checks whether two orbits share a state, even when they reach it at different times.
function orbits_intersect<T>(x: T, y: T, f: Transformation<T>, defined: Predicate<T>): boolean {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const first = connection_point(x, f, defined);
    const second = connection_point(y, f, defined);
    const result = first === second || (defined(first) && defined(second) && orbit_reachable(first, second, f, defined));
    post(() => {
        const states = new Set(orbit_reference(x, f, defined).states);
        return result === orbit_reference(y, f, defined).states.some(state => states.has(state));
    }, "The result must agree with whether the two orbits share a state.");
    return result;
}

function __orbits_intersect_usage() {
    const links = seq([1, 2, 3, 1]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const defined = predicate(x => x < size(links));
    const result = orbits_intersect(0, 2, next, defined);
    print("Orbits intersect: " + result);
}

function __orbits_intersect_attributes() {
}
