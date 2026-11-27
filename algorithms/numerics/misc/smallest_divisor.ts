// Reference: From Mathematics to Generic Programming, ch. 13, p. 240 (ch13.h).

function smallest_divisor(n: number) {
    //precondition: n > 0
    if (even(n)) return 2;

    for (let i = 3; i * i <= n; i += 2) {
        if (divides(i, n)) {
            return i;
        }
    }
    return n;
}

function __smallest_divisor_usage() {
    let n = random_int();
    print(smallest_divisor(n));

    n = 15;
    print(smallest_divisor(n));
}

function __smallest_divisor_attributes() {
}
