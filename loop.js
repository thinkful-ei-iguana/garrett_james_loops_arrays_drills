'use strict';

function max(numbers) {
  let i = 0;
  let max = numbers[0];
  while(i < numbers.length) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    i++;
  }
  return max;
}
console.log(max([1,2,3,4,5]));

function min(numbers) {
  let i = 0;
  let min = numbers[0];
  while(i < numbers.length) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    i++;
  }
  return min;
}
console.log(min([1,2,34,5]));

function average(nums) {
  let sum = 0;
  nums.forEach(element => {
    sum += element;
  });

  return sum / nums.length;
}
console.log(average([1,1,1,1,1,1]));
