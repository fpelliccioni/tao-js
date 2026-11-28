// Reference: Elements of Programming, ch. 2, p. 16.

// Doc (es): Devuelve el valor absoluto de un entero.
// Doc (en): Returns the absolute value of an integer.
function abs(x: number): number {
    pre(() => Number.isSafeInteger(x), "The argument must be a safe integer.");
    const result = x < 0 ? -x : x;
    post(() => result >= 0 && (result === x || result === -x), "The result must be the nonnegative magnitude.");
    return result;
}

function __abs_usage() {
    const result = abs(-7);
    print("Absolute value: " + result);
}

function __abs_attributes() {
}
