// function fulNmae(firstName,lastName){
//     return firstName+' '+lastName;
// }
// let result=fulNmae('John','Stark');
// let excepted='Arya Stark'
// if(result!=excepted){
//     throw new Error(`${result} is not equal to ${excepted}`);
// }
// result=fulNmae('David','Stark');
// if(result!=excepted){
//     throw new Error(`${result} is not equal to ${excepted}`);
// }
//after 1st test fail we can not see the 2nd test result

function totalAmount(amount,taxRate){
    return amount + (amount * taxRate);
}

let result=totalAmount(1000,40);
let excepted=70;
if(result!=excepted){
         throw new Error(`${result} is not equal to ${excepted}`);
 }
result=totalAmount(1000,50);
 if(result!=excepted){
    throw new Error(`${result} is not equal to ${excepted}`);
}
//after 1st test fail we can not see the 2nd test result
