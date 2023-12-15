"use strict";
import fizzBuzz from "./fizzBuzz.js";
const i_1 = document.querySelector('#i_1');
const i_2 = document.querySelector('#i_2');
const p_1 = document.querySelector('#p_1');
const i_b = document.querySelector('#i_b');

p_1.addEventListener('click', () => p_1.textContent = fizzBuzz(i_1.value, i_2.value));
p_1.addEventListener('click', () => {if(i_1.value > i_2.value) p_1.textContent = 'Error wrong input'});
i_b.addEventListener('click', () => p_1.textContent = 'Click for Result');


