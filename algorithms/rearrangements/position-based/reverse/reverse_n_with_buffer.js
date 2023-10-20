function reverse_n_with_buffer(f_i, n, f_b) {
    return reverse_copy(f_b, copy_n(f_i, n, f_b)[1], f_i);
}

function usage() {
    var s = sequence(array_random(), "s", undefined, "sll"); // singly-linked list
    var b = sequence(array_all_equal(size(s), '-'), "b");
    print(s);
    var r = reverse_n_with_buffer(begin(s), size(s), begin(b));
    print(s);
}

function attributes() {

}

