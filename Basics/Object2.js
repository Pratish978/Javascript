const InstaUser= new Object();
InstaUser.id="bhonglepratish",
InstaUser.name="Pratish Bhongle"
InstaUser.isLoggedIn=false;
console.log(InstaUser);

const regularUser={
    email:"hitesh@gmail.com",
    fullName:{
        userFullname:{
            firstName:"Hitesh",
            lastName:"Chaudary"
        }
    }
}

console.log(regularUser.fullName.userFullname.firstName);

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}

// const obj3=Object.assign({},obj1,obj2)//{} is Target it is for syntax

const obj3={...obj1,...obj2}//Simple and latest for combine
console.log(obj3);

//Array of objects

const user=[
    {
        id:1,
        email:"bhonglepratish@gmail.com"
    },
    {
        id:2,
        email:"hiteshChaudary@gmail.com"
    }, 
    {
        id:3,
        email:"ViratKohli@gmail.com"
    }
]

console.log(user[1].email);
console.log(InstaUser);
console.log(Object.keys(InstaUser));
console.log(Object.values(InstaUser));
console.log(Object.entries(InstaUser));

console.log(InstaUser.hasOwnProperty('isLoggedIn'));//true

const Course={
    CourseName:"Js in Hindi",
    price:"free",
    courseInstructor:"Hitesh"
}

const {courseInstructor:insturctor} = Course;
console.log(insturctor);

