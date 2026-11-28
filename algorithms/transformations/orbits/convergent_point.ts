// Reference: Elements of Programming, ch. 2, p. 25.

// Doc (es): Avanza dos estados a la misma velocidad y devuelve el primero en el que coinciden.
// Doc (en): Advances two states at the same speed and returns their first common state.
function convergent_point<T>(x: T, y: T, f: Transformation<T>): T {
    // Precondition: f is pure and defined along both orbits, each with finitely many distinct states.
    let expected!: T;
    pre(() => {
        const reference = convergence_reference(x, y, f);
        expected = reference.point;
        return reference.converges;
    }, "The two states must meet after the same number of steps.");
    while (x !== y) {
        x = f(x);
        y = f(y);
    }
    post(() => x === expected, "The result must be the first synchronous meeting point.");
    return x;
}

function __convergent_point_usage() {
    const links = seq([2, 2, 3, 3]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const result = convergent_point(0, 1, next);
    print("Convergent point: " + result);
}

function __convergent_point_attributes() {
}
