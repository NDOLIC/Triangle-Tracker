function triangle()
{
  // Declare sides and precise that they are intigers.
    var sides = ["side1","side2","side3"];
    
     side1[0]= parseInt(document.getElementById("side1").value);
     side2[1]= parseInt(document.getElementById("side2").value);
     side3[2]= parseInt(document.getElementById("side3").value);
    // condition that will tell us if the sides we entered form a triangle.

    if((side1[0]+side2[1])>side3[2] && (side2[1] + side3[2])>side1[0] && (side1[0] + side3[2])>side2[1])
    {
       alert("those sides makes a Triangle continue clicking on ok to see which type");

       // condition that will tell us if is equilateral  triangle.

       if(side1[0]===side2[1] && side2[1]===side3[2] && side3[2]===side1[0])
       {
       alert("EQUILATERAL");
       }

       // condition of isosceles triangle

       else if((side1[0] === side2[1])||(side2[1] === side3[2])||(side3[2] === side1[0]))
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