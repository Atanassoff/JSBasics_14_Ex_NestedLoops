function sumPrimeNonPrime(input) {
    let i = 0;
    let sumPrim = 0;
    let sumNonPrim = 0;
    let command = input[i];
    let currentNum = 0;
    let primNum = true;
    while (command !== "stop") {
        currentNum = Number(command);
        if (currentNum < 0) {
            console.log("Number is negative.");
        } 
        else if (currentNum > 1) {
            for (let j = 2; j < currentNum; j++) {
                if (currentNum % j === 0) {
                    primNum = false;
                    break;
                }
            }
            if (primNum === true) {
                sumPrim += currentNum;
            } else {
                sumNonPrim += currentNum;
            }
        }
        i++;
        primNum = true;
        command = input[i];
    }
    console.log(`Sum of all prime numbers is: ${sumPrim}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrim}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"])
//Sum of all prime numbers is: 29 
//Sum of all non prime numbers is: 13 
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"])
//Number is negative. 
//Sum of all prime numbers is: 83 
//Sum of all non prime numbers is: 83 
sumPrimeNonPrime(["0", "-9", "0", "stop"])
//Number is negative. 
//Sum of all prime numbers is: 0 
//Sum of all non prime numbers is: 0 )