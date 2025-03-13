function trainTheTrainers(input){
    let i = 0
    let juryNum = Number(input[i]);
    i++;
    let command = input[i];
    let presentation = "";
    let currentAssessment = 0;
    let avgPresentationAssessment = 0;
    let totalNums = 0;
    let count = 0;
    while(command !== "Finish"){
        presentation = command;
        for(let j = 1; j <= juryNum; j++){
            currentAssessment += Number(input[i + j]);
            count++;
        }
        avgPresentationAssessment = (currentAssessment / juryNum).toFixed(2);
        console.log(`${presentation} - ${avgPresentationAssessment}.`);
        totalNums += currentAssessment;
        currentAssessment = 0;
        avgPresentationAssessment = 0;
        i = i + juryNum + 1;
        command = input[i];
    }
    console.log(`Student's final assessment is ${(totalNums / count).toFixed(2)}.`);
}

trainTheTrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"]) 
//While-Loop - 5.75. 
//For-Loop - 5.75. 
//Student's final assessment is 5.75. 
trainTheTrainers(["3","Arrays","4.53","5.23","5.00","Lists","5.83","6.00","5.42","Finish"]) 
//Arrays - 4.92. 
//Lists - 5.75. 
//Student's final assessment is 5.34. 
trainTheTrainers(["2","Objects and Classes","5.77","4.23","Dictionaries","4.62","5.02","RegEx","2.88","3.42","Finish"]) 
//Objects and Classes - 5.00. 
//Dictionaries - 4.82. 
//RegEx - 3.15. 
//Student's final assessment is 4.32. 