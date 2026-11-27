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
