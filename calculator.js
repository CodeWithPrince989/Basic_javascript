//Function in Javascipt
function calculateArithmetic(a,b,type){
    if(type=="sum"){
        return a+b;
    }
    if(type=="minus"){
        return a-b;
    }
    if(type=="multiply"){
        return a*b;
    }
    if(type=="divide"){
        return a/b;
    }
    if(type=="power"){
        return a**b;
    }
    else{
        return "Invalid operation";
    }
}

console.log(calculateArithmetic(1,2,"sum"));
console.log(calculateArithmetic(1,2,"minus"));
console.log(calculateArithmetic(1,2,"multiply"));
console.log(calculateArithmetic(1,2,"divide"));
console.log(calculateArithmetic(1,2,"power"));