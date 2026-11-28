function push_heap_gnu_1<T>(f: Iter<T>, l: Iter<T>, r: Relation<T>) {
    //precondition: [f, l - 1) is a valid heap

    l = predecessor(l);
    const value = source_move(l);
    push_heap_gnu_helper(f, distance(f, l), 0, move_obj(value), r);
}

function __push_heap_gnu_1_usage() {
    // Copied from The GNU C++ Library implementation of std::push_heap
    function push_heap_gnu_helper<T>(f: Iter<T>, hole_idx: number, top_idx: number, value: T, r: Relation<T>) {
        //precondition: TODO
        let parent_idx = half(hole_idx - 1);
        while (true) {
            if (hole_idx <= top_idx) {
                break;
            }

            const p = successor(f, parent_idx);
            if ( ! r(source(p), value)) {
                break;
            }

            sink_move_from_it(successor(f, hole_idx), p);
            hole_idx = parent_idx;
            parent_idx = half(hole_idx - 1);
        }
        sink_move(successor(f, hole_idx), value);
    }

    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 1], "s");
    const s = sequenceTree([10, 8, 6, 4, 5, 3, 7], "s");
    //var s = sequenceTree([10, 8, 6, 4, 5, 3, 11], "s");

    const [f, l] = rng(s);

    print(s);
    push_heap_gnu_1(f, l, lt);
    print(s);
}

function __push_heap_gnu_1_attributes() {
}
