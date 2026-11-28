// Reference: Elements of Programming, ch. 11, p. 189, exercise 11.2 (companion implementation in eop.h).

// Doc (es): Devuelve la posición donde terminaría el grupo que falla p si se particionara el rango. Requiere poder recorrerlo más de una vez.
// Doc (en): Returns the position where the group failing p would end after partitioning. Requires a multipass range.
function potential_partition_point<I extends ForwardIterator>(f: I, l: I, p: Predicate<ValueOf<I>>): I {
    return count_if_not_basis(f, l, p, f);
}

function __potential_partition_point_usage() {
    const d = seq(array_random(), even);
    const [f, l] = rng(d);
    const m = potential_partition_point(f, l, even);

    print("After p-partitioning the partition point would ocurr here:");
    const offset = distance(begin(d), m);
    print(offset);
    const partitionValue = source(m);
    print(partitionValue);

    print("Let's verify...");
    const p = partition_semistable(f, l, even);
    if (equal(m, p)) {
        print("Yeah!");
    } else {
        print('Impossible, this line will never be executed.');
    }
}

function __potential_partition_point_attributes() {
}
