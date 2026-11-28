// Reference: Elements of Programming, ch. 10, p. 174.
// Reference: From Mathematics to Generic Programming, ch. 11, p. 216 (ch11.h).

function reverse_n_with_buffer<T, U>(f_i: Iter<T>, n: number, f_b: Iter<U>) {
    return reverse_copy(f_b, copy_n(f_i, n, f_b)[1], f_i);
}

function __reverse_n_with_buffer_usage() {
    const s = seq(array_random(), "s", undefined, "sll"); // singly-linked list
    const b = seq(array_all_equal(size(s), '-'));
    print(s);
    const r = reverse_n_with_buffer(begin(s), size(s), begin(b));
    print(s);
}

function __reverse_n_with_buffer_attributes() {
}
