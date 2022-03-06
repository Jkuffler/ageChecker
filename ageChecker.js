const age = 26;

let isAdult=false, canWork=false, canEnlist=false, canDrink=false;

if (age >= 21) {
  canWork = true;
  canEnlist = true;
  isAdult = true;
  canDrink = true;
} else if (age >= 18) {
  canWork = true;
  canEnlist = true;
  isAdult = true;
} else if (age >= 16) {
  canWork = true;
}

console.log(`Age: ${age}, Can work: ${canWork}, Can enlist: ${canEnlist}, Is a legal adult: ${isAdult}, Can drink: ${canDrink}`); 