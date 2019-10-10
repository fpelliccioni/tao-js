const acorn = require("acorn")
const walk = require("acorn-walk")
const fetch = require("node-fetch");

// curl -i https://api.github.com/repos/fpelliccioni/tao-js/contents/algorithms/

function algorithm_name(filename) {
    return filename.split('.').slice(0, -1).join('.');
}


async function main() {  
    const response = await fetch('https://api.github.com/repos/fpelliccioni/tao-js/contents/algorithms/');
    const dir = await response.json();
    // console.log(JSON.stringify(myJson));

    for(var k in dir) {
        // console.log(k, dir[k]);
        console.log(dir[k].name);
        console.log(algorithm_name(dir[k].name));
        console.log(dir[k].download_url);
        console.log(dir[k].html_url);

        const response = await fetch(dir[k].download_url);
        const code = await response.text();
        console.log(code)
        
        var p = acorn.parse(code);
        // console.log(p);
        // console.log(p.body);

        for (var n in p.body) {
            console.log(n, p.body[n]);
        }
        // console.log(p.body[0].id.name);
        
    }
}
    
(async () => {
    try {
        var text = await main();
        // console.log(text);
    } catch (e) {
        console.log(e);
        // Deal with the fact the chain failed
    }
})();



// const fs = require("fs");

// fs.readFile("algorithms/min_element.js", "utf8", function (err, code) {
//     if (err) throw err;
//     console.log(code);

//     var p = acorn.parse(code);
//     console.log(p);
//     console.log(p.body);
//     console.log(p.body[0].id.name);
// });


// // var func = `function min_element(f, l, r) {
// //     if (equal(f, l)) return l;

// //     var m = f;
// //     f = successor(f);

// //     while ( ! equal(f, l)) {
// //         if (r(source(f), source(m))) {
// //             m = f;
// //         }
// //         f = successor(f);
// //     }
// //     return m;
// // }`
