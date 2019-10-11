function palindrome_bidirectional(f, l, r) {
    while (true) {
        if (equal(f, l)) break;
        l = predecessor(l);

        if ( ! r(source(f), source(l))) return false;

        f = successor(f);
        if (equal(f, l)) break;
    }
    return true;
}

function usage() {
    
    
    //var word = sequence(['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'], "word");
    //var word = sequence(['e', 'v', 'i', 'x', 'a', 't', 'i', 'v', 'e'], "word");
    var word = sequence(['e', 'v', 'i', 't', 't', 'i', 'v', 'e'], "word");
    
    var f = begin(word);
    var l = end(word);
    
    var res = palindrome_bidirectional(f, l, eq);
    
    if (res) {
        print('the word is palindrome');
    } else {
        print('the word not is palindrome');
    };

}

function attributes() {

}

