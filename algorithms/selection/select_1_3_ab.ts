function select_1_3_ab<T>(a: T, b: T, c: T, r: Relation<T>) {
    // precondition: a <= b

    return ! r(c, b) ?
                b :                  // a, b, c are sorted
                select_1_2(a, c, r); // b is not the median
}


function __select_1_3_ab_usage() {
    const a = 1;
    const b = 2;
    const c = random_int();

    const m = select_1_3_ab(a, b, c, lt);
    print(m);
}

function __select_1_3_ab_attributes() {
}
