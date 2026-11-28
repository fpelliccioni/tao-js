# Coverage of Stepanov’s books

The references in the TypeScript files identify the published algorithm or the closest documented variant. Page numbers use the authors’ edition of *Elements of Programming* and the printed Addison-Wesley edition of *From Mathematics to Generic Programming*. A section or page range points to the surrounding discussion when an exact listing page is unavailable. Exercises and companion-only implementations are marked in the source comments.

The catalog snapshot has **218 algorithms**, with a book reference in **171** source files. 126 cite *Elements of Programming* and 54 cite *From Mathematics to Generic Programming*. Some cite both.

## Elements of Programming

The [official source index](https://elementsofprogramming.com/code.html#algorithms) points to [`eop.h`](https://elementsofprogramming.com/code/eop.h), including variants and exercises. [`eop.cpp`](https://elementsofprogramming.com/code/eop.cpp) drives tests and interactive examples. The [book PDF](https://elementsofprogramming.com/eop.pdf) supplies printed page numbers.

Of the 186 identifiers in the official algorithm index, 70 have an exact name in the lab catalog. The index also includes runtime primitives and helper operations. The inventory below tracks names, so an unmatched name may have a related implementation.

**Documented variants under another name**

- `subtractive_gcd_nonzero` → `gcd0`
- `exchange_values` → `exchange_values_2`
- `rotate_bidirectional_nontrivial` → `rotate_bidirectional`
- `rotate_forward_nontrivial` → `rotate_forward`
- `partition_stable_with_buffer` → `partition_stable_with_buffer_0`

**Indexed names without a matching catalog entry or one of the aliases above**

`abs`, `bifurcate_compare`, `bifurcate_compare_nonempty`, `bifurcate_equivalent`, `bifurcate_equivalent_nonempty`, `bifurcate_similar`, `bifurcate_similar_nonempty`, `circular`, `circular_nonterminating_orbit`, `collision_point`, `collision_point_nonterminating_orbit`, `combine_linked_nonempty`, `combine_ranges`, `compare_strict_or_reflexive`, `connection_point`, `connection_point_nonterminating_orbit`, `convergent_point`, `empty`, `euclidean_norm`, `fast_subtractive_gcd`, `fibonacci`, `find_last`, `height`, `height_recursive`, `increment`, `is_left_successor`, `is_right_successor`, `k_rotate_from_permutation_indexed`, `k_rotate_from_permutation_random_access`, `less`, `lower_bound_predicate`, `median_5`, `merge_linked_nonempty`, `merge_n_adaptive`, `merge_n_with_buffer`, `orbit_structure`, `orbit_structure_nonterminating_orbit`, `partition_linked`, `partition_point`, `partition_stable_iterative`, `partition_stable_n`, `partition_stable_n_nonempty`, `partition_stable_singleton`, `partition_trivial`, `phased_applicator`, `power_accumulate`, `power_accumulate_positive`, `power_left_associated`, `power_right_associated`, `power_unary`, `quotient_remainder_nonnegative`, `quotient_remainder_nonnegative_iterative`, `reachable`, `reachable_nonempty`, `remainder_nonnegative`, `remainder_nonnegative_iterative`, `reverse_append`, `reverse_indexed`, `reverse_n_bidirectional`, `reverse_swap_ranges`, `reverse_swap_ranges_bounded`, `reverse_swap_ranges_n`, `reverse_with_temporary_buffer`, `rotate`, `rotate_forward_annotated`, `rotate_forward_step`, `rotate_indexed_nontrivial`, `rotate_nontrivial`, `rotate_partial_nontrivial`, `rotate_with_buffer_backward_nontrivial`, `rotate_with_buffer_nontrivial`, `select_0_2`, `select_0_3`, `select_1_4`, `select_1_4_ab`, `select_1_4_ab_cd`, `select_2_3`, `select_2_5`, `select_2_5_ab`, `select_2_5_ab_cd`, `slow_quotient`, `slow_remainder`, `sort_linked_nonempty_n`, `sort_n`, `sort_n_adaptive`, `sort_n_with_buffer`, `split_linked`, `subtractive_gcd`, `swap`, `swap_basic`, `terminating`, `transpose_operation`, `traverse`, `traverse_nonempty`, `traverse_phased_rotating`, `traverse_rotating`, `underlying_ref`, `upper_bound_predicate`, `weight`, `weight_recursive`, `weight_rotating`.

**Indexed names available as lab primitives or helpers**

`begin`, `complement`, `complement_of_converse`, `converse`, `distance`, `end`, `equal`, `exchange_values`, `predicate_source`, `relation_source`, `size`.

### Programming exercises

The book supplies the exercise statements. The companion header mixes complete implementations, related variants, and comments that simply mark an exercise. The companion `eop.cpp` is a driver with tests and examples. Use the book as the inventory and the header as a reference when it implements the requested variant.

| Chapter | Covered in the catalog | Remaining programming exercises |
| --- | --- | --- |
| 2. Transformations and their orbits | — | 2.1 checked 32-bit addition domain, 2.2 orbit intersection, 2.3 guarded convergence, 2.6 action-based rewrites |
| 3. Associative operations | Existing numeric and power algorithms cover parts of the material | 3.2 integral specializations and 3.3 accumulate-based rewrites still need a variant-by-variant comparison |
| 4. Linear orderings | — | 4.4 stable `select_2_4`, 4.5 median of five with fewer comparisons, 4.8 three-way comparison variants |
| 5. Ordered algebraic structures | 5.3 `stein_gcd` and `stein_gcd_nonnegative` | — |
| 6. Iterators | 6.1 quantifiers, 6.2 `count_if_for_each`, 6.3 counted searches, quantifiers, counts (including explicit accumulators), and value and iterator-projection reductions, 6.5 all four `find_mismatch` combinations, 6.6 `partitioned_n`, 6.7 `equal_range`, 6.8 `find_backward_if`, 6.9 `palindrome_bidirectional` | — |
| 7. Coordinate structures | — | 7.2 weight by visit kind, 7.3 DAG check, 7.6 nonempty tree comparison |
| 8. Coordinates with mutable successors | — | 8.2 linked combination including empty inputs, 8.4 stable linked `unique` |
| 9. Copying algorithms | 9.5 `combine_copy_n` and `combine_copy_backward_n` | — |
| 10. Rearrangements | 10.3 `cycle_to_2n_1` | 10.4 and 10.5 arbitrary rearrangement with marking and with constant storage |
| 11. Partition and merging | 11.1 `partitioned_at_point`, 11.2 `potential_partition_point`, 11.3 `partition_semistable`, 11.5 `partition_semistable_nonempty`, 11.6 `partition_forward`, 11.7 `partition_single_cycle`, 11.8 `partition_sentinel`, 11.9 `partition_single_cycle_sentinel`, 11.10 `partition_stable_n_adaptive`, 11.11 `sort_linked_nonempty_n_iterative`, 11.12 `reverse_n_adaptive_iterative`, 11.13 `partition_stable_n_iterative` | — |
| 12. Composite objects | — | 12.1–12.6 pair, triple, fixed-size array and projection exercises, 12.8 deque capacity interface, 12.9 iterator adapter |

The table focuses on exercises that request an implementation, rewrite, or programming interface. References for listed examples are included in the lab.

## From Mathematics to Generic Programming

The [official downloads](https://www.fm2gp.com/downloads.html) include nine chapter headers. The corresponding `.cpp` files exercise the examples. The [publisher’s sample and index](https://ptgmedia.pearsoncmg.com/images/9780321942043/samplepages/9780321942043.pdf) and [chapter 2](https://www.informit.com/articles/article.aspx?p=2264460) provide page references.

The table lists named free functions in each header, grouping overloads under a single name and leaving class methods out. A name match only indicates a catalog entry with that spelling. In particular, the lab has the counted EOP interfaces `lower_bound_n` and `upper_bound_n`, and the chapter 10 header uses two iterators for `lower_bound` and `upper_bound`.

| Chapter | Exact catalog name | Other names in the header |
| --- | --- | --- |
| [2](https://www.fm2gp.com/code/ch02.h) | `multiply0`, `multiply1`, `multiply2`, `multiply3`, `multiply4` | `half`, `mult_acc0`, `mult_acc1`, `mult_acc2`, `mult_acc3`, `mult_acc4`, `multiply_by_15`, `odd` |
| [3](https://www.fm2gp.com/code/ch03.h) | `mark_sieve`, `sift`, `sift0`, `sift1` | `gcm` |
| [4](https://www.fm2gp.com/code/ch04.h) | `gcd`, `largest_doubling`, `quotient`, `quotient_remainder`, `remainder`, `remainder_fibonacci` | `fast_segment_gcm`, `fast_segment_remainder`, `fast_segment_remainder1`, `gcm`, `gcm0`, `gcm1`, `gcm_remainder`, `half`, `odd`, `segment_remainder` |
| [7](https://www.fm2gp.com/code/ch07.h) | `multiply_accumulate0`, `multiply_accumulate_semigroup`, `multiply_group`, `multiply_monoid`, `multiply_semigroup`, `power_accumulate_semigroup`, `power_group`, `power_monoid`, `power_semigroup` | `fib0`, `fibonacci_iterative`, `half`, `identity_element`, `inverse_operation`, `mult_acc4`, `multiplicative_inverse`, `multiply_accumulate`, `odd` |
| [8](https://www.fm2gp.com/code/ch08.h) | — | `polynomial_value` |
| [10](https://www.fm2gp.com/code/ch10.h) | `find_if`, `find_if_n`, `partition_point_n` | `advance`, `distance`, `lower_bound`, `partition_point`, `upper_bound` |
| [11](https://www.fm2gp.com/code/ch11.h) | `gcd`, `reverse`, `reverse_copy`, `reverse_n_adaptive`, `reverse_n_with_buffer`, `swap_ranges`, `swap_ranges_n` | `gries_mills_rotate`, `half`, `odd`, `reverse_n`, `reverse_recursive`, `reverse_until`, `rotate`, `rotate_cycle_from`, `rotate_unguarded`, `swap`, `three_reverse_rotate` |
| [12](https://www.fm2gp.com/code/ch12.h) | `gcd`, `quotient_remainder`, `stein_gcd` | `even`, `extended_gcd` |
| [13](https://www.fm2gp.com/code/ch13.h) | `divides`, `fermat_test`, `is_prime`, `miller_rabin_test`, `multiplicative_inverse_fermat`, `smallest_divisor` | `identity_element`, `multiplicative_inverse` |

The `mult_acc*` variants appear in the lab as `multiply_accumulate*`. The `gcm*` and segment-remainder examples have numeric adaptations in the GCD and remainder categories. The multiplicative overloads of `power_*` appear with a `0` suffix in the lab.
