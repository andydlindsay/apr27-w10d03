"use strict";
const sayHello = (nameToSay, age) => {
    // return `hello ${nameToSay}`;
    console.log(`hello ${nameToSay}`);
};
const returningPromise = () => {
    return new Promise((res, rej) => {
        res('hello');
    });
};
const agatha = {
    penName: 'Agatha',
    writeBook: (title) => {
        return false;
    }
};
const higherOrder = (cb) => {
    cb('Alice');
};
higherOrder((title) => { return 'hello'; });
