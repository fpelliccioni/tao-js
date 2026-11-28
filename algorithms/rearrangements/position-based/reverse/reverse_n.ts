// Reference: From Mathematics to Generic Programming, ch. 11, §11.5, p. 214 (ch11.h).
// Reference: Elements of Programming, ch. 10, p. 173 (reverse_n_bidirectional).

// Doc (es): Aplica la inversión contada con iteradores bidireccionales.
// Doc (en): Applies counted reversal with bidirectional iterators.
function reverse_n<I extends MutableBidirectionalIterator>(f: I, l: I, n: number): void {
    reverse_n_bidirectional(f, l, n);
}

function __reverse_n_usage() {
    const d = seq([1, 2, 3, 4, 5]);
    const [f, l] = rng(d);
    reverse_n(f, l, size(d));
    print(d);
}

function __reverse_n_attributes() {
}
