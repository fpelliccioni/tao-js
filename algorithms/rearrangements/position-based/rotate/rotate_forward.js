// Nontrivial rotate using forward iterators
function rotate_forward(f, m, l) {
    // precondition: mutable_bounded_range(f, l) ∧ f ≺ m ≺ l

    var ref = {f: f, m: m};
    rotate_forward_step(ref, l);
    f = ref.f;
    m = ref.m;
    var m_prime = f;
    while ( ! equal(m, l)) {
        var ref = {f: f, m: m};
        rotate_forward_step(ref, l);
        f = ref.f;
        m = ref.m;
    }
    return m_prime;
}

function usage() {
    function exchange_values(x, y) {
        var t = source(x);
        sink(x, source(y));
        sink(y, t);
    }

    function rotate_forward_step(ref, l) {
        // precondition: mutable_bounded_range(ref.f, l) ∧ ref.f ≺ ref.m ≺ l
        var f = ref.f;
        var m = ref.m;
        var c = m;
        do {
            exchange_values(f, c);
            f = successor(f);
            c = successor(c);

            if (f == m) {
                m = c;
            }
        } while ( ! equal(c, l));
        ref.f = f;
        ref.m = m;
    }

    var s = sequence(array_random(), "s", undefined, "sll");
    print(s);
    rotate_forward(begin(s), successor(begin(s), 3), end(s));
    print(s);
}

function attributes() {

}

