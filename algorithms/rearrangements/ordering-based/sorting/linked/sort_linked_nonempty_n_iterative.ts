// Reference: Elements of Programming, ch. 11, p. 199, exercise 11.11.

// Doc (es): Ordena de forma estable los primeros n nodos mediante reducción balanceada. Cambia los enlaces de los nodos y devuelve la nueva cabeza y el límite original.
// Doc (en): Stably sorts the first n nodes using balanced reduction. Relinks the nodes and returns the new head and the original end.
function sort_linked_nonempty_n_iterative<I extends {}, T>(
    f: I, n: number, r: Relation<T>, link: ForwardLinker<I, T>,
): [I, I | null] {
    // Precondition: r is a strict weak ordering over the values.
    pre(() => Number.isSafeInteger(n) && n > 0, "The count must be a positive safe integer.");
    let original!: Map<I, { index: number; value: T }>;
    let suffix: I | null = null;
    pre(() => {
        original = new Map();
        let node: I | null = f;
        for (let i = 0; i < n; ++i) {
            if (node === null || original.has(node)) return false;
            original.set(node, { index: i, value: link.value(node) });
            node = link.next(node);
        }
        if (node !== null && original.has(node)) return false;
        suffix = node;
        return true;
    }, "The range must contain n distinct linked nodes.");

    type Run = { first: I; last: I };
    function* runs() {
        let node: I | null = f;
        for (let i = 0; i < n && node !== null; ++i) {
            const current: I = node;
            node = link.next(current);
            link.setNext(current, null);
            yield { first: current, last: current };
        }
    }

    const merge = (a: Run | null, b: Run | null): Run | null => {
        if (a === null || b === null) return a ?? b;

        let left: I | null = a.first;
        let right: I | null = b.first;

        function take(): I {
            if (left === null || (right !== null && r(link.value(right), link.value(left)))) {
                const node = right!;
                right = link.next(node);
                return node;
            }

            const node = left;
            left = link.next(node);
            return node;
        }

        const first = take();
        let last = first;
        while (left !== null && right !== null) {
            const node = take();
            link.setNext(last, node);
            last = node;
        }
        link.setNext(last, left ?? right);
        return { first, last: left === null ? b.last : a.last };
    };

    const result = reduce_balanced_iterable(runs(), merge, null)!;
    link.setNext(result.last, suffix);

    post(() => {
        let node: I | null = result.first;
        let previous: { index: number; value: T } | undefined;
        const seen = new Set<I>();
        for (let i = 0; i < n; ++i) {
            if (node === null || seen.has(node)) return false;
            const entry = original.get(node);
            if (!entry || !Object.is(entry.value, link.value(node))) return false;
            if (previous && (r(entry.value, previous.value) ||
                (!r(previous.value, entry.value) && previous.index > entry.index))) return false;
            seen.add(node);
            previous = entry;
            node = link.next(node);
        }
        return node === suffix;
    }, "The same nodes and values must be stably sorted and linked to the original end.");
    return [result.first, suffix];
}

function __sort_linked_nonempty_n_iterative_usage() {
    const values = seq([4, 1, 3, 1, 2]);
    const links = seq([1, 2, 3, 4, -1]);
    const linker: ForwardLinker<number, number> = {
        next(i) {
            const next = source(successor(begin(links), i));
            return next === -1 ? null : next;
        },
        setNext(i, next) {
            sink(successor(begin(links), i), next ?? -1);
        },
        value(i) {
            return source(successor(begin(values), i));
        },
    };

    const [head] = sort_linked_nonempty_n_iterative(0, size(values), lt, linker);
    const nodes: number[] = [];
    for (let node: number | null = head; node !== null; node = linker.next(node)) {
        nodes.push(node);
    }
    const order = nodes.join(", ");
    print("Node order: " + order);
}

function __sort_linked_nonempty_n_iterative_attributes() {
}
