if ( ! Number.prototype.add) {
    Number.prototype.add = function (x) {
        if (typeof x === 'undefined') x = 0;
        return this + x;
    };
}

if ( ! Number.prototype.multiply) {
    Number.prototype.multiply = function (x) {
        if (typeof x === 'undefined') x = 1;
        return this * x;
    };
}

if ( ! Number.prototype.additive_identity) {
    Number.prototype.additive_identity = function () {
        return 0;
    };
}

if ( ! Number.prototype.multiplicative_identity) {
    Number.prototype.multiplicative_identity = function () {
        return 1;
    };
}

if ( ! Number.prototype.negate) {
    Number.prototype.negate = function () {
        return -this;
    };
}

if ( ! Number.prototype.multiplicative_inverse) {
    Number.prototype.multiplicative_inverse = function () {
        return this.multiplicative_identity() / this;
    };
}

function SquareMatrix(n, data) {
    this.n = n;

    if (typeof data === "undefined" || data.length % n != 0)
        this.data = new Array(n * n);
    else
        this.data = data;

    this.str = function() {
        var res = "| ";
        for (var i = 0; i < this.data.length; ++i) {
            res += this.data[i] + " ";
            if (i % this.n) res += "| ";
        }
        return res;
    }

    this.equal = function(x) {
        if (this.n != x.n) return false;
        for (var i = 0; i < this.data.length; ++i) {
            if (x.data[i] != this.data[i]) {
                return false;
            }
        }
        return true;
    }

    this.add = function(x) {
        if (this.n != x.n) return undefined;

        var res = new SquareMatrix(this.n);
        for (var i = 0; i < this.data.length; ++i) {
            res.data[i] = this.data[i] + x.data[i];
        }
        return res;
    };

    this.additive_identity = function() {
        var res = new SquareMatrix(this.n);
        for (var i = 0; i < this.data.length; ++i) {
            res.data[i] = 0;
        }
        return res;
    }

    this.negate = function() {
        var res = new SquareMatrix(this.n);
        for (var i = 0; i < this.data.length; ++i) {
            res.data[i] = -this.data[i];
        }
        return res;
    };

    this.index = function(i, j) {
        return i * this.n + j;
    }

    this.multiply = function(x) {
        if (this.n != x.n) return undefined;

        var res = new SquareMatrix(this.n);
        for (var i = 0; i < res.data.length; ++i) {
            res.data[i] = 0;
        }

        for (var i = 0; i < this.n; ++i) {
            for (var j = 0; j < this.n; ++j) {
                for (var k = 0; k < this.n; ++k) {
                    res.data[this.index(i, j)] += this.data[this.index(i, k)] * x.data[this.index(k, j)];
                }
            }
        }
        return res;
    };

    this.multiplicative_identity = function() {
        var res = new SquareMatrix(this.n);
        for (var i = 0; i < this.data.length; ++i) {
            res.data[i] = 0;
        }
        var i = 0;
        while (i < this.data.length) {
            res.data[i] = 1;
            i += this.n + 1;
        }
        return res;
    }

    this.multiplicative_inverse = function() {
        // There is no simple formula to find the inverse of a nxn matrix with n > 2.
        if (this.n > 2) return undefined;

        var res = new SquareMatrix(this.n);

        res.data[0] = this.data[3];
        res.data[1] = -this.data[1];
        res.data[2] = -this.data[2];
        res.data[3] = this.data[0];

        // Check if the matrix is invertible
        var tmp = this.multiply(res);
        if ( ! tmp.equal(this.multiplicative_identity())) {
            return undefined;
        }
        return res;
    }
}



var add = binary_operation(function add(x, y) {return x.add(y);});
var multiply = binary_operation(function multiply(x, y) {return x.multiply(y);});
var negate = unary_operation(function negate(x, y) {return x.negate();});

var additive_identity = unary_operation(function additive_identity(x) {return x.additive_identity();});
var additive_inverse = unary_operation(function additive_inverse(x) {return x.negate();});

var multiplicative_identity = unary_operation(function multiplicative_identity(x) {return x.multiplicative_identity();});
var multiplicative_inverse = unary_operation(function multiplicative_inverse(x) {return x.multiplicative_inverse();});


var identity_elements = {
    "add": additive_identity,
    "multiply": multiplicative_identity,
};

var identity_element = function(op, x) {
    var getter = identity_elements[op.inner_name];
    if (getter) return getter(x);
    return undefined;
}

var inverse_operations = {
    "add": additive_inverse,
    "multiply": multiplicative_inverse,
};

var inverse_operation = function(op, x) {
    var getter = inverse_operations[op.inner_name];
    if (getter) return getter(x);
    return undefined;
}



// print(x.inner_name)