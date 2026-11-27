// Reference: From Mathematics to Generic Programming, ch. 4, §4.2, pp. 45–49 (segment_remainder in ch04.h).

function remainder_slow(a: number, b: number) {
    while (b < a) a -= b;
    return a;
}

function __remainder_slow_usage() {
    const a = random_int();
    const b = random_int();

    const r = remainder_slow(a, b);
    print(r);
}

function __remainder_slow_attributes() {
}
