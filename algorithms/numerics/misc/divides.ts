function divides(i: number, n: number) {
    return n % i == 0;
}

function __divides_usage() {
    let i = random_int();
    let n = random_int();
    print(divides(i, n));

    i = 5;
    n = 15;
    print(divides(i, n));
}

function __divides_attributes() {
}
