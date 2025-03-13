function numberPyramid(n) {
    let count = 1;
    let str = "";
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            if(count > n){
                i = n;
                j = n;
                break;
            }
            str += `${count} `;
            count++;
        }
        console.log(str);
        str = "";
    }
}


numberPyramid(["10"])