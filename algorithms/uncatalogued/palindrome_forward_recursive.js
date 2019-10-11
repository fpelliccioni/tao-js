function palindrome_forward_recursive(f, n, r) {
    if (n == 0) return [true, f];
    if (n == 1) return [true, successor(f)];

    var ret = palindrome_forward_recursive(successor(f), n - 2, r);
    var ret_first = ret[0];
    var f2 = ret[1];

    if ( ! ret_first) return ret;
    if ( ! r(source(f), source(f2))) return [false, f2];

    return [true, successor(f2)];
}

function palindrome_forward(f, n, r) {
    return palindrome_forward_recursive(f, n, r)[0];
}

function usage() {
    
    
    var word = sequence(['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'], "word");
    // var word = sequence(['e', 'v', 'i', 'x', 'a', 't', 'i', 'v', 'e'], "word");
    
    var f = begin(word);
    var n = size(word);
    
    var res = palindrome_forward(f, n, eq);
    
    
    if (res[0]) {
        print('the word is palindrome');
    } else {
        print('the word not is palindrome');
    };

}

function attributes() {

}

