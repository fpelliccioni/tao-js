function palindrome_bidirectional<T>(f: Iter<T>, l: Iter<T>, r: Relation<T>) {
    while (true) {
        if (equal(f, l)) break;
        l = predecessor(l);

        if ( ! r(source(f), source(l))) return false;

        f = successor(f);
        if (equal(f, l)) break;
    }
    return true;
}

function __palindrome_bidirectional_usage() {
    //var word = sequence(['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'], "word");
    //var word = sequence(['e', 'v', 'i', 'x', 'a', 't', 'i', 'v', 'e'], "word");
    const word = sequence(['e', 'v', 'i', 't', 't', 'i', 'v', 'e']);

    const f = begin(word);
    const l = end(word);

    const res = palindrome_bidirectional(f, l, eq);

    if (res) {
        print('the word is palindrome');
    } else {
        print('the word not is palindrome');
    };

}

function __palindrome_bidirectional_attributes() {
}
