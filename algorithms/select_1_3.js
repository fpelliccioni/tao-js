function select_1_2(a, b, r) {
    return r(b, a) ? a : b;
}

function select_1_3_ab(a, b, c, r) {
    // precondition: a <= b
    
    return ! r(c, b) ? 
                b :                  // a, b, c are sorted
                select_1_2(a, c, r); // b is not the median
}

function select_1_3(a, b, c, r) {
    return r(b, a) ? 
              select_1_3_ab(b, a, c, r) 
            : select_1_3_ab(a, b, c, r);
}

function usage() {
    
    
    var tmp = array_random(3);
    var a = tmp[0];
    var b = tmp[1];
    var c = tmp[2];
    
    var m = select_1_3(a, b, c, lt);
    print(m);

}

function attributes() {

}

