// Reference: From Mathematics to Generic Programming, ch. 7, §7.7, pp. 124–127 (ch07.h).

// Doc (es): Calcula el n-ésimo número de Fibonacci manteniendo dos términos consecutivos. Usa tiempo lineal y espacio constante.
// Doc (en): Computes the nth Fibonacci number by keeping two consecutive terms. Uses linear time and constant space.
function fibonacci_iterative(n: number): number {
    pre(() => Number.isInteger(n) && n >= 0 && n <= 78, "The index must be an integer from 0 to 78.");

    let previous = 0;
    let current = n === 0 ? 0 : 1;
    for (let i = 1; i < n; ++i) {
        [previous, current] = [current, previous + current];
    }

    post(() => fibonacci_matches(n, current), "The result must equal the nth Fibonacci number.");
    return current;
}

function __fibonacci_iterative_usage() {
    const n = 6;
    const value = fibonacci_iterative(n);
    print("F(" + n + ") = " + value);
}

function __fibonacci_iterative_attributes() {
}
