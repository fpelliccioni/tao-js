// Nontrivial rotate using forward iterators
function rotate_forward<T>(f: Iter<T>, m: Iter<T>, l: Iter<T>) {
    // precondition: mutable_bounded_range(f, l) ∧ f ≺ m ≺ l

    const ref = { f, m };
    rotate_forward_step(ref, l);
    f = ref.f;
    m = ref.m;
    const m_prime = f;
    while ( ! equal(m, l)) {
        const ref = { f, m };
        rotate_forward_step(ref, l);
        f = ref.f;
        m = ref.m;
    }
    return m_prime;
}

function __rotate_forward_usage() {
    function exchange_values<T, U>(x: Iter<T>, y: Iter<U>) {
        const t = source(x);
        sink(x, source(y));
        sink(y, t);
    }

    function rotate_forward_step<T>(ref: { f: Iter<T>; m: Iter<T> }, l: Iter<T>) {
        // precondition: mutable_bounded_range(ref.f, l) ∧ ref.f ≺ ref.m ≺ l
        let f = ref.f;
        let m = ref.m;
        let c = m;
        do {
            exchange_values(f, c);
            f = successor(f);
            c = successor(c);

            if (equal(f, m)) {
                m = c;
            }
        } while ( ! equal(c, l));
        ref.f = f;
        ref.m = m;
    }

    const s = sequence(array_random(), "s", undefined, "sll");
    print(s);
    rotate_forward(begin(s), successor(begin(s), 3), end(s));
    print(s);
}

function __rotate_forward_attributes() {
}
