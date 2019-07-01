// var students = [
//     {
//         "name" : "jessica",
//         "age" : "30",
//         "hometown" : "RC",
//     },
//     {
//         "name" : "bob",
//         "age" : "100",
//         "hometown" : "NYC",
//     },
//     {
//         "name" : "stephanie",
//         "age" : "20",
//         "hometown" : "LA",
//     },

// ]

// var userName = process.argv[2];
// var userAge = process.argv[3];
// var userHometown = process.argv[4];
// console.log(userName);

// for (i = 0; i < students.length; i++){
//     if (students[i].name === userName){
//         console.log("you have the same name as " + students[i].name);
//     }
// }

// for (i = 0; i < students.length; i++){
//     if (students[i].age === userAge){
//         console.log("you have the same age as " + students[i].name);
//     }
// }

// for (i = 0; i < students.length; i++){
//     if (students[i].hometown === userHometown){
//         console.log("you have the same hometown as " + students[i].name);
//     }
// }
//======================================================================
//                            VERSION 2
//=====================================================================
var x = process.argv[2]


var friend = function(name, age,hometown) {
        this.name = name;
        this. age = age;
        this.hometown = hometown;
        
        if(this.name === x) {
            console.log(this.name)
        }
}

var jessica = new friend("jessica", 30, "RC")
var cassie = new friend("cassie", 30, "RC")
var heather = new friend("heather", 30,"RC")

console.log(jessica.age)
console.log(cassie.age)



// if (jessica.age === cassie.age) {
//     console.log(jessica.name + " is the same age as " + cassie.name)
// }

// if (process.argv[3] === heather.hometown) {
//     console.log(process.argv[2] + " is from the same town as " + heather.name)
// }
 
//     console.log(this.name)


