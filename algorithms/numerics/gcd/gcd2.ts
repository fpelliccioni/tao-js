// Reference: From Mathematics to Generic Programming, ch. 4, §4.2, pp. 45–49 (integer adaptations of gcm in ch04.h).

function gcd2(a: number, b: number) {
    while (a != b) {
        a = remainder_slow(a, b);
        //swap(a, b) not possible in ES5
        const tmp = a;
        a = b;
        b = tmp;
    }
    return a;
}

function __gcd2_usage() {
    const a = random_int();
    const b = random_int();

    const d = gcd2(a, b);
    print(d);
}

function __gcd2_attributes() {
}
