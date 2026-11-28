// Reference: From Mathematics to Generic Programming, ch. 12, §12.4, p. 233 (ch12.h, integer specialization).

// Doc (es): Devuelve [x, g], donde g es el máximo común divisor no negativo y x es el coeficiente de a en la identidad de Bézout. Acepta enteros seguros con signo.
// Doc (en): Returns [x, g], where g is the nonnegative greatest common divisor and x is the coefficient of a in Bézout's identity. Accepts signed safe integers.
function extended_gcd(a: number, b: number): [coefficient: number, gcd: number] {
    pre(() => Number.isSafeInteger(a) && Number.isSafeInteger(b), "Both operands must be safe integers.");

    let u = Math.abs(a);
    let v = Math.abs(b);
    let x0 = 1;
    let x1 = 0;
    while (v !== 0) {
        const r = u % v;
        const q = (u - r) / v;
        const x2 = x0 - q * x1;
        x0 = x1;
        x1 = x2;
        u = v;
        v = r;
    }
    const x = a < 0 ? -x0 : x0;
    const g = u;
    post(() => {
        if (a === 0 && b === 0) return g === 0;
        if (g <= 0 || a % g !== 0 || b % g !== 0) return false;
        const difference = BigInt(g) - BigInt(a) * BigInt(x);
        return b === 0 ? difference === 0n : difference % BigInt(b) === 0n;
    }, "The result must divide both operands and satisfy Bézout's identity.");
    return [x, g];
}

function __extended_gcd_usage() {
    const [x, g] = extended_gcd(196, 42);
    print("Bézout coefficient: " + x);
    print("Greatest common divisor: " + g);
}

function __extended_gcd_attributes() {
}
