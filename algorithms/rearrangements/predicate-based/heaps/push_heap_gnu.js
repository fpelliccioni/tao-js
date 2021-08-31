function push_heap_gnu(f, l, r) {
    //precondition: [f, l - 1) is a valid heap

    l = predecessor(l);
    var value = source_move(l);
    push_heap_gnu_helper(f, distance(f, l), 0, move_obj(value), r);
}

function usage() {
    function parent(n) {
        return half(n - 1);
    }    

    function push_heap_gnu_helper(f, hole_idx, top_idx, value, r) {
        //precondition: TODO
        var parent_idx = half(hole_idx - 1);
        while (hole_idx > top_idx && r(source(successor(f, parent_idx)), value)) {
            sink_move(successor(f, hole_idx), source_move(successor(f, parent_idx)));
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
    push_heap_gnu(f, l, lt);
    print(s);
}

function attributes() {

}

