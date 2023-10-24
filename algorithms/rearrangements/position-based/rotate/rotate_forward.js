
// Nontrivial rotate using forward iterators
function rotate_forward(f, m, l) {
    // precondition: mutable_bounded_range(f, l) ∧ f ≺ m ≺ l
    rotate_forward_step(f, m, l);
    var m_prime = f;
    while (m != l) {
        rotate_forward_step(f, m, l);
    }
    return m_prime;
}

function usage() {
    function exchange_values(x, y) {
        var t = source(x);
        sink(x, source(y));
        sink(y, t);
    }

    function swap_step(obj) {
        exchange_values(obj.f0, obj.f1);
        obj.f0 = successor(obj.f0);
        obj.f1 = successor(obj.f1);
    }

    function rotate_forward_step(f, m, l) {
        var c = m;
        var swapObj = {f0: f, f1: c};
        do {
            swap_step(swapObj);
            f = swapObj.f0;
            c = swapObj.f1;
            if (f == m) {
                m = c;
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

