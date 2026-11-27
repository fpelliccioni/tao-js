// Reference: Elements of Programming, ch. 5, p. 73.
// Reference: From Mathematics to Generic Programming, ch. 4, pp. 54–55 (ch04.h).

function largest_doubling(a: number, b: number) {
    // precondition: b != 0
    while (a - b >= b) b += b;
    return b;
}

function __largest_doubling_usage() {
    const a = random_int();
    const b = random_int();

    const r = largest_doubling(a, b);
    print(r);
}

function __largest_doubling_attributes() {
}
