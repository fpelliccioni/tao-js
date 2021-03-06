function merge_copy(f, l, f2, l2, o, r) {
    var rs = relation_source(r);
    return combine_copy(f, l, f2, l2, o, rs);
}


function usage() {
    function relation_source(r) {
        return function(x, y) { return r(source(x), source(y)); }
    }

    var a1 = sequence(array_random(8), "a1");
    var a2 = sequence(array_random(5), "a2");
    insertion_sort(begin(a1), end(a1), lt);
    insertion_sort(begin(a2), end(a2), lt);

    var r = sequence(array_all_equal(size(a1) + size(a2), '-'), "r");

    merge_copy(begin(a1), end(a1), begin(a2), end(a2), begin(r), lt);

    print(r);
}

function attributes() {

}
