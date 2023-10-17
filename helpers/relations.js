var eq = relation(function eq(x, y) {return x == y;});
var lt = relation(function lt(x, y) {return x < y;});
var gt = relation(function gt(x, y) {return x > y;});
var lte = relation(function lte(x, y) {return x <= y;});
var gte = relation(function gte(x, y) {return x >= y;});

function complement(r) {
    return function(a, b) {
        return !r(a, b);
    };
}

function converse(r) {
    return function(a, b) {
        return r(b, a);
    };
}

function complement_of_converse(r) {
    return complement(converse(r));
}