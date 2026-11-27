// Reference: Elements of Programming, ch. 10, p. 171, exercise 10.3 (implementation of the exercise).

function cycle_to_2n_1<T>(i: Iter<T>, f: IteratorPermutation<T>) {
    let k = f(i);
    if (equal(k, i)) return;

    const buf = sequence(array_all_equal(1, "-"), "buf");
    let b: Iter<T | string> = begin(buf);
    let b2: Iter<T | string> = i;

    sink(b, source(k));
    sink(k, source(b2));

    const [nextBuffer, nextInput] = swap_iters(b, b2);
    b = nextBuffer;
    b2 = nextInput;

    k = f(k);
    while ( ! equal(k, i)) {
        sink(b, source(k));
        sink(k, source(b2));

        const [nextBuffer, nextInput] = swap_iters(b, b2);
        b = nextBuffer;
        b2 = nextInput;

        k = f(k);
    }
    sink(i, source(b2));
}

function __cycle_to_2n_1_usage() {
    function swap_iters<A, B>(a: A, b: B): [B, A] {
        return [b, a];
    }

    function successorMod10(i: Iter<number>) {
        const f = begin(s);
        let index = distance(begin(s), i);
        ++index;
        index = index % 10;
        const ret = successor(f, index);
        return ret;
    }

    const s = sequence(array_random());
    cycle_to_2n_1(begin(s), successorMod10);
    print(s);
}

function __cycle_to_2n_1_attributes() {
}
