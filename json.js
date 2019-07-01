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
var y = process.argv[3]
var z = process.argv[4]



var friend = function(name, age,town) {
        this.name = name;
        this. age = age;
        this.town = town;
        
        if(this.name === x) {
            console.log("you have the same name as " + this.name)
        }
        if(this.age === y) {
            console.log("you have the same age as " + this.name)
        }
        if(this.town === z) {
            console.log("you have the same hometown as " + this.name)
        }
}

var jessica = new friend("jessica", "30", "RC")
var cassie = new friend("cassie", "30", "RC")
var heather = new friend("heather", "30","RC")


