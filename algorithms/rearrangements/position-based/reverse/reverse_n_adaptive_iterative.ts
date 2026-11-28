// Reference: Elements of Programming, ch. 11, p. 199, exercise 11.12.

// Doc (es): Invierte los primeros n elementos invirtiendo bloques que caben en el búfer y combinándolos por rotación. Devuelve el iterador que sigue al rango invertido.
// Doc (en): Reverses the first n elements by reversing blocks that fit in the buffer and combining them by rotation. Returns the iterator just past the reversed range.
function reverse_n_adaptive_iterative<I extends MutableForwardIterator, B extends MutableBidirectionalIterator<ValueOf<I>>>(
    f: I, n: number, buffer: B, capacity: number,
): I {
    pre(
        () => Number.isSafeInteger(n) && n >= 0 && Number.isSafeInteger(capacity) && capacity >= 0,
        "The length and buffer capacity must be nonnegative safe integers.",
    );
    let original!: ValueOf<I>[];
    pre(() => {
        const l = successor(f, n);
        successor(buffer, capacity);
        original = [];
        for (let it = f; !equal(it, l); it = successor(it)) original.push(source(it));
        return true;
    }, "The input and buffer must have enough elements.");
    pre(() => {
        if (n === 0 || capacity === 0) return true;
        const offset = distance(f, buffer);
        if (offset >= n || offset <= -capacity) return true;
        return offset >= 0
            ? !equal(successor(f, offset), buffer)
            : !equal(f, successor(buffer, -offset));
    }, "The input and buffer must not overlap.");

    type Block = { first: I; last: I };
    function* blocks() {
        let first = f;
        let remaining = n;
        const width = Math.max(1, capacity);
        while (remaining !== 0) {
            const count = Math.min(width, remaining);
            const last = successor(first, count);
            if (count > 1) reverse_n_with_buffer(first, count, buffer);
            yield { first, last };
            first = last;
            remaining -= count;
        }
    }

    const combine = (a: Block | null, b: Block | null): Block | null => {
        if (a === null || b === null) return a ?? b;
        let first = a.first;
        let middle = b.first;
        let right = middle;
        do {
            exchange_values(first, right);
            first = successor(first);
            right = successor(right);
            if (equal(first, middle)) middle = right;
        } while (!equal(right, b.last));

        right = middle;
        while (!equal(right, b.last)) {
            exchange_values(first, right);
            first = successor(first);
            right = successor(right);
            if (equal(first, middle)) middle = right;
            else if (equal(right, b.last)) right = middle;
        }
        return { first: a.first, last: b.last };
    };

    const result = reduce_balanced_iterable(blocks(), combine, null);
    const last = result?.last ?? f;
    post(() => equal(last, successor(f, n)), "The result must be just past the reversed range.");
    post(() => {
        let it = f;
        for (let i = n - 1; i >= 0; --i) {
            if (!Object.is(source(it), original[i])) return false;
            it = successor(it);
        }
        return true;
    }, "The output must equal the input in reverse order.");
    return last;
}

function __reverse_n_adaptive_iterative_usage() {
    const d = sequence([1, 2, 3, 4, 5, 6, 7], "d", undefined, "sll");
    const buffer = sequence([0, 0, 0]);
    reverse_n_adaptive_iterative(begin(d), size(d), begin(buffer), size(buffer));
    print(d);
}

function __reverse_n_adaptive_iterative_attributes() {
}
