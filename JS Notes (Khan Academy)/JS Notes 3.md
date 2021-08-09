Classes are like information sheet (abstract data types), an object is a filled information sheet where it holds related bits of information, it is an instance of a class

```java
var name = { //object literals
    age: 19, //properties--> key:value
    birthplace:{
        city:"Mountain",
        state: "California",
    }
}
text(winston.name, 19, 19);
winston.wife = "Winnefer"; //to add another property
```

```javascript
Object Oriented Programming
//Class
var Winston = function(nickname, age, x, y){
    this.nickname = nickname;
    this.age = age;
    this.x = x;
    this.y = y;
}

var winstonTeen = new Winston ("timmy", 15, 20, 50);
Winston.prototype.draw = function(){//a first, typical or preliminary model of something, especially a machine, from which other forms are developed or copied
    
Hopper.prototype = Object.create(Creature.prototype); //base hopper of of creature class
    	Creature.call(this, nickname, age, x, y);
```

Class holds basic similar properties and functions

​	functions using objects are called METHODS and functions not based on objects are called functions

Pseudocode- code using language