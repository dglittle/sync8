
function print_something() {
    console.log('hello something!!')
}

var some_var = 55

if (typeof exports != 'undefined') {
    exports.print_something = print_something
    exports.some_var = some_var
}
