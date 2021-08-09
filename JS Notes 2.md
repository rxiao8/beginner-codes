Functions are collections of code dedicated to doing one task and be utilized multiple times (Basically, a method)

Declare variables outside, create arguments, pass parameters, return values, and call functions

```javascript
var drawWinston = function(){
    var faceX = random(min., max.)
}
text(total(), 30, 30); //--> call a method within a call
```

Global vs. Local variables

​	Local only lives inside the functions

predefined functions- are already defined in the ProcessingJS.library

​	When you call draw function, it overrides the var draw

```javascript
mouseMoved = function(){
    fill(mouseX, mouseY, mouseY);
    ellipse(mouseX, mouseY, 10, 10);
}
```

if statements are involved, boolean expressions in if statements

​	Can create interactive or if reactions of the graphics

```javascript
round() //round the number up
```

debugging with println

while & for loops for repetitions (same as java), like nestled loops

Arrays

```javas
var name = ["", ""];
var name = [{}, {}]
name[1];
name.length
name[2] = mouseX; //modify or add an array
xPosition.push(mouseX); //add to array
```

