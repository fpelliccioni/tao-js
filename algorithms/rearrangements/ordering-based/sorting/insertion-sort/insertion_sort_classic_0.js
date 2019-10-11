function linear_insert(f, c, r) {
  var value = source(c);
  while ( ! equal(f, c) && r(value, source(predecessor(c)))) {
    sink(c, source(predecessor(c)));
    c = predecessor(c);
  }
  sink(c, value); 
  return c;
}

function insertion_sort_classic_0(f, l, r) {
    if (equal(f, l)) return; 
    var c = successor(f);
    while ( ! equal(c, l)) {
        linear_insert(f, c, r);     
        c = successor(c);
    }
}

function usage() {
    
      
    //var s = sequence(array_random(), "s", lt);
    var s = sequence([34, 5], "s", lt);
    print(s);
    insertion_sort_classic_0(begin(s), end(s), lt);
    print(s);

}

function attributes() {

}

