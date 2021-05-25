// n is an Integer.
// a is a NonCommutativeAdditiveMonoid.

function multiply_monoid(n, a) {
    // precondition: n >= 0
    if (n == 0) return 0;  //TODO
    return multiply_semigroup(n, a);
}

function usage() {
    var n = random_int();
    var a = random_int();

    var p = multiply_monoid(n, a);
    print(p);

    function SquareMatrix(n, data) {
        this.n = n;

        if (typeof data === "undefined" || data.length % n != 0)
            this.data = new Array(n * n);
        else
            this.data = data;

        this.add = function(x) {
            print("add() call")
            if (this.n != x.n) return undefined;

            var res = new SquareMatrix(this.n);
            for (var i = 0; i < this.data.length; ++i) {
                res.data[i] = this.data[i] + x.data[i];
            }
            return res;
        };

        this.str = function() {
            var res = "| ";
            for (var i = 0; i < this.data.length; ++i) {
                res += this.data[i] + " ";
                if (i % this.n) res += "| ";
            }
            return res;
        }
    }

    var m1 = new SquareMatrix(2, [1, 3, 7, 5]);
    print(m1.str());

    var m2 = multiply_monoid(65, m1);
    print(m2.str());



    // - NonCommutativeAdditiveMonoid: is a Monoid where the associative binary operation is + and the identity element is 0
    //     commutativity is not required but could be present.
    // - Monoid is a set on which the following is defined:
    //        operation:                    x ° y
    //        constant / identity element:  e
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
    //        x ° e = e ° x = x               identity
    // - commutativity (not required): x ° y = y ° x
}

function attributes() {

}

