// Typed view of the opaque objects supplied by the lab runtime.
declare const iteratorElement: unique symbol;
declare const sequenceElement: unique symbol;

type Iter<T> = { readonly [iteratorElement]: T };
type Seq<T> = { readonly [sequenceElement]: T };
type Predicate<T> = (value: T) => boolean;

type Relation<T> = (left: T, right: T) => boolean;
type Operation<T> = (left: T, right: T) => T;
type IteratorPermutation<T> = (iterator: Iter<T>) => Iter<T>;

declare function equal<T, U>(f: Iter<T>, l: Iter<U>): boolean;
declare function predicate<T>(fn: Predicate<T>): Predicate<T>;
declare function relation<T>(fn: Relation<T>): Relation<T>;
declare function array_random(n?: number, from?: number, to?: number): number[];
declare function array_all_equal<T = number>(n?: number, value?: T): T[];
declare function array_ascending(n?: number, from?: number): number[];
declare function array_descending(n?: number, from?: number): number[];
declare function array_from(value: string): string[];
declare function random_int(from?: number, to?: number): number;
declare function sequence<T>(values: readonly T[], name?: string, color?: Relation<T> | Predicate<T>, type?: string, drawChart?: boolean, drawTree?: boolean): Seq<T>;
declare function begin<T>(data: Seq<T>): Iter<T>;
declare function end<T>(data: Seq<T>): Iter<T>;
declare function source<T>(it: Iter<T>): T;
declare function sink<T, U>(it: Iter<T>, value: U): void;
declare function successor<T>(it: Iter<T>, n?: number): Iter<T>;
declare function successor<T extends number | Iter<unknown>>(it: T, n?: number): T;
declare function predecessor<T>(it: Iter<T>, n?: number): Iter<T>;
declare function distance<T, U>(f: Iter<T>, l: Iter<U>): number;
declare function size<T>(data: Seq<T>): number;
declare function capacity<T>(data: Seq<T>): number;
declare function print<T>(value: T): void;
declare function iter_swap<T, U>(a: Iter<T>, b: Iter<U>): void;
declare function exchange_values<T, U>(a: Iter<T>, b: Iter<U>): void;
declare function call<T>(r: Relation<T>, f: Iter<T>, l: Iter<T>): boolean;
declare function bind<T>(r: Relation<T>, value: T, arg?: number): Predicate<T>;
declare function eq<T>(a: T, b: T): boolean;
declare function lt<T>(a: T, b: T): boolean;
declare function gt<T>(a: T, b: T): boolean;
declare function lte<T>(a: T, b: T): boolean;
declare function gte<T>(a: T, b: T): boolean;
declare function digitSum(value: number): number;
declare function half(n: number): number;
declare function half_nonnegative(n: number): number;
declare function twice(n: number): number;
declare function odd(n: number): boolean;
declare function even(n: number): boolean;
declare function complement<T>(r: Relation<T>): Relation<T>;
declare function converse<T>(r: Relation<T>): Relation<T>;
declare function complement_of_converse<T>(r: Relation<T>): Relation<T>;
declare function source_move<T>(it: Iter<T>): T;
declare function sink_move<T, U>(it: Iter<T>, value: U): void;
declare function sink_move_from_it<T, U>(target: Iter<T>, source: Iter<U>): void;
declare function move_obj<T>(value: T): T;
declare function push_back<T>(seq: Seq<T>, value: NoInfer<T>): Seq<T>;
declare function swap_iters<T, U>(a: Iter<T>, b: Iter<U>): [Iter<U>, Iter<T>];
declare function register_move_distance(distance: number): void;
declare function register_custom_stat(name: string): void;
declare function increment_custom_stat(name: string): void;
declare function increment_swap_stat(): void;
declare function increment_assignment_stat(): void;
declare function track_variable<T>(value: T, name: string | number): void;
declare function snapshot(): void;
declare const sequenceTree: typeof sequence;

declare function binary_operation<T>(op: Operation<T>): Operation<T>;
declare function unary_operation<T>(op: (value: T) => T): (value: T) => T;
declare function add<T>(a: T, b: T): T;
declare function multiply<T>(a: T, b: T): T;
declare function negate<T>(value: T): T;
declare function multiplicative_identity<T>(value: T): T;
declare function multiplicative_inverse<T>(value: T): T;
declare function identity_element<T>(op: Operation<T>, value: T): T;
declare function inverse_operation<T>(op: Operation<T>, value: T): T;
declare const identity_elements: Record<string, (value: number) => number>;
declare class SquareMatrix {
    constructor(n: number, data?: number[]);
    str(): string;
    multiplicative_inverse(): SquareMatrix | undefined;
}

declare function predicate_source<T>(p: Predicate<T>): Predicate<Iter<T>>;
declare function relation_source<T>(r: Relation<T>): Relation<Iter<T>>;

// The corresponding examples supply these helpers in their usage code.
declare function modulo_multiply(modulus: number): Operation<number>;
declare function modulo_multiply_c(modulus: number): Operation<number>;
declare function are_coprime(m: number, n: number): boolean;
declare function cycle_to_internal<T, U>(i: Iter<T>, k: Iter<T>, permutation: IteratorPermutation<T>, buffer: Iter<U>): void;
declare function linear_insert<T>(f: Iter<T>, c: Iter<T>, r: Relation<T>): void;
declare function linear_insert_backward<T>(c: Iter<T>, l: Iter<T>, r: Relation<T>): void;
declare function shift_down<T>(f: Iter<T>, i: number, n: number): void;
declare function rotate_forward_step<T>(ref: {f: Iter<T>; m: Iter<T>}, l: Iter<T>): void;
declare function k_rotate_from_permutation_random_access<T>(f: Iter<T>, m: Iter<T>, l: Iter<T>): IteratorPermutation<T>;
declare function push_heap_gnu_helper<T>(f: Iter<T>, hole: number, top: number, value: T, r: Relation<T>): void;
declare function parent(index: number): number;

declare function pre(condition: () => boolean, message?: string): void;
declare function post(condition: () => boolean, message?: string): void;
declare function is_partitioned_n<T>(first: Iter<T>, count: number, test: Predicate<T>): boolean;
