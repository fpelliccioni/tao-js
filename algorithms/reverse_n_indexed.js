function reverse_n_indexed(f, n) {
    var i = 0;
    --n;
    while (i < n) {
        iter_swap(successor(f, i), successor(f, n)); 
        ++i;
        --n;
    } 
}

function usage() {
    
    
    var s = sequence(array_random(), "s1");
    print(s);
    reverse_n_indexed(begin(s), size(s));
    print(s);
    print('...');

}

function attributes() {

}

