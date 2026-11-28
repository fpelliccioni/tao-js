// Reference: Elements of Programming, ch. 2, p. 23.

// Doc (es): Encuentra el primer encuentro de los dos recorridos en una órbita con ciclo.
// Doc (en): Finds the first meeting of the two traversals in an orbit that eventually cycles.
function collision_point_nonterminating_orbit<T>(x: T, f: Transformation<T>): T {
    // Precondition: f is pure and defined along an eventually periodic orbit.
    let slow = x;
    let fast = f(x);
    while (slow !== fast) {
        slow = f(slow);
        fast = f(f(fast));
    }
    post(() => fast === orbit_reference(x, f).collision, "The result must be the first collision.");
    return fast;
}

function __collision_point_nonterminating_orbit_usage() {
    const links = seq([1, 2, 3, 1]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const result = collision_point_nonterminating_orbit(0, next);
    print("Collision point: " + result);
}

function __collision_point_nonterminating_orbit_attributes() {
}
