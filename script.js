'use strict';
//Let's say we want to have opening hours as a separate object. To add it to restaurant object we can use the ES6 syntax
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours, //ES6 - enhanced object literal
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${address}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');
console.log('underscoreCase      '.length);
const toCamelCase = function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    let joined = first + second[0].toUpperCase() + second.slice(1);
    joined = joined.padEnd(20, ' ');
    console.log(`${joined}${'✅'.repeat(i + 1)}`);
  }
};

btn.addEventListener('click', toCamelCase);

/*
/////////////////////////////// Strings part 3

console.log('a+very+nice+string'.split('+'));
console.log('Vakare Sereikyte'.split(' '));
const [firstName, lastName] = 'Vakare Sereikyte'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const nameArr = name.split(' ');
  let fullName = [];
  console.log(nameArr);
  for (const n of nameArr) {
    fullName.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(fullName.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('vakare sereikyte');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Vakare'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  console.log(last);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(9874536541258796));
maskCreditCard(2569874123659874);

// Repeat
const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(3);
planesInLine(5);
/*
/////////////////////////////////// STRINGS
// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B144'[0]);
// console.log('B144'.length);
// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.slice(4)); // >> Air Portugal (returns a substring)
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' '))); // Will return the first word
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // will return the first word

// console.log(airline.slice(-2)); // returns the last elements
// console.log(airline.slice(1, -1));

// Check if the seat is in the middle
const checkMiddleSeat = function (seat) {
  // middle seats are B and C
  let s = seat.slice(2);
  if (s === 'B' || s === 'E') {
    console.log(`You are sitting in the middle`);
  } else {
    console.log(`You got lucky - not in the middle`);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('12C');
checkMiddleSeat('23E');

// console.log(new String('Vakare'));
// console.log(typeof new String('Vakare'));
// console.log(typeof new String('Vakare').slice(1));

// console.log('Vakare'.toUpperCase());
// console.log(airline.toLowerCase());

// Fix capitalization in name
const passenger = 'vAkAre';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const fixName = function (name) {
  const nameCorrect = name[0].toUpperCase() + name.toLowerCase().slice(1);
  console.log(`The correct name of ${name} is ${nameCorrect}!`);
};

// fixName('haMed');

// Comparing emails
const email = 'elenabalsyte@gmail.com';
const loginEmail = '  ElenaBalsyte@Gmail.Com \n';
const emailLower = loginEmail.toLowerCase();
const trimmedEmail = emailLower.trim(); // trim() method removes all the white space
// trimStart() removes white space from the begining, trimEnd() removes white space from the end
console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing part of the string
// replace() method is key sensitive
const priceGB = '199,99£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23! Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

// very simple regular expression to tell the replace() method that it should actually target all the occurrences of 'door'
console.log(announcement.replace(/door/g, 'gate')); // g stands for global

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Air') && plane.endsWith('neo')) {
  console.log('Part of a new Airbus family!');
}
// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board!!!');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a Laptop, some Food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a knife for protection!');

/*
///////////////////////////////// Maps: Iteration
const question = new Map([
  ['question', 'Which programming language is the best in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!!!'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours)); // returns array of arrays

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app:
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: is ${value}`);
  }
}

//const answer = Number(prompt("What's your answer?"));
const answer = 3;

console.log(question.get(answer === question.get('correct')));

if (answer === question.get('correct')) {
  console.log(question.get(true));
}
// convert map to an array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

/*
///////////////////////////////////// MAPS: fundamentals
// A map is a data structure

 that we can use to map values to keys. So just like in object, the data is stored in key & value pairs. The difference is that in maps the key can be any type (while in object the keys are always strings). But in maps the key can be even an object, array, or another map

//creating a new Map
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
//set() method returns a new map, so we can chain it:
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
// to retrieve a value from a key we use the get() method
// console.log(rest.get('name'));
// console.log(rest.get(true)); // data type is important!

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // though this is not a good example, cause its readability is not good

console.log(rest.has('categories'));
rest.delete(2); // to delete a key, pass a key
rest.set([1, 2], 'Test');
console.log(rest);
// console.log(rest.size) //returns a size of key && value pairs
//rest.clear(); // deletes all keys and values
//console.log(rest.get([1, 2])); // >> undefined. because this array is not the same that we used in the set method, it ////has different place in a heap. to avoid this, we need to create an array first and then use it
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// Using objects as map keys can be very usual. We can use DOM elements as keys as well:
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(h1));
console.log(rest);

/*
/////////////////////////////////////SETS

// All values in the set are unique. An their order does not matter. So there is no need to retrieve data from set. If you need to keep and retrieve some values, then better use an array.
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risoto',
  'Pizza',
  'Pasta',
]);
console.log(orderSet); // (3) set {'Pasta', 'Pizza', 'Risoto'}

console.log(new Set('elena'));
console.log(new Set('Elena'));
console.log(orderSet.size); // returns 3
//to check if a set contains some iterable, use has()
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic bread');
orderSet.add('Garlic bread');
orderSet.delete('Risoto');
console.log(orderSet);
//orderSet.clear(); // deletes all the values in the set

//SETS are also iterables so we can loop over them:
for (const order of orderSet) {
  console.log(order);
}

//EXAMPLE
// Sets are used to remove duplicate values of array
// const staff = ['Waiter', 'Chef', 'manager', 'Waiter', 'Chef'];
// const staffTitles = new Set(staff);
// console.log(staffTitles);
//to return as an array use spread operator
const staff = ['Waiter', 'Chef', 'manager', 'Waiter', 'Chef'];
const staffTitles = [...new Set(staff)];
console.log(staffTitles);

//if you only needed to know how many different positions there are in the array, you can just use a size method
console.log(new Set(['Waiter', 'Chef', 'manager', 'Waiter', 'Chef']).size);
//to check how many different letters there are in a string
console.log(new Set('Elena Balsyte').size);

///////////////////////////LOOPING OBJECTS:
//                                  OBJECT KEYS
//                                  VALUES
//                                  ENTRIES

// We have different options depending on what do we want to loop over. so if we want to loop over the objects property names, values or both together
/*
// PROPERTY NAMES
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} days`);
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}

// PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values);

// ENTIRE OBJECT
const entries = Object.entries(openingHours);
console.log(entries);

// so now we can use this to loop over the object
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}.`);
}
/*
/////////////////////////////OPTIONAL CHAINING
// let's say we don't know if the restaurant is working on Mondays and we want to check that
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

//Let's say we don't even know if that restaurant has the openingHours property. So first we need to check that
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open); // only if the mon exists then the open property will be read, if not then immediately undefined will be returned
// console.log(restaurant.openingHours?.mon?.open); // can be chained

// EXAMPLE
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// to loop through the days and log wether the day is open
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we are open at: ${open}`);
}
// notice that this will show closed on Saturday, becayse its open = 0, and 0 is a false value. || operator short-circuits on false value. so it is better in this case to use the ?? nullish value operator
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we are open at: ${open}`);
}

///////// METHODS
//we can check if the method exists before calling it
console.log(restaurant.order?.(1, 2) ?? "Method doesn't exist");
console.log(restaurant.orderRisotto?.(1, 2) ?? "Method doesn't exist");

///////// ARRAYS
// we can use it to check if its an empty array

const users = [{ name: 'jonas', email: 'hello@jonas.io' }];
//const users = [];
console.log(users[0]?.name ?? 'Users array is empty');

// the old way:
/*if (users.length > 0) console.log(users[0].name);
else console.log('user array is empty');
*/
/*
//////////////////////////////LOOPING ARRAYS FOR-OF LOOP

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item); // this simply loops through the menu and logs every item to the console

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`); // this is the old way.
// }
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); // this is the new version, it's better solution
}
console.log([...menu.entries()]);


/////////////////////////////// THE NULLISH COALESCING OPERATOR (??)

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10; // or operator will return the truthly value, so it will be 10, even though the
console.log(guests); //numGuests are set to 0. Cause 0 is false value.

const guestCorrect = restaurant.numGuests ?? 10; // will return 0. It only checks the second value if the first value is nullish (null or undefined)
console.log(guestCorrect);
//NULLISH: null and undefined
/*
////////////////////////////// SHORT CIRCUITING (&& and ||)
//Logic operators: use ANY data type,return ANY data type, short-circuiting (short circuit evaluation). Short-circuiting means that if the first value is a truthy value it will immediately return that first value. And will not even check the other value

// AND operator (&&) short circuits when the value is faulty.
console.log(3 || 'Jonas'); // > 3
console.log('' || 'Jonas'); // > 'Jonas'
console.log(true || 0); // > true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10
console.log(guest2);

console.log('-----AND-----');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
/*
//////////////////////////////// REST PATTERN AND PARAMETERS
// 1) Destructuring

// SPREAD because the ... is on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST because ... is on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

/// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 5, 7];

add(...x);

restaurant.orderPizza('mushrooms', 'olives', 'onions', 'spinach');
restaurant.orderPizza('mushrooms');
/* The SPREAD operator can be used where otherwise we would write values separated by commas 
The REST PATTERN can be used where otherwise we would write variable names separated by commas, and not values separated by commas;
 */
