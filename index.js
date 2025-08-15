const sayHello = () => {
    console.log('Hello world');
    console.log('rama feature con validaciones');
    return 'Hello world';
};

module.exports = {
    sayHello
};

if (require.main === module) {
    sayHello();
}