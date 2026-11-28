// Reference: Elements of Programming, ch. 2, p. 27.

// Doc (es): Devuelve la distancia a la entrada del ciclo, la longitud del ciclo menos uno y su punto de entrada.
// Doc (en): Returns the distance to the cycle entry, the cycle length minus one and the entry point.
function orbit_structure_nonterminating_orbit<T>(x: T, f: Transformation<T>): OrbitStructure<T> {
    // Precondition: f is pure and defined along an eventually periodic orbit.
    const point = connection_point_nonterminating_orbit(x, f);
    const distance = orbit_distance(x, point, f);
    const cycleSteps = orbit_distance(f(point), point, f);
    post(() => {
        const orbit = orbit_reference(x, f);
        return point === orbit.connection && distance === orbit.states.indexOf(point)
            && cycleSteps === orbit.cycleLength - 1;
    }, "The result must give the cycle entry and the orbit distances.");
    return [distance, cycleSteps, point];
}

function __orbit_structure_nonterminating_orbit_usage() {
    const links = seq([1, 2, 3, 1]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const result = orbit_structure_nonterminating_orbit(0, next);
    const [distance, cycleSteps, point] = result;
    print("Orbit: " + distance + ", " + cycleSteps + ", " + point);
}

function __orbit_structure_nonterminating_orbit_attributes() {
}
