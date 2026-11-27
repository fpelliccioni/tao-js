// Reference: From Mathematics to Generic Programming, ch. 4, §4.2, pp. 45–49 (integer adaptations of gcm1 in ch04.h).

function gcd1(a: number, b: number) {
    while (a != b) {
        while (b < a) a -= b;
        //swap(a, b) not possible in ES5
        const tmp = a;
        a = b;
        b = tmp;
    }
    return a;
}

function __gcd1_usage() {
    const a = random_int();
    const b = random_int();

    const d = gcd1(a, b);
    print(d);
}

function __gcd1_attributes() {
}
