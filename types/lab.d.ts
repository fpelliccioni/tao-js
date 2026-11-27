// Typed view of the opaque objects supplied by the lab runtime.
declare const iteratorElement: unique symbol;
declare const sequenceElement: unique symbol;

type Iter<T> = { readonly [iteratorElement]: T };
type Seq<T> = { readonly [sequenceElement]: T };
type Predicate<T> = (value: T) => boolean;

declare function find_if<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>): Iter<T>;
declare function find_if_not<T>(f: Iter<T>, l: Iter<T>, p: Predicate<T>): Iter<T>;
declare function equal<T>(f: Iter<T>, l: Iter<T>): boolean;

declare function predicate<T>(fn: Predicate<T>): Predicate<T>;
declare function array_random(): number[];
declare function sequence<T>(values: T[], name: string): Seq<T>;
declare function begin<T>(data: Seq<T>): Iter<T>;
declare function end<T>(data: Seq<T>): Iter<T>;
declare function print(message: string): void;
