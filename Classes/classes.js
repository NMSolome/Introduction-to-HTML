// // Static class
// class Rectangle{                                 //class name starts with upper case letter
//     constructor(){                               // A constructor initialises an object
//     console.log("A rectangle has been created")
//     this.width = 5;
//     this.height = 3;
//     this.color ="blue";   
//     }
// }                                                // A class is contained in one block {}
// let rectangle1 = new Rectangle()                 // instatiating a new object
// console.log(rectangle1);


// DYNAMIC CLASS - Can be called an
// class Rectangle {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;

//     }
//     getArea(){                                         // Method - a function inside a class
//         return this.width * this.height
//     }
// }
// let rectangle1 = new Rectangle(3, 5,"blue")
// console.log(rectangle1);

// let rectangle2 = new Rectangle(4, 7, "purple")
// console.log(rectangle2);

// console.log(rectangle1.getArea());



// GETTTERS AND SETTERS  - Manipulate methods outside a class
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;


//     }
//     get getArea(){                                         // get - treats the method as a property
//         return this.width * this.height
//     }
// }
// // let rectangle1 = new Rectangle(3, 5,"blue")
// // console.log(rectangle1);

// // let rectangle2 = new Rectangle(4, 7, "purple")
// // console.log(rectangle2);

// // console.log(rectangle1.getArea());

// let rectangle1 = new Rectangle(3, 5);
// console.log(rectangle1.getArea);             // getArea called as a property not as a method

// STATIC methods in JS classes         helper/ utility functions - extras - minor impact
class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
    }
    static equals(a, b){
        return a.width * a.height == b.width * b.height;     //on the class
    }
    static validDimensions(width, height){
        return width === height
    }
}
let square1 = new Square (5)
let square2 = new Square (5)

// console.log(Square.equals(square1,square2));
console.log(Square.validDimensions(7,7));

1 == int("1")        // int = converts data types
1 === int("1")