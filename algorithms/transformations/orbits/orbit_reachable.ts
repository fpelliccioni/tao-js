// Reference: Elements of Programming, ch. 2, p. 19 (reachability definition).

// Doc (es): Determina si un estado se alcanza en cero o más aplicaciones de la transformación.
// Doc (en): Checks whether a state can be reached in zero or more applications of the transformation.
function orbit_reachable<T>(x: T, y: T, f: Transformation<T>, defined: Predicate<T>): boolean {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const point = connection_point(x, f, defined);
    let current = x;
    while (current !== y && current !== point) current = f(current);
    if (current !== y && defined(point)) {
        current = f(point);
        while (current !== y && current !== point) current = f(current);
    }
    const result = current === y;
    post(() => result === orbit_reference(x, f, defined).states.includes(y),
        "The result must agree with membership in the orbit.");
    return result;
}

function __orbit_reachable_usage() {
    const links = seq([1, 2, 3, 1]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const defined = predicate(x => x < size(links));
    const result = orbit_reachable(1, 3, next, defined);
    print("Reachable: " + result);
}

function __orbit_reachable_attributes() {
}
