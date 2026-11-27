function palindrome_naive<T>(seq_arr: T[], r: Relation<T>) {
    const seq = sequence(seq_arr, "seq");
    const seq_arr_rev = seq_arr.slice().reverse();
    const seq_rev = sequence(seq_arr_rev, "seq_rev");

    const f = begin(seq);
    const l = end(seq);
    const f2 = begin(seq_rev);

    const res = equal_r(f, l, f2, r);

    return res;
}

function __palindrome_naive_usage() {
    //var word_arr = ['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'];
    const word_arr = ['e', 'v', 'i', 'x', 'a', 't', 'i', 'v', 'e'];

    const res = palindrome_naive(word_arr, eq);
    if (res) {
        print('the word is palindrome');
    } else {
        print('the word not is palindrome');
    };
}

function __palindrome_naive_attributes() {
}
