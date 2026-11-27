// Reference: Elements of Programming, ch. 6, p. 94.

function for_each<I extends Iter<unknown>, Proc extends (value: ValueOf<I>) => void>(
    f: I, l: I, proc: Proc,
): Proc {
    while (!equal(f, l)) {
        proc(source(f));
        f = successor(f);
    }
    return proc;
}

function __for_each_usage() {
    const d = sequence([2, 4, 6]);
    let total = 0;
    const accumulate = for_each(begin(d), end(d), x => { total = add(total, x); });
    print("Sum: " + total);
    accumulate(8);
    print("Sum after reusing the procedure: " + total);
}

function __for_each_attributes() {
}
