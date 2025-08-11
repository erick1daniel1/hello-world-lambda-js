const sayHello = () => {
    console.log('Hello world');
    console.log('log desde develop');
    return 'Hello world';
};

module.exports = {
    sayHello
};

if (require.main === module) {
    sayHello();
}