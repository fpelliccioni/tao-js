// template<typename _RandomAccessIterator, typename _Distance, typename _Tp,
// typename _Compare>
// _GLIBCXX20_CONSTEXPR
// void
// __push_heap(_RandomAccessIterator __first,
//  _Distance __holeIndex, _Distance __topIndex, _Tp __value,
//  _Compare& __comp)
// {
// _Distance __parent = (__holeIndex - 1) / 2;
// while (__holeIndex > __topIndex && __comp(__first + __parent, __value))
// {
// *(__first + __holeIndex) = _GLIBCXX_MOVE(*(__first + __parent));
// __holeIndex = __parent;
// __parent = (__holeIndex - 1) / 2;
// }
// *(__first + __holeIndex) = _GLIBCXX_MOVE(__value);
// }

// template<typename _RandomAccessIterator, typename _Distance,
// typename _Tp, typename _Compare>
// _GLIBCXX20_CONSTEXPR
// void
// __adjust_heap(_RandomAccessIterator __first, _Distance __holeIndex,
//    _Distance __len, _Tp __value, _Compare __comp)
// {
// const _Distance __topIndex = __holeIndex;
// _Distance __secondChild = __holeIndex;
// while (__secondChild < (__len - 1) / 2)
// {
// __secondChild = 2 * (__secondChild + 1);
// if (__comp(__first + __secondChild,
//       __first + (__secondChild - 1)))
//  __secondChild--;
// *(__first + __holeIndex) = _GLIBCXX_MOVE(*(__first + __secondChild));
// __holeIndex = __secondChild;
// }
// if ((__len & 1) == 0 && __secondChild == (__len - 2) / 2)
// {
// __secondChild = 2 * (__secondChild + 1);
// *(__first + __holeIndex) = _GLIBCXX_MOVE(*(__first
//                       + (__secondChild - 1)));
// __holeIndex = __secondChild - 1;
// }
// __decltype(__gnu_cxx::__ops::__iter_comp_val(_GLIBCXX_MOVE(__comp)))
// __cmp(_GLIBCXX_MOVE(__comp));
// std::__push_heap(__first, __holeIndex, __topIndex,
//         _GLIBCXX_MOVE(__value), __cmp);
// }

// template<typename _RandomAccessIterator, typename _Compare>
// _GLIBCXX20_CONSTEXPR
// void
// __make_heap(_RandomAccessIterator __first, _RandomAccessIterator __last,
//  _Compare& __comp)
// {
// typedef typename iterator_traits<_RandomAccessIterator>::value_type
// _ValueType;
// typedef typename iterator_traits<_RandomAccessIterator>::difference_type
// _DistanceType;

// if (__last - __first < 2)
// return;

// const _DistanceType __len = __last - __first;
// _DistanceType __parent = (__len - 2) / 2;
// while (true)
// {
// _ValueType __value = _GLIBCXX_MOVE(*(__first + __parent));
// std::__adjust_heap(__first, __parent, __len, _GLIBCXX_MOVE(__value),
//           __comp);
// if (__parent == 0)
//  return;
// __parent--;
// }
// }