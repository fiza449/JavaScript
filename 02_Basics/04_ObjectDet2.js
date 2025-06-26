// Destructing of an object: means pulling values out of an object (or array) and
//                           assigning them to variables directly
const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Hitesh"
}
const {courseInstructor: instructor} = course // This is destructing 
console.log(instructor); //Hitesh

/*
✅ What is JSON?
    JSON = JavaScript Object Notation. It's the format APIs use to send data.
    EG:
    {
    "name": "Helmet App",
    "status": "active",
    "data": {
    "temperature": 37,
    "fallDetected": false
  }
}
*/
