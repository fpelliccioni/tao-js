// Reference: Elements of Programming, ch. 2, p. 19 (reachability with a positive step count).

// Doc (es): Determina si un estado se alcanza tras dar al menos un paso.
// Doc (en): Checks whether a state can be reached after taking at least one step.
function orbit_reachable_nonempty<T>(x: T, y: T, f: Transformation<T>, defined: Predicate<T>): boolean {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const result = defined(x) && orbit_reachable(f(x), y, f, defined);
    post(() => {
        const orbit = orbit_reference(x, f, defined);
        return result === (orbit.states.slice(1).includes(y) || (orbit.cycleLength > 0 && orbit.connection === y));
    }, "The result must agree with membership after at least one step.");
    return result;
}

function __orbit_reachable_nonempty_usage() {
    const links = seq([1, 2, 3, 1]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const defined = predicate(x => x < size(links));
    const result = orbit_reachable_nonempty(0, 0, next, defined);
    print("Reachable after a step: " + result);
}

function __orbit_reachable_nonempty_attributes() {
}
