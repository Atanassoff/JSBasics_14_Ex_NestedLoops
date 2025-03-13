function cinemaTickets(input) {
    let i = 0;
    let command = input[i];
    let film = "";
    let seats = 0;
    let count = 0;
    let all = 0;
    let stud = 0;
    let stand = 0;
    let ki = 0;
    while (command !== "Finish") {
        film = command;
        i++;
        seats = Number(input[i]);
        i++;
        command = input[i];
        for (let j = 1; j <= seats; j++) {
            switch (command) {
                case "student":
                    stud++;
                    break;
                case "standard":
                    stand++;
                    break;
                case "kid":
                    ki++;
                    break;
                default:
                    break;
            }
            count++;
            i++;
            command = input[i];
            if(command === "End"){
                i++; 
                command = input[i]; 
                break;
            }
        }
        console.log(`${film} - ${(count / seats * 100).toFixed(2)}% full.`);
        count = 0;
    }
    all = stud + stand + ki;
    console.log(`Total tickets: ${all}`);
    console.log(`${(stud / all * 100).toFixed(2)}% student tickets.`);
    console.log(`${(stand / all * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(ki / all * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", "10", "standard", "kid", "kid", "kid", "kid", "kid", "student", "student", "standard",
    "standard", "End", "Scary Movie", "6", "student", "student", "student", "student",
    "student", "student", "Finish"])
//Taxi - 60.00% full.
//Scary Movie - 100.00% full. 
//Total tickets: 12 
//66.67% student tickets. 
//25.00% standard tickets. 
//8.33% kids tickets. 
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student",
    "student", "standard", "student", "End", "The Green Mile", "17", "student",
    "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3",
    "standard", "standard", "standard", "Finish"
])
//The Matrix - 40.00% full. 
//The Green Mile - 35.29% full. 
//Amadeus - 100.00% full. 
//Total tickets: 17 
//41.18% student tickets. 
//47.06% standard tickets. 
//11.76% kids tickets.