var students = [
    {
        "name" : "jessica",
        "age" : "30",
        "hometown" : "RC",
    },
    {
        "name" : "bob",
        "age" : "100",
        "hometown" : "NYC",
    },
    {
        "name" : "stephanie",
        "age" : "20",
        "hometown" : "LA",
    },

]

var userName = process.argv[2];
var userAge = process.argv[3];
var userHometown = process.argv[4];
console.log(userName);

for (i = 0; i < students.length; i++){
    if (students[i].name === userName){
        console.log("you have the same name as " + students[i].name);
    }
}

for (i = 0; i < students.length; i++){
    if (students[i].age === userAge){
        console.log("you have the same age as " + students[i].name);
    }
}

for (i = 0; i < students.length; i++){
    if (students[i].hometown === userHometown){
        console.log("you have the same hometown as " + students[i].name);
    }
}

