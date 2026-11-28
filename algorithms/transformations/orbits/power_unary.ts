// Reference: Elements of Programming, ch. 2, p. 18.

// Doc (es): Aplica n veces una transformación al estado inicial. Con cero pasos devuelve el estado original.
// Doc (en): Applies a transformation n times to the starting state. Zero applications return the original state.
function power_unary<T>(x: T, n: number, f: Transformation<T>, defined: Predicate<T> = () => true): T {
    // Precondition: f and defined are pure, and defined identifies the domain of f.
    pre(() => Number.isSafeInteger(n) && n >= 0, "The step count must be a nonnegative safe integer.");
    let expected = x;
    pre(() => {
        for (let i = 0; i < n; ++i) {
            if (!defined(expected)) return false;
            expected = f(expected);
        }
        return true;
    }, "The transformation must be defined at every step.");
    let result = x;
    for (let i = 0; i < n; ++i) result = f(result);
    post(() => result === expected, "The result must be the state after n applications.");
    return result;
}

function __power_unary_usage() {
    const links = seq([1, 2, 3]);
    const first = begin(links);
    const next = (x: number) => source(successor(first, x));
    const defined = predicate(x => x < size(links));
    const result = power_unary(0, 3, next, defined);
    print("State after 3 steps: " + result);
}

function __power_unary_attributes() {
}
