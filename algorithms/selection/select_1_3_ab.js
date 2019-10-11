function select_1_3_ab(a, b, c, r) {
    // precondition: a <= b
    
    return ! r(c, b) ? 
                b :                  // a, b, c are sorted
                select_1_2(a, c, r); // b is not the median
}


function usage() {
    var a = 1;
    var b = 2;
    var c = random_int();
    
    var m = select_1_3_ab(a, b, c, lt);
    print(m);
}

function attributes() {

}

