function is_prime(n) {
    if (n <= 1) return false;
    var sd = smallest_divisor(n);
    return sd == n;
}

function usage() {
    var n = random_int();
    print(is_prime(n));

    n = 13;
    print(is_prime(n));
}

function attributes() {

}

