// Reference: From Mathematics to Generic Programming, ch. 13, p. 241 (ch13.h).

function is_prime(n: number) {
    if (n <= 1) return false;
    const sd = smallest_divisor(n);
    return sd == n;
}

function __is_prime_usage() {
    let n = random_int();
    print(is_prime(n));

    n = 13;
    print(is_prime(n));
}

function __is_prime_attributes() {
}
