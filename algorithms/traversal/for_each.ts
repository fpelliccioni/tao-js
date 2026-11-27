// Reference: Elements of Programming, ch. 6, p. 94.

// Doc (es): Aplica proc a cada valor de [f, l), de izquierda a derecha. Devuelve el mismo procedimiento con el estado que haya acumulado.
// Doc (en): Applies proc to each value in [f, l) from left to right. Returns the same procedure with any state it accumulated.
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
