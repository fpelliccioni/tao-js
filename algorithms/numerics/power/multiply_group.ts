// n is an Integer.
// a is a NonCommutativeAdditiveGroup.

function multiply_group<T>(n: number, a: T) {
    if (n < 0) {
        n = -n;
        a = negate(a);
    }
    return multiply_monoid(n, a);
}

function __multiply_group_usage() {
    const n = 41;
    const a = 59;

    const p = multiply_group(n, a);
    print(p);

    class SquareMatrix {
        data: number[];

        constructor(readonly n: number, data?: number[]) {

            this.data = data === undefined || data.length % n !== 0 ? new Array<number>(n * n) : data;
        }

        add(x: SquareMatrix) {
            print("add() call")
            if (this.n != x.n) return undefined;

            const res = new SquareMatrix(this.n);
            for (let i = 0; i < this.data.length; ++i) {
                res.data[i] = this.data[i] + x.data[i];
            }
            return res;
        }

        negate() {
            const res = new SquareMatrix(this.n);
            for (let i = 0; i < this.data.length; ++i) {
                res.data[i] = -this.data[i];
            }
            return res;
        }

        str() {
            let res = "| ";
            for (let i = 0; i < this.data.length; ++i) {
                res += this.data[i] + " ";
                if (i % this.n) res += "| ";
            }
            return res;
        }
    }

    const m1 = new SquareMatrix(2, [1, 3, 7, 5]);
    print(m1.str());

    const m2 = multiply_group(-5, m1);
    if (typeof m2 !== "number") print(m2.str());



    // - NonCommutativeAdditiveGroup: is a Group where the associative binary operation is + and the identity element is 0
    //     commutativity is not required but could be present.
    // - Group is a set on which the following is defined:
    //        operation:                    x ° y
    //        operation:                    x^-1
    //        constant / identity element:  e
    //   and on which the following axiom holds:
    //        x ° (y ° z) = (x ° y) ° z       associativity
    //        x ° e = e ° x = x               identity
    //        x ° x^-1 = x^-1 ° x = e         cancellation
    // - commutativity (not required): x ° y = y ° x
}

function __multiply_group_attributes() {
}
