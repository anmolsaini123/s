const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number)=> {
  if (number % 2 === 0) {
    console.log(number + " is even");
  } else {
    console.log(number + " is odd");
  }
});
