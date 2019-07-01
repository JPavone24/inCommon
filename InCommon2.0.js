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
var blankey = new friend("blankey", "31", "Fontana")
var bob = new friend("bob", "35", "Tacoma")
var janet = new friend("janet", "34","Tacoma")
var laRae = new friend("LaRae", "25","upland")

