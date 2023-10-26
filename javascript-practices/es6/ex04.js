/**
 * default parameter
 * 
 */

const print = function(strs, end='\n'){
    console.log(strs.join(end));
};

print(['hello', 'world', 'mysite']);
print(['hello', 'world', 'mysite'], '\t');