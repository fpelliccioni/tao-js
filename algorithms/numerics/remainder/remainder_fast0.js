// Greeks "had no notion of zero".
function remainder_fast0(a, b) {
    if (a <= b) return a;
    if (a - b <= b) return a - b;
    a = remainder_fast0(a, b + b);
    if (a <= b) return a;
    return a - b
}

function usage() {
    var a = random_int();
    var b = random_int();

    var r = remainder_fast0(a, b);
    print(r);
}

function attributes() {

}

