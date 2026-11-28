// Reference: Elements of Programming, ch. 2, p. 27.

// Doc (es): Devuelve una tupla con la distancia al punto de conexión, la longitud del ciclo menos uno y el punto de conexión. Para una órbita terminal, el segundo campo es cero.
// Doc (en): Returns the distance to the connection, the cycle length minus one and the connection point. For a terminating orbit, the second field is zero.
function orbit_structure<T>(x: T, f: Transformation<T>, defined: Predicate<T>): OrbitStructure<T> {
    // Precondition: f is pure and each orbit has finitely many distinct states.
    const point = connection_point(x, f, defined);
    const distance = orbit_distance(x, point, f);
    const cycleSteps = defined(point) ? orbit_distance(f(point), point, f) : 0;
    post(() => {
        const orbit = orbit_reference(x, f, defined);
        return point === orbit.connection && distance === orbit.states.indexOf(point)
            && cycleSteps === Math.max(0, orbit.cycleLength - 1);
    }, "The result must give the connection and the orbit distances.");
    return [distance, cycleSteps, point];
}

function __orbit_structure_usage() {
    const links = seq([1, 2, 3]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const defined = predicate(x => x < size(links));
    const result = orbit_structure(0, next, defined);
    const [distance, cycleSteps, point] = result;
    print("Orbit: " + distance + ", " + cycleSteps + ", " + point);
}

function __orbit_structure_attributes() {
}
