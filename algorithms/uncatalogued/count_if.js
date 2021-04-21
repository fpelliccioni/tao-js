function count_if(f, l, p) {
    var res = count_if_basis(f, l, p, 0);
    return res;
}

function usage() {

    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d", even);
    var f = begin(d);
    var l = end(d);

    var n = count_if(f, l, even);

    print("Even numbers: ");
    print(n);
}

function attributes() {

}

