// function push_heap(f, hole_idx, top_idx, value, r) {
//     //precondition: TODO
//     var parent_idx = (hole_idx - 1) / 2;
//     while (hole_idx > top_idx && r(source(successor(f, parent_idx)), value)) {
//         sink_move(successor(f, hole_idx), source_move(successor(f, parent_idx)));
//         hole_idx = parent_idx;
//         parent_idx = (hole_idx - 1) / 2;
//     }
//     sink_move(successor(f, hole_idx), value);
// }

// function push_heap_gnu(f, l, r) {
//     //precondition: [f, l - 1) is a valid heap

//     l = predecessor(l);
//     var value = source_move(l);
//     push_heap(f, distance(f, l), 0, move_obj(value), r);
// }










// // ------------------------------------------------------------------------------------------



// function push_heap(f, __holeIndex, __topIndex, value, _Compare& __comp) {
//     _Distance __parent = (__holeIndex - 1) / 2;
//     while (__holeIndex > __topIndex && __comp(f + __parent, value)) {
//         *(f + __holeIndex) = _GLIBCXX_MOVE(*(f + __parent));
//         __holeIndex = __parent;
//         __parent = (__holeIndex - 1) / 2;
//     }
//     *(f + __holeIndex) = _GLIBCXX_MOVE(value);
// }

// function push_heap(f, l, _Compare __comp) {
//     typedef typename iterator_traits<_RandomAccessIterator>::value_type _ValueType;
//     typedef typename iterator_traits<_RandomAccessIterator>::difference_type _DistanceType;

//     // concept requirements
//     __glibcxx_function_requires(_Mutable_RandomAccessIteratorConcept<_RandomAccessIterator>)
//     __glibcxx_requires_valid_range(f, l);
//     __glibcxx_requires_irreflexive_pred(f, l, __comp);
//     __glibcxx_requires_heap_pred(f, l - 1, __comp);

//     __decltype(__gnu_cxx::__ops::__iter_comp_val(_GLIBCXX_MOVE(__comp))) __cmp(_GLIBCXX_MOVE(__comp));
//     _ValueType __value = _GLIBCXX_MOVE(*(l - 1));
//     push_heap(f, _DistanceType((l - f) - 1), _DistanceType(0), _GLIBCXX_MOVE(__value), __cmp);
// }



// function adjust_heap(f, __holeIndex, __len, value, _Compare __comp) {
//     const _Distance __topIndex = __holeIndex;
//     _Distance __secondChild = __holeIndex;
//     while (__secondChild < (__len - 1) / 2) {
//         __secondChild = 2 * (__secondChild + 1);
//         if (__comp(f + __secondChild, f + (__secondChild - 1)))
//             __secondChild--;
//         *(f + __holeIndex) = _GLIBCXX_MOVE(*(f + __secondChild));
//         __holeIndex = __secondChild;
//     }
//     if ((__len & 1) == 0 && __secondChild == (__len - 2) / 2) {
//         __secondChild = 2 * (__secondChild + 1);
//         *(f + __holeIndex) = _GLIBCXX_MOVE(*(f + (__secondChild - 1)));
//         __holeIndex = __secondChild - 1;
//     }
//     __decltype(__gnu_cxx::__ops::__iter_comp_val(_GLIBCXX_MOVE(__comp))) __cmp(_GLIBCXX_MOVE(__comp));
//     push_heap(f, __holeIndex, __topIndex, _GLIBCXX_MOVE(value), __cmp);
// }

// function make_heap(f, l,  _Compare& __comp) {
//     typedef typename iterator_traits<_RandomAccessIterator>::value_type _ValueType;
//     typedef typename iterator_traits<_RandomAccessIterator>::difference_type _DistanceType;

//     if (l - f < 2)
//         return;

//     const _DistanceType __len = l - f;
//     _DistanceType __parent = (__len - 2) / 2;
//     while (true) {
//         _ValueType value = _GLIBCXX_MOVE(*(f + __parent));
//         adjust_heap(f, __parent, __len, _GLIBCXX_MOVE(value), __comp);
//         if (__parent == 0)
//             return;
//         __parent--;
//     }
// }
