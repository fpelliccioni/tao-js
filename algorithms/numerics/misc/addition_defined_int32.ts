// Reference: Elements of Programming, ch. 2, p. 17, exercise 2.1.

// Doc (es): Comprueba si los dos operandos y su suma caben en un entero de 32 bits con signo. Compara con los límites antes de sumar.
// Doc (en): Checks whether both operands and their sum fit in a signed 32-bit integer. Compares against the bounds before adding.
function addition_defined_int32(a: number, b: number): boolean {
    const min = -2147483648;
    const max = 2147483647;
    const operandsFit = Number.isInteger(a) && a >= min && a <= max
        && Number.isInteger(b) && b >= min && b <= max;
    const result = operandsFit && (b > 0 ? a <= max - b : a >= min - b);

    post(() => {
        // A number represents the widened sum of any two signed 32-bit integers exactly.
        return result === (operandsFit && a + b >= min && a + b <= max);
    }, "The predicate must agree with whether the signed 32-bit addition is defined.");
    return result;
}

function __addition_defined_int32_usage() {
    const cases = [
        [2147483646, 1],
        [2147483647, 1],
        [-2147483647, -1],
        [-2147483648, -1],
        [2147483648, -1],
    ];

    for (const [a, b] of cases) {
        const defined = addition_defined_int32(a, b);
        print(a + " + (" + b + "): " + defined);
    }
}

function __addition_defined_int32_attributes() {
}
