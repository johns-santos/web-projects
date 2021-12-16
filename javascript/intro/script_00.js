var dogAge = 7
var humanAge = (dogAge - 2) * 4 + 21

console.log(humanAge)

var x = 5
console.log(x++)

var num = 12
num /= 3
console.log(num)

var x = 3
var y = x++
console.log(y)
y += 1
console.log(y)

function getMilk (cash) {
  const bottleCost = 1.5
  const totalPurchases = Math.floor(cash / bottleCost)
  console.log(
    'You can purchase ' +
      totalPurchases +
      ' bottles of milk with ' +
      cash +
      ' dollars.'
  )
}

getMilk(10)
getMilk(5)

function lifeInWeeks (age) {
  const yearsLeft = 90 - age
  let days = yearsLeft * 365
  let weeks = yearsLeft * 52
  let months = yearsLeft * 12

  console.log(
    'You have ' +
      days +
      ' days, ' +
      weeks +
      ' weeks, and ' +
      months +
      ' months left.'
  )
}
lifeInWeeks(51)

function getMilk2 (money) {
  return money % 1.5
}
console.log(getMilk2(4))

console.log('===============')
console.log('===============')

// function bmiCalculator (weight, height) {
//   bmi = weight / Math.pow(height, 2)
//   return Math.round(bmi)
// }

// var bmi = bmiCalculator(65, 1.8)
// console.log(bmi)

// console.log('===============')
// console.log('===============')

// //    GENERATE a random number between 0 and 100
// var n = Math.floor(Math.random() * 101)
// console.log('random number : ' + n)

console.log('===============')
console.log('===============')

function bmiCalculator (weight, height) {
  var cal = weight / Math.pow(height, 2)
  var bmi = Math.round(cal)
  var interpretation = ''

  if (bmi <= 18.4) {
    interpretation = 'Your BMI is ' + bmi + ', so you are underweight.'
  } else if (bmi <= 24.8) {
    interpretation = 'Your BMI is ' + bmi + ', so you have a normal weight.'
  } else {
    interpretation = 'Your BMI is ' + bmi + ', so you are overweight.'
  }

  return interpretation
}
console.log(bmiCalculator(110.223, 1.7526))

console.log('===============')
console.log('===============')

// 1) If year is evenly divisible  by 4 continue, if not end - (NOT LEAP)
// 2) Determine if year is NOT evenly divisible  by 100, if so end - (IS LEAP)
// 3) Determine if year is evenly divisible by 400, is so end - (IS LEAP)
function isLeap (year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return 'Leap year.'
      } else {
        return 'Not leap year!'
      }
    } else {
      return 'Leap year.'
    }
  } else {
    return 'Not leap year'
  }
}
console.log(isLeap(2004))

console.log('===============')
console.log('===============')

function checkName (name) {
  var guestList = ['Angela', 'Jack', 'Pam', 'James', 'Lara', 'Jason']
  if (guestList.includes(name)) {
    return 'Yes, ' + name + ' is on the guest list.'
  } else {
    return 'Sorry, ' + name + ' is NOT on the list.'
  }
}
console.log(checkName('Jack'))

function test (fruit) {
  var fruitBowl = ['Bannana', 'Orange', 'Apple', 'kiwi']
  for (i = 0; i <= fruitBowl.length - 1; i++) {
    if (fruitBowl[i].toLowerCase() == fruit.toLowerCase()) {
      return 'There is a ' + fruit + ' in the bowl.'
    } else return 'Sorry we are out of ' + fruit + 's.'
  }
}
console.log(test('Orange'))

function fizzBuzz () {
  for (var i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('i')
    } else if (i % 5 == 0) {
      console.log('Buzz')
    } else if (i % 3 == 0) {
      console.log('Fizz')
    } else {
      console.log(i)
    }
  }
}
fizzBuzz()

var output = []
count = 1
function fizzBuzz2 () {
  if (count % 3 == 0 && count % 5 == 0) {
    output.push('FizzBuzz')
  } else if (count % 5 == 0) {
    output.push('Buzz')
  } else if (count % 3 == 0) {
    output.push('Fizz')
  } else {
    output.push(count)
  }
  count++
  console.log(output)
}
fizzBuzz2()

function whosPaying (names) {
  var names = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe']
  var x = names.length - 1
  var y = Math.round(Math.random() * x)
  return names[y] + ' is going to buy lunch today!'
}
console.log(whosPaying())



console.log('===============')
console.log('===============')

var i = 1
var output = []

function fizzBuzz3 () {

  while (i <= 100) {

    if (i % 3 == 0 && i % 5 == 0) {
      output.push('FizzBuzz')
    } else if (i % 3 == 0) {
      output.push('Fizz')
    } else if (i % 5 == 0) {
      output.push('Buzz')
    } else {
      output.push(i)
    }
    i++
  }
  console.log(output);
}

fizzBuzz3();





function bottlesBeer() {
  i = 100;
  x = i - 1;
  while(i >= 1) {
    x = i - 1;
    if(i != 1 ){
    console.log(i + " bootles of beer on the wall, " + i + " bottles of beer. Take on down and pass it around, " + x + " bottles of beer on the wall.");
    } else {
      console.log(i + " bootle of beer on the wall, " + i + " bottle of beer. Take on down and pass it around, " + x + " bottles of beer on the wall.");
    }
    i--;

  }
 
}




function fibonacci(n){
  var array = [];
  if(n === 1) {
    array = [0];
  } 
  else if (n === 2) {
    array = [0,1];
  }
  else {
    array = [0, 1];
    console.log(array[array.length - 1])
  
    for(var i = 2; i < n; i++){
      array.push(array[array.length - 2] + array[array.length - 1]);
    }
  }
  return array;
}

output = fibonacci(13);
console.log(output);