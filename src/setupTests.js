// import * as React from 'react';

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

global.localStorage = localStorageMock;

// const artificialTimeout = (fn) => {
//     setTimeout(() => {
//         fn;
//     }, 0);
// };

// React.Component.ComponentDidMount(fn) = artificialTimeout(fn);