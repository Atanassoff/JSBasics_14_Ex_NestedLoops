function equalSumsEvenOddPosition(a, b){
    let sumEvens = 0;
    let sumOdds = 0;
    let currentStr = "";
    let buff = "";
    for(let i = Number(a); i <= Number(b); i++){
        currentStr = i.toString();
        for(let j = 5; j >= 0; j--){
            if(j % 2 === 1){
                sumOdds += Number(currentStr[j]);
            }
            else{
                sumEvens += Number(currentStr[j]);
            }
        }
        if(sumOdds === sumEvens){
            buff += `${i} `
        }
        sumEvens = 0;
        sumOdds = 0;
    }
    console.log(buff);
}

equalSumsEvenOddPosition(["100000", "100050"]) 
//100001 100012 100023 100034 100045
equalSumsEvenOddPosition(["123456", "124000"]) 
//123464 123475 123486 123497 123530 
//123541 123552 123563 123574 123585 
//123596 123640 123651 123662 123673 
//123684 123695 123750 123761 123772 
//123783 123794 123860 123871 123882 
//123893 123970 123981 123992 
equalSumsEvenOddPosition(["299900", "300000"]) 
//299970 299981 299992 
equalSumsEvenOddPosition(["100115", "100120"]) 
//Няма изход 