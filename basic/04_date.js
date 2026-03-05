// datess

let myDate =new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let mycreatedDate=new Date(2023,0,23);
console.log(mycreatedDate.toDateString());
// one thing to keep in mind 0= represent the jan in calender

// let mycreateDate1=new Date("2023-02-2");
let mycreateDate1=new Date("01-14-2023");
console.log(mycreateDate1);

let mytiemstamp =Date.now()
console.log(mytiemstamp);
console.log(mycreateDate1.getTime());

// console.log(Math.floor(Date.now()/1000));

newDate.toLocaleString('default',{
    weekday: "long",
})