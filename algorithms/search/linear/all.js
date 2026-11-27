/**
 * @template T
 * @typedef {{data: {data: T[]}, index: number}} TaoIterator
 */

/**
 * Tests whether every element in [f, l) satisfies the predicate.
 * @template T
 * @param {TaoIterator<T>} f - Beginning of the range.
 * @param {TaoIterator<T>} l - End of the range, excluded.
 * @param {(value: T) => boolean} p - Predicate applied to each element.
 * @returns {boolean}
 */
function all(f, l, p) {
    const np = find_if_not(f, l, p);
    return equal(l, np);
}

function usage() {


    {
        const even = predicate(x => (x & 1) === 0);
        const d = sequence(array_random(), "d");
        const f = begin(d);
        const l = end(d);

        if (all(f, l, even)) {
            print("All the elements of the sequence are even.");
        } else {
            print("There is at least one item in the sequence that is not even.");
        }
    }
}

function attributes() {

}

