function triangle(){
var side1 = parseInt(document.getElementById("side1").value);
var side2 = parseInt(document.getElementById("side2").value);
var side3 = parseInt(document.getElementById("side3").value);
if((side1+side2)>side3 || (side2 + side3)>side1 ||(side1 + side3)>side2){
    alert("Triangle");{
        if(side1===side2&&side2===side3&&side3===side1){
        alert("EQUILATERAL");
        }
else if((side1 === side2)||(side2 === side3)||(side3 === side1)){
    alert("ISOSCELES");
    }
    else if(side1!==side2 &&side2!== side3&& side3!== side1){
        alert("SCALENE");
    }
}
}