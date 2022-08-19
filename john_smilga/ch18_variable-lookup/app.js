// in look up variable the local variable is looked up first 

const globalNumber = 5


function add(num1,num2){
    const globalNumber =20
    const result = num1 + num2 + globalNumber
    function mul(){
       const globalNumber = 100
        console.log(result * globalNumber);
    }
    mul()
    return result
}
let c = add(3,4)
console.log(c);