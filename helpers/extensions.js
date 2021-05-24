if ( ! Number.prototype.add) {
    Number.prototype.add = function (x) {
        if (typeof x === 'undefined') x = 0;
        return this + x;
    };
}

function add(x, y) {
    return x.add(y);
}

