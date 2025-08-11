const sayHello = () => {
    console.log('Hello world');
    return 'Hello world';
};

module.exports = {
    sayHello
};

if (require.main === module) {
    sayHello();
}