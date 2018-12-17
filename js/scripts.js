function triangle()
{
  // Declare sides and precise that they are intigers.
    var sides = ["side1","side2","side3"];
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);
    var side3 = parseInt(document.getElementById("side3").value);
    // condition that will tell us if the sides we entered form a triangle.

    if((side1+side2)>side3 && (side2 + side3)>side1 && (side1 + side3)>side2)
    {
       alert("those sides makes a Triangle continue clicking on ok to see which type");

       // condition that will tell us if is equilateral  triangle.

       if(side1===side2 && side2===side3 && side3===side1)
       {
       alert("EQUILATERAL");
       }

       // condition of isosceles triangle

       else if((side1 === side2)||(side2 === side3)||(side3 === side1))
       {
       alert("ISOSCELES");
       }

       // print scalene triangle

       else 
        {
       alert("SCALENE");
        }
       }
    else
    {
      alert("those sides can't make triangle"); 
    }
};