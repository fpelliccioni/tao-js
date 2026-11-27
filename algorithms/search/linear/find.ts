// Reference: Elements of Programming, ch. 6, p. 94.

function find<T>(f: Iter<T>, l: Iter<T>, x: T) {
    while ( ! equal(f, l) && ! source(f) != x) {
        f = successor(f)
    }
    return f;
}

function __find_usage() {
    const characters = array_from("Hello, World!");
    print(characters);
    const s = sequence(array_from("Hello, World!"), "s");

    const it = find(begin(s), end(s), 'x');
    if ( ! equal(it, end(s))) {
        const value = source(it);
        print(value);
    }

}

function __find_attributes() {
}
