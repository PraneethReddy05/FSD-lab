const numbers = [1, 2, 3, 4, 5];
let [first,,third] = numbers;
numbers[0] = third;
numbers[2] = first;
console.log(numbers);