// Reference: Elements of Programming, ch. 2, p. 16 (2 coordinates).

// Doc (es): Devuelve la norma euclídea de un vector de 2 coordenadas.
// Doc (en): Returns the Euclidean norm of a vector with 2 coordinates.
function euclidean_norm(x: number, y: number): number {
    pre(() => [x, y].every(Number.isFinite), "All coordinates must be finite.");
    const squaredLength = x * x + y * y;
    const result = Math.sqrt(squaredLength);
    post(() => {
        const squared = result * result;
        return result >= 0 && (squared === squaredLength
            || Math.abs((squared - squaredLength) / squaredLength) <= 2 * Number.EPSILON);
    }, "The result must be the nonnegative square root of the sum of squares.");
    return result;
}

function __euclidean_norm_usage() {
    const result = euclidean_norm(3, 4);
    print("Euclidean norm: " + result);
}

function __euclidean_norm_attributes() {
}
