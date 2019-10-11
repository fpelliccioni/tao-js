function copy_n(f_i, n, f_o) {
    while (n != 0) {
        sink(f_o, source(f_i));
        f_i = successor(f_i);
        f_o = successor(f_o);
        --n;
    }
    return [f_i, f_o];
}

function usage() {

}

function attributes() {

}

