const mynum = [1,2,3,4,5,6,7]
const mynumval = mynum.filter((num) => num > 4) //implicit return NO need to write return
const mynumval2 = mynum.filter((num) => {
    return num > 4 //explicit return: NEED to write return in scope
})
// console.log(mynumval) //filter return values BUT forEach doesn't return values
// console.log(mynumval2)

//AS forEach can't return the value we need to push the values into new arrays
//const newnums = []
mynum.forEach((num)=>{
    if(num > 4){
        //newnums.push(num)
    }
})
// console.log(newnums) 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter( (book) => book.publish >= 1999)
//   console.log(userBooks)

//   const genre = books.filter((gen) => gen.genre === 'History' )
//   console.log(genre)

  //NOW MAP

const mynumbers = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynumbers.map((num) => num + 10)
// console.log(newnums)

const newnums = mynumbers
               .map((num) => num * 10) //chaining of map 1*10 = 10
               .map((num) => num + 1) //10 will be num and 10 + 1 = 11 (will be passed)
               .filter((num) => num>= 40)
console.log(newnums)