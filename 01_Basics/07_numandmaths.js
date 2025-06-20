

const balance = 123.290;
// Math Methods
console.log(Math.round(balance)) //124
console.log(Math.floor(balance)) //123
console.log(Math.ceil(balance)) //124
console.log(Math.sqrt(4));      //2
console.log(Math.pow(balance,2)); //15348.7321
console.log(Math.abs(-balance)); // 123.89
console.log(Math.min(23,27,45,21)); //21
console.log(Math.max(24,31,34,12))   //34
console.log(Math.random())  //0.4248177163131699
// Math.random() --> random number 0 and 1
//Parsing Numbers
parseInt("100.50");
parseFloat("100.90");
Number("123");
isNaN(3);

console.log(Math.random() * 10); //3.7710737116247794 --> to shift 1 decimal we (*10)
console.log((Math.random() * 10 )+ 1) // to avoid 0 being the first number
console.log(Math.floor(Math.random()*10) + 1); //Math.floor -> roundoff to it;s smallest value

//To print any random number between min and max
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min)

//.toFixed(n) --> point ke baad n numbers fixed 
// toPrecision(x) -> point se pehle waale x number with roundoff