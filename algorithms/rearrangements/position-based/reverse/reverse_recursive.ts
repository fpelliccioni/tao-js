// Reference: From Mathematics to Generic Programming, ch. 11, §11.5, p. 214 (ch11.h).
// Reference: Elements of Programming, ch. 10, p. 174 (reverse_n_forward).

// Doc (es): Invierte un rango de avance dividiéndolo en mitades y luego intercambiándolas.
// Doc (en): Reverses a forward range by recursively reversing and swapping its halves.
function reverse_recursive<I extends MutableForwardIterator>(f: I, n: number): I {
    pre(() => Number.isSafeInteger(n) && n >= 0, "The count must be a nonnegative safe integer.");
    let last!: I;
    let expected!: ValueOf<I>[];
    pre(() => {
        last = successor(f, n);
        expected = range_snapshot(f, last).reverse();
        return true;
    }, "The counted range must exist.");
    const result = reverse_n_forward(f, n);
    post(() => equal(result, last), "The result must be the end of the counted range.");
    post(() => range_matches_snapshot(f, last, expected), "The counted range must be reversed.");
    return result;
}

function __reverse_recursive_usage() {
    const d = seq([1, 2, 3, 4, 5], "d", undefined, "sll");
    reverse_recursive(begin(d), size(d));
    print(d);
}

function __reverse_recursive_attributes() {
}
