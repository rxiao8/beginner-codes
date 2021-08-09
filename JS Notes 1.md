JS Notes 1

We call commands/statements **functions** 

```javascript
ellipse (x, y, width, height); ---> to draw a shape
rect(x, y, width, height); //x and y are the vertex of upperleft corner
line(x1, y1, x2, y2);
//number scrubbing ("seeking") - the box to drag around as you alter the values
noStroke();
strokeWeight();

```

Draws the shapes in order as if you are painting them with acrylic paint: therefore, have colors and strokes over the shapes and lines. 

Declare variables the same as java: use var name = values;

To "move" objects, set the values with respect to the main variable. 

With the function below, you can do animations by incrementing the shapes and applying a new background each time

```javascript
draw = function() { //predefined function (not associated with class/object) so gets called once runned with no parameters
    //body of code
} //though it operates like a loop, so use it for animations

var x = 30
draw = function() {
    ellipse (x + 20, 40, 50, 60); //with respect to x
    x = x + 1;
    //or another shortcut
    x += 1;
    //or another shorter shortcut
    X ++;
}
```

assignment, expression, functions

You can change shape relative to one by having the values be fractions with variables (think of scaling and shrinking)

​	For movement, think of shifts

```javascript
draw = function(){
    background(); //can leave this out to see previous shapes
    ellipse(mouseX, mouseY, 30, 30); //follows your mouse
}
```

```javascript
textSize()
text("", 10, 10); //--> don't forget to fill, value is the lower left part
var myName = "String";
var message = myName + ", you suck!"
```