/*
///////////////////////////////////////// SPREAD OPERATOR
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // spread operator
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // here we're creating a new array which elements are added by spread operator and one more item
console.log(newMenu);

/* The spread operator is similar to destructuring, because it also helps us to get the elemnts out of arrays. The difference is that spread operator takes all the elements of the array and it doesn't create ne variables. And as a consequence we can only use it when othervise we would write the values separated by commas*/

///////////////// shallow copy of array

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

//////////////// Join 2  arrays
/*
const menuCopy = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuCopy);

/////////////// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // > ["J", "o", "n", "a", "s", " ", "S."]
console.log(...str); // J o n a s
//console.log(`${...str} Schmedtmann`); // this will not work

//////////////////////////////// Real life example
const ingredients = [
  // prompt("Let's make pasta! What's your ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

///////// Objects
const newRestaurant = {
  foundedIn: '2012',
  ...restaurant,
  founder: 'Guisseppe',
};

console.log(newRestaurant);

//shallow copy
const restaurantCopy = { ...restaurant };
restaurant.name = 'Ristorante Roma';
console.log(restaurant.name, restaurantCopy.name);*/
/*
////////////////////////////// DESTRUCTURING OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//////// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//////// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
//console.log(a, b);

//////// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

////////////////////////////////// DESTRUCTURING ARRAYS

// const arr = [1, 2, 3];

// const a = arr[0];
// const b = arr[1]; // this is how you can assign the values of array items to a variable
// const c = arr[2];

// const [x, y, z] = arr; //ES6 array destructuring. the original array stays the same

// let [main, , secondary] = restaurant.categories; // leaving a space between variables, mean to skip one item in the array.
// console.log(main, secondary); // > Italian Vegetarian

// //to switch the main and secondary values:
// // SOLUTION 1
// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// //SOLUTION 2
// // ([secondary, main] = [main, secondary]);
// // console.log(main, secondary);

// //console.log(restaurant.order(2, 0)); //this will log an array of two items
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested; //destructuring
// // console.log(i, j);

// const [i, , [j, k]] = nested; // destructuring inside destructuring
// console.log(i, j, k); // > 2 5 6

// // Values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // > 8 9 undefined

// //Default values
// const [d = 1, e = 1, f = 1] = [8, 9];
// console.log(d, e, f); // > 8 9 1

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via de Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
*/
