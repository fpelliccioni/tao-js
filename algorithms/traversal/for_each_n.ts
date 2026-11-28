// Reference: Elements of Programming, ch. 6, p. 98.

// Doc (es): Aplica proc a los primeros n valores desde f. Devuelve el procedimiento y el iterador desde el que se puede retomar el recorrido.
// Doc (en): Applies proc to the first n values from f. Returns the procedure and the iterator from which traversal can resume.
function for_each_n<I extends Iter<unknown>, Proc extends (value: ValueOf<I>) => void>(
    f: I, n: number, proc: Proc,
): [Proc, I] {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");

    while (n !== 0) {
        proc(source(f));
        f = successor(f);
        --n;
    }
    return [proc, f];
}

function __for_each_n_usage() {
    const d = seq([2, 4, 6, 8], "d", undefined, "stream");
    let total = 0;
    const [accumulate, next] = for_each_n(begin(d), 2, x => { total = add(total, x); });

    print("First two elements sum to " + total + ".");
    for_each(next, end(d), accumulate);
    print("Sum after resuming: " + total);
}

function __for_each_n_attributes() {
}
