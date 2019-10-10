const acorn = require("acorn")
// const walk = require("acorn-walk")
const fetch = require("node-fetch");
const fs = require('fs');


const user_def = 'fpelliccioni';
const repo_def = 'tao-js';

// curl -i https://api.github.com/repos/fpelliccioni/tao-js/contents/algorithms/

function algorithm_name(filename) {
    return filename.split('.').slice(0, -1).join('.');
}

function function_content(code, start, end) {
    return code.substring(start, end);
}

function function_extras_rename(code, old_name, new_name) {
    return code.replace(old_name, new_name);
}

function function_params_list(code, node) {
    var params = [];
    for(var k in node.params) {
        // console.log(k, node.params[k].name);
        params.push(node.params[k].name)
    }
    return params.join(", ");
}

function function_make_debuggable(code, node) {
    // return code.replace(old_name, new_name);

    const func_code = function_content(code, node.start, node.end);
    // console.log(code);
    // console.log(node);
    const params = function_params_list(code, node);
    // console.log(params);

    const old_name = node.id.name;
    const new_name = `__debug_${old_name}`;
    const ren_code = function_extras_rename(func_code, old_name, new_name);

    const new_func_code = `function ${old_name}(${params}) {
    var _f_ = start_f('${old_name}', ${params});
    var res = ${new_name}(${params});
    end_f(_f_);
    return res;
}`;
    
    return ren_code + '\n\n' + new_func_code;
}

async function main(user, repo) {  
    fs.mkdir('./build/', { recursive: true }, (err) => {
        if (err) throw err;
    });
    
    const response = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/algorithms/`);
    const dir = await response.json();
    // console.log(JSON.stringify(myJson));

    var file_content = '';
    var file_content_debug = '';

    for(var k in dir) {
        // console.log(k, dir[k]);
        // console.log(dir[k].name);
        // console.log(algorithm_name(dir[k].name));
        // console.log(dir[k].download_url);
        // console.log(dir[k].html_url);

        const filename = dir[k].name;
        const algo_name = algorithm_name(filename)

        const response = await fetch(dir[k].download_url);
        const code = await response.text();
        // console.log(code)
        
        var p = acorn.parse(code);
        // console.log(p);
        // console.log(p.body);

        for (var n in p.body) {
            // console.log(n, p.body[n]);
            const value = p.body[n];
            if (value.type == 'FunctionDeclaration') {
                // console.log(value.id.name);
                // console.log(value.start);
                // console.log(value.end);
                // console.log(function_content(code, value.start, value.end));
                const func_code = function_content(code, value.start, value.end);
                if (value.id.name == algo_name) {
                    file_content += func_code;
                    file_content += '\n\n';
                    file_content_debug += function_make_debuggable(code, value);
                    file_content_debug += '\n\n';
                } else if (value.id.name == 'usage'|| value.id.name == 'attributes') {
                    const new_name = `__${algo_name}_${value.id.name}`;
                    const ren_code = function_extras_rename(func_code, value.id.name, new_name);
                    file_content += ren_code;
                    file_content += '\n\n';
                    file_content_debug += ren_code;
                    file_content_debug += '\n\n';
                } else {
                    console.log(`warning: ignoring function ${value.id.name} in ${dir[k].download_url}`);
                }
            } else {
                console.log(value);
            }

        }
        // console.log(p.body[0].id.name);
    }


    fs.writeFile("./build/algorithms.js", file_content, function(err) {
            if(err) {
            return console.log(err);
        }
        console.log("./build/algorithms.js was saved!");
    }); 

    fs.writeFile("./build/algorithms_debug.js", file_content_debug, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("./build/algorithms_debug.js was saved!");
    }); 

}

(async () => {
    try {
        var text = await main(user_def, repo_def);
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
