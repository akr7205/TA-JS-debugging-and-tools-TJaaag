function sum(numA,numB){
    return numA+numB;
}
function multiply(numA,numB){
    return numA*numB;
}
let result,expected;
//testing framework
function test(message,callback){
    try {
        callback();
        console.log('correct',message);
        
    } catch (error) {
        console.log(error);
        console.error('wrong',message);
    }
}
//assertion Library
function expect(actual){
    return {
        toEqual:function(expected){
            if(actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },
        toBeEqual:function(expected){
            if( actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },
      
    };
}
// function testAdd(){
//     result=sum(2,4);
//     expected=5;
//     expect(result).toEqual(expected);
// }
//1st test
/*
test('add 10 + 10 ',()=>{
    expect(sum(10,10)).toEqual(30);
});
//2nd
test('add 10 + 10 ',()=>{
    expect(sum(10,10)).toEqual(20);
});
//3rd
test('add 10 + 10 ',()=>{
    expect(sum(20,10)).toEqual(50);
});
//4th
test('add 50 + 70 ',()=>{
    expect(sum(50,70)).toEqual(120);
});
//5t
test('add 10 + 50 ',()=>{
    expect(sum(10,50)).toEqual(40);
});
*/
//mutiplication test
test('Multiplication 10 * 10 ',()=>{
    expect(multiply(10,10)).toBeEqual(30);
});
test('Multiplication 10 * 10 ',()=>{
    expect(multiply(10,10)).toBeEqual(100);
});
test('Multiplication 30 * 10 ',()=>{
    expect(multiply(30,10)).toBeEqual(30);
});
test('Multiplication 30 * 10 ',()=>{
    expect(multiply(30,10)).toBeEqual(300);
});
test('Multiplication 40 * 10 ',()=>{
    expect(multiply(40,10)).toBeEqual(700);
});