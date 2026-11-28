function make_heap_n<T>(f: Iter<T>, n: number) {
    // assert(n > 2); //other sizes handled outside
    const fpi = Math.floor((n - 3) / 2);
    let fp = successor(f, fpi);    //firstParent
    let frk = successor(f, (fpi + 1) * 2);  //firstRightKid

    for (;; fp = predecessor(fp), frk = predecessor(frk, 2)) {
        const lucifer = source(fp);
        let parent = fp;
        let rk = frk; //rightKid
        for (;;) {
            const jr = predecessor(rk, Number(source(predecessor(rk)) <= source(rk)));
            const crt = source(jr);
            if (lucifer <= crt) break;
            sink(parent, crt);
            parent = jr;
            // rk = (jr + 1) * 2;
            const rki = (distance(f, jr) + 1) * 2;
            // if (rki >= n) goto write;
            if (rki >= n) {
                sink(parent, lucifer);
                break;
            }
            rk = successor(f, rki);
        }

        // if (parent != fp) {
        if ( ! equal(parent, fp)) {
                sink(parent, lucifer);
        }

        // if (fp == 0) break;
        if (equal(fp, f)) break;
    }

    if (n & 1) return;
    let childIndex = n - 1;
    while (true) {
        const parentIndex = Math.floor((childIndex - 1) / 2);
        const child = successor(f, childIndex);
        const parent = successor(f, parentIndex);
        const childValue = source(child);
        const parentValue = source(parent);

        if (parentValue <= childValue) break;
        sink(parent, childValue);
        sink(child, parentValue);

        if (parentIndex === 0) break;
        childIndex = parentIndex;
    }
}

function __make_heap_n_usage() {
    // const s = seq(array_random(), "s");
    const s = seq([24, 88, 59, 31, 91, 0, 87, 91, 40, 52]);

    make_heap_n(begin(s), size(s));
    print(s);

}

function __make_heap_n_attributes() {
}
