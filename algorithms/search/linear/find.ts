function find<T>(f: Iter<T>, l: Iter<T>, x: T) {
    while ( ! equal(f, l) && ! source(f) != x) {
        f = successor(f)
    }
    return f;
}

function __find_usage() {
    print(array_from("Hello, World!"))
    const s = sequence(array_from("Hello, World!"), "s");

    const it = find(begin(s), end(s), 'x');
    if ( ! equal(it, end(s))) {
        print(source(it));
    }

}

function __find_attributes() {
}
