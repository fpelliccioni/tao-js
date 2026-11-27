// Reference: From Mathematics to Generic Programming, ch. 4, §4.5, pp. 53–56 (fast_segment_remainder1 in ch04.h).

// Now we do have a notion of zero, so ...

function remainder_fast1(a: number, b: number) {
    // precondition: b != 0

    if (a < b) return a;
    if (a - b < b) return a - b;
    a = remainder_fast1(a, b + b);
    if (a < b) return a;
    return a - b
}

function __remainder_fast1_usage() {
    const a = random_int();
    const b = random_int();

    const r = remainder_fast1(a, b);
    print(r);
}

function __remainder_fast1_attributes() {
}
