// Reference: From Mathematics to Generic Programming, ch. 13, p. 241 (ch13.h).

function is_prime(n: number) {
    if (n <= 1) return false;
    const sd = smallest_divisor(n);
    return sd == n;
}

function __is_prime_usage() {
    let n = random_int();
    const prime = is_prime(n);
    print(prime);

    n = 13;
    const nextPrime = is_prime(n);
    print(nextPrime);
}

function __is_prime_attributes() {
}
