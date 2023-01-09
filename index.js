function receivesAFunction (callback) {
    return callback();
}

function returnsANamedFunction(){
    const newFunction = (num1,num2) => (num1 + num2)
    return newFunction;
}

function returnsAnAnonymousFunction(){
    return (num3) => num3 * num3;
}