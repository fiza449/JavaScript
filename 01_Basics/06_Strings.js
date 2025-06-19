const name = "fiza";
const repoCount = 50;

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
//Other way of declaring string

const gameName = new String(' fizahh c ');
// console.log(gameName) //O/P: [String: 'fizahc']
const New = "ha ha";

//IMPORTANT METHODS OF STRINGS

console.log(gameName.length)
console.log(gameName.charAt(3))
console.log(gameName.includes('t'))
console.log(gameName.indexOf('z'))
console.log(gameName.lastIndexOf('h'))
console.log(gameName.slice(0,3))
console.log(gameName.substring(2,4))
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.trim())
console.log(gameName.split(","))
console.log(gameName.replace("h","y"))
console.log(New.replaceAll("ha","he"));
console.log(gameName.startsWith('f'))
console.log(gameName.endsWith('x'))
console.log(New.repeat(5))
console.log(New.padStart(3,"ha"))
console.log(gameName.padEnd(3,"ho"))

/*
10
z
false
3
6
 fi
iz
 fizahh c 
 FIZAHH C 
fizahh c
[ ' fizahh c ' ]
 fizayh c 
he he
false
false
ha haha haha haha haha ha
ha ha
 fizahh c
*/