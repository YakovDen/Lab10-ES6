function functionSpread() {
    // в ES5
    /* const arr1 = [1,2,3];
    const arr2 = [4,5,6];

    Array.prototype.push.apply(arr1,arr2);
    console.log(arr1); */


    //так в ES6
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
   arr1.push(...arr2);
    console.log(arr1);
//--------------------------------------
    const getText = (...args) =>{
        console.log(args);
    }
    getText('a','b','c');

}