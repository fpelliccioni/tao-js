// Reference: From Mathematics to Generic Programming, ch. 7, §7.7, pp. 124–127 (ch07.h).

// Doc (es): Calcula el n-ésimo número de Fibonacci con dos llamadas recursivas por cada caso no base. Los subproblemas repetidos hacen que el tiempo crezca exponencialmente.
// Doc (en): Computes the nth Fibonacci number using two recursive calls per non-base case. Repeated subproblems cause the runtime to grow exponentially.
function fib0(n: number): number {
    pre(() => Number.isInteger(n) && n >= 0 && n <= 78, "The index must be an integer from 0 to 78.");

    function fib(i: number): number {
        if (i < 2) return i;
        return fib(i - 1) + fib(i - 2);
    }

    const result = fib(n);
    post(() => fibonacci_matches(n, result), "The result must equal the nth Fibonacci number.");
    return result;
}

function __fib0_usage() {
    const n = 6;
    const value = fib0(n);
    print("F(" + n + ") = " + value);
}

function __fib0_attributes() {
}
