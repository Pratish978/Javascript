//January 1 1970 

let myDate =new Date();

console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

let myCreatedDate=new Date(2026,0,23,5,3) //here 2026 is year 0 is month for single digit if 01 then jan start with jan 23 is date 5:3 is time 
console.log(myCreatedDate.toLocaleString());

let newCreatedDate =new Date("2026-01-23");//YY MM DD
console.log(newCreatedDate.toLocaleString());

let newCreatedDate1 =new Date("01-14-2026");//DD MM YY
console.log(newCreatedDate1.toLocaleString());
console.log(newCreatedDate1.getTime());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"Long",
})