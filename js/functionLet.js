function functionLet(){
    var a = 3;
    if(true){
        var a = 10;
        console.log(a);
    }
    console.log(a);


    let b = 2;
    if(true){
        let b = 8;
        console.log(b);
    }
    console.log(b);


    var fs = [];
    for (var i=0; i<6; i++){
        fs.push(function(){
            console.log(i);
        })
    }
    fs[0]();
    fs[5]();



    let ms = [];
    for (let i=0; i<6; i++){
        ms.push(function(){
            console.log(i);
        })
    }
    ms[0]();
    ms[5]();

    // use const
    const PI = 3.14159;
    console.log(PI);
    //PI = 3.15; - error
// если использую, как объект, то его свойства можно менять
    const MATH = {
        A:8.18
    };
    MATH.A = 7.23;    
    console.log(MATH.A);
}