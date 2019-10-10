function palindrome_naive(seq_arr, r) {
    var seq = sequence(seq_arr, "seq");
    var seq_arr_rev = seq_arr.slice().reverse();
    var seq_rev = sequence(seq_arr_rev, "seq_rev");

    var f = begin(seq);
    var l = end(seq);
    var f2 = begin(seq_rev);

    var res = equal_r(f, l, f2, r);

    return res;
}

function usage() {
    //var word_arr = ['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'];
    var word_arr = ['e', 'v', 'i', 'x', 'a', 't', 'i', 'v', 'e'];
    
    var res = palindrome_naive(word_arr, eq);
    if (res) {
        print('the word is palindrome');
    } else {
        print('the word not is palindrome');
    };
}

function attributes() {

}

