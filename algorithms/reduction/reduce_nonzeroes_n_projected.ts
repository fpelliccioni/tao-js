// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3 (iterator projection).

// Doc (es): Proyecta los primeros n iteradores y reduce los valores distintos de z. Devuelve z si todos coinciden con él o el rango está vacío.
// Doc (en): Projects the first n iterators and reduces the values different from z. Returns z if all values equal it or the range is empty.
function reduce_nonzeroes_n_projected<I extends Iter<unknown>, T>(
    f: I, n: number, op: Operation<T>, project: (it: I) => T, z: T,
): T {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");

    let result;
    do {
        if (n === 0) return z;
        result = project(f);
        f = successor(f);
        --n;
    } while (result === z);

    while (n !== 0) {
        const value = project(f);
        if (value !== z) result = op(result, value);
        f = successor(f);
        --n;
    }
    return result;
}

function __reduce_nonzeroes_n_projected_usage() {
    const d = sequence([10, 12, 20, 21, 11]);
    const project = (it: Iter<number>) => source(it) % 10;
    const result = reduce_nonzeroes_n_projected(begin(d), 4, add, project, 0);
    print("Sum of last digits, skipping zeroes: " + result);
}

function __reduce_nonzeroes_n_projected_attributes() {
}
