function push_heap_gnu_0(f, l, r) {
    //precondition: [f, l - 1) is a valid heap

    l = predecessor(l);
    var value = source_move(l);
    push_heap_gnu_helper(f, distance(f, l), 0, move_obj(value), r);
}

function usage() {
    // Copied from The GNU C++ Library implementation of std::push_heap
    function push_heap_gnu_helper(f, hole_idx, top_idx, value, r) {
        //precondition: TODO
        var parent_idx = half(hole_idx - 1);
        while (hole_idx > top_idx && r(source(successor(f, parent_idx)), value)) {
            sink_move_from_it(successor(f, hole_idx), successor(f, parent_idx));
            hole_idx = parent_idx;
            parent_idx = half(hole_idx - 1);
        }
        sink_move(successor(f, hole_idx), value);
    }

    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 1], "s");
    var s = sequenceTree([10, 8, 6, 4, 5, 3, 7], "s");
    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 11], "s");

    var f = begin(s);
    var l = end(s);

    print(s);
    push_heap_gnu_0(f, l, lt);
    print(s);
}

function attributes() {

}

