// Precondition: y belongs to the orbit from x.
function orbit_distance(x, y, f) {
    let steps = 0;
    while (x !== y) {
        x = f(x);
        ++steps;
    }
    return steps;
}
