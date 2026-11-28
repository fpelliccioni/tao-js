// Reference: Elements of Programming, ch. 9, §9.2, pp. 150–155 (implementation in eop.h).

function iota(f: Iter<number>, l: Iter<number>, start?: number, step?: number) {
    if ( ! start) start = 0;
    if ( ! step) step = 1;

    while ( ! equal(f, l)) {
        sink(f, start);
        start += step;
        f = successor(f);
    }
    return start;
}

function __iota_usage() {
    const d1 = seq(array_all_equal(8, 0));
    const d2 = seq(array_all_equal(5, 0));

    let f = successor(begin(d1));
    let l = predecessor(end(d1));

    let r = iota(f, l);
    print(r);

    f = begin(d2);
    l = end(d2);


    r = iota(f, l, r);
    print(r);

}

function __iota_attributes() {
}
