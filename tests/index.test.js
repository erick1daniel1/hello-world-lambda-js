const sayHello = require("../index").sayHello;

test("debe imprimir mi hello world", () => {
    const result = sayHello();
    expect(result).toBe("Hello world");
});
