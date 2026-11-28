// Reference: Elements of Programming, ch. 9, p. 150.

// Doc (es): Copia [f, l) a partir de o y devuelve el iterador que sigue al último elemento escrito. El destino debe tener espacio suficiente.
// Doc (en): Copies [f, l) starting at o and returns the iterator just past the last written element. The destination must have enough space.
function copy<T, U>(f: Iter<T>, l: Iter<T>, o: Iter<U>) {
    while ( ! equal(f, l)) {
        sink(o, source(f));
        o = successor(o);
        f = successor(f);
    }
    return o;
}

function __copy_usage() {
    const s = seq(array_ascending());
    const z = seq(array_descending());

    copy(successor(begin(s), 5), end(s), begin(z));

    print(z);
}

function __copy_attributes() {
}
