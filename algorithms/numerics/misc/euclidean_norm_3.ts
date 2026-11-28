// Reference: Elements of Programming, ch. 2, p. 16 (3 coordinates).

// Doc (es): Devuelve la norma euclídea de un vector de 3 coordenadas.
// Doc (en): Returns the Euclidean norm of a vector with 3 coordinates.
function euclidean_norm_3(x: number, y: number, z: number): number {
    pre(() => [x, y, z].every(Number.isFinite), "All coordinates must be finite.");
    const squaredLength = x * x + y * y + z * z;
    const result = Math.sqrt(squaredLength);
    post(() => {
        const squared = result * result;
        return result >= 0 && (squared === squaredLength
            || Math.abs((squared - squaredLength) / squaredLength) <= 2 * Number.EPSILON);
    }, "The result must be the nonnegative square root of the sum of squares.");
    return result;
}

function __euclidean_norm_3_usage() {
    const result = euclidean_norm_3(2, 3, 6);
    print("Euclidean norm: " + result);
}

function __euclidean_norm_3_attributes() {
}
