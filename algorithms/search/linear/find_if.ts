// Reference: Elements of Programming, ch. 6, pp. 94–95.
// Reference: From Mathematics to Generic Programming, ch. 10, pp. 190–191 (ch10.h).

function find_if<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>) {
    while ( ! equal(f, l) && ! p(source(f))) {
        f = successor(f)
    }
    return f;
}

function __find_if_usage() {
    const even = predicate(x => (x & 1) === 0);
    const d = sequence(array_random(), "d");
    const f = begin(d);
    const l = end(d);

    const it = find_if(f, l, even);
    if ( ! equal(it, l)) {
        print(source(it));
    }

}

function __find_if_attributes() {
}
