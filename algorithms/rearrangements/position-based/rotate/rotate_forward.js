// Nontrivial rotate using forward iterators
function rotate_forward(f, m, l) {
    // precondition: mutable_bounded_range(f, l) ∧ f ≺ m ≺ l
    var ref = {f: f, m: m};
    rotate_forward_step(ref, l);
    var m_prime = ref.f;
    while (ref.m != l) {
        rotate_forward_step(ref, l);
    }
    return m_prime;
}

function usage() {
    function exchange_values(x, y) {
        var t = source(x);
        sink(x, source(y));
        sink(y, t);
    }

    // function rotate_forward_step(f, m, l) {
    //     var c = m;
    //     do {
    //         exchange_values(f, c);
    //         f = successor(f);
    //         c = successor(c);

    //         if (f == m) {
    //             m = c;
    //         }
    //     } while (c != l);
    // }

    function rotate_forward_step(ref, l) {
        // precondition: mutable bounded range(ref.f, l) ∧ ref.f ≺ ref.m ≺ l
        var c = ref.m;
        do {
            exchange_values(ref.f, c);
            ref.f = successor(ref.f);
            c = successor(c);

            if (ref.f == ref.m) {
                ref.m = c;
            }
        } while (c != l);
    }

    var s = sequence(array_random(), "s", undefined, "sll");
    print(s);
    rotate_forward(begin(s), successor(begin(s), 3), end(s));
    print(s);
}

function attributes() {

}

