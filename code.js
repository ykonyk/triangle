function buildTriangle(length){
    var triangle="";
    for (x=1; x<=length; x++){
         triangle= triangle+makeLine(x);
    }
    return triangle;
}
console.log(buildTriangle(8));
