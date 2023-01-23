/** @type {import('jest').Config} */
const config = {
    verbose: true,
    testEnvironment: "jsdom",
    testMatch: ["**/assets/js/app.test.js"],
    // prevent an error "SyntaxError: Cannot use import statement outside a module"
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    // prevent an error "SyntaxError: Cannot use import statement outside a module"
    moduleFileExtensions: ["js"],
    // prevent an error "SyntaxError: Cannot use import statement outside a module"

};

module.exports = config;