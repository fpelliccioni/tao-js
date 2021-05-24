if ( ! Number.prototype.add) {
    Number.prototype.add = function (x) {
        if (typeof x === 'undefined') x = 0;
        return this + x;
    };
}

if ( ! Number.prototype.negate) {
    Number.prototype.negate = function () {
        return -this;
    };
}

function add(x, y) {
    return x.add(y);
}

function negate(x) {
    return x.negate();
}
