// Reference: Elements of Programming, ch. 6, p. 99, exercise 6.3 (iterator projection).

// Doc (es): Proyecta los primeros n iteradores y reduce sus valores de izquierda a derecha. Si n es cero, devuelve z.
// Doc (en): Projects the first n iterators and reduces their values from left to right. If n is zero, returns z.
function reduce_n_projected<I extends Iter<unknown>, T>(
    f: I, n: number, op: Operation<T>, project: (it: I) => T, z: T,
): T {
    if (n === 0) return z;
    return reduce_nonempty_n_projected(f, n, op, project);
}

function __reduce_n_projected_usage() {
    const d = sequence([11, 22, 33, 44]);
    const project = (it: Iter<number>) => digitSum(source(it));
    const result = reduce_n_projected(begin(d), 3, add, project, 0);
    print("Sum of the first three digit sums: " + result);
}

function __reduce_n_projected_attributes() {
}
