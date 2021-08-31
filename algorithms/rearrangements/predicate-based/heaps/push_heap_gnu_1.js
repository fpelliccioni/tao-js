function push_heap_gnu_1(f, l, r) {
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
        while (true) {
            if (hole_idx <= top_idx) {
                break;
            }

            var p = successor(f, parent_idx);
            if ( ! r(source(p), value)) {
                break;
            }

            sink_move_from_it(successor(f, hole_idx), p);
            hole_idx = parent_idx;
            parent_idx = half(hole_idx - 1);
        }
        sink_move(successor(f, hole_idx), value);
    }

    //var s = sequence(array_random(), "s", undefined, undefined, false, true);
    //var s = sequence([10, 8, 6, 4, 5, 3, 1], "s", undefined, undefined, false, true);
    var s = sequence([10, 8, 6, 4, 5, 3, 7], "s", undefined, undefined, false, true);
    //var s = sequence([10, 8, 6, 4, 5, 3, 11], "s", undefined, undefined, false, true);

    var f = begin(s);
    var l = end(s);

    print(s);
    push_heap_gnu_1(f, l, lt);
    print(s);
}

function attributes() {

}

