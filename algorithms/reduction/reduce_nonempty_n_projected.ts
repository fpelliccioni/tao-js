// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3 (iterator projection).

// Doc (es): Proyecta los primeros n iteradores y combina los valores. Requiere al menos un elemento.
// Doc (en): Projects the first n iterators and combines the resulting values. Requires at least one element.
function reduce_nonempty_n_projected<I extends Iter<unknown>, T>(
    f: I, n: number, op: Operation<T>, project: (it: I) => T,
): T {
    pre(() => Number.isSafeInteger(n) && n > 0, "The count must be a positive safe integer.");

    let result = project(f);
    while (n > 1) {
        f = successor(f);
        result = op(result, project(f));
        --n;
    }
    return result;
}

function __reduce_nonempty_n_projected_usage() {
    const d = sequence(["one", "two", "three", "four"]);
    const project = (it: Iter<string>) => source(it).length;
    const result = reduce_nonempty_n_projected(begin(d), 3, add, project);
    print("Characters in the first three words: " + result);
}

function __reduce_nonempty_n_projected_attributes() {
}
