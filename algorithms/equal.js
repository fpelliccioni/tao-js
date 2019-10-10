function equal_r(f, l, f2, r) {
    while ( ! equal(f, l)) {
        if ( ! r(source(f), source(f2))) {
            return false;
        }

        f = successor(f);
        f2 = successor(f2);
    }
    return true;
}

function usage() {
    
    
    var d1_raw = ['e', 'v', 'i', 't', 'a', 't', 'i', 'v', 'e'];
    var d2_raw = ['e', 'v', 'i', 't', 'x', 't', 'i', 'v', 'e'];
    
    var d1 = sequence(d1_raw, "d1");
    var d2 = sequence(d2_raw, "d2");
    
    var f = begin(d1);
    var l = end(d1);
    var f2 = begin(d2);
    
    var res = equal_r(f, l, f2, eq);
    print(res);

}

function attributes() {

}

