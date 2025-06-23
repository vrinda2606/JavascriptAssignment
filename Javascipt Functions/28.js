function executeFunction(func) {
    return func();
}
console.log("\n Pass a JavaScript function as parameter:");
console.log(executeFunction(() => 'Hello, World!'));
