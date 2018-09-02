function functionDestruct(){
    //в ES5
    /* var obj = {
        width: 200,
        height: 500
    }
    console.log(obj.width);
    console.log(obj.height); */

    //в ES6
    //деструктуризация объекта
    var {width, height} = {
        width: 200,
        height: 400
    }
    console.log(width);
    console.log(height);
    //--------------------------
    //деструктуризация с функциями,возращающей объект
    function generateFigure() {
        return{
            width: 300,
            height: 100
        }
    }
    var {width, height} = generateFigure();
    console.log(width);
    console.log(height);
//-----------------------------------------
//деструктуризация с функциями,принимающей объект и его изменять
function getSize({width, height}){
    console.log(width, height);
}
getSize({
    width: 100,
    height: 70
})
//-------------------------------------------------
//с массивами
var [first, , , ,fifth] = ['red','yellow','blue','green','orange'];
console.log(first,fifth);

//или
var [red, yellow] = ['red','yellow'];
console.log(red,yellow);


}