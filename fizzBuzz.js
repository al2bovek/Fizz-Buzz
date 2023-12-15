"use strict";
export default function fizzBuzz(s, e) {
    const goal = [];
    const arr = [];
    for (let i = s; i <= e; i++) {
        arr.push(i);
    }
    for (const el of arr) {
        if (el % 3 !== 0 && el % 5 !== 0) goal.push(el);
        if (el % 3 === 0 && el % 5 !== 0) goal.push('Fizz');
        if (el % 3 !== 0 && el % 5 === 0) goal.push('Buzz');
        if (el % 3 === 0 && el % 5 === 0) goal.push('FizzBuzz');
    }
    return goal;
}