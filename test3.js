//123 312 231

//12345 51234 45123 34512 23451 

function checkPrime(num) {
    if(num>1) {
        for(let i = 2; i < num; i++) {
            if(num%i===0){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}

console.log(checkPrime(5));

function checkCircularProme(cNum) {
    var newNum = cNum;
    while(checkPrime(newNum)) {
        let firstLetter = newNum%10;
        let latestNum = newNum + '';
        let convertedNum = firstLetter + latestNum;
        let originalNum = convertedNum.slice(0,convertedNum.length-1);
        newNum = Number(originalNum);
        if(newNum==cNum){
            return true;
        }
    }
    return false;
}


console.log("circular :",checkCircularProme(113));