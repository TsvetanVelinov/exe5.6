function oscars(input) {

    let name = input[0];
    let academyPoints = Number (input[1]);
    let judgesCount = Number (input[2]);
    let allGudges = 0;
    let nominationPoints = 1250.5;

    for (let i= 3; i < input.length ; i +=2 ){
        let judgeName = input[i];
        let judgeScore = Number (input[i+1]);
        let score = (judgeName.length * judgeScore) / 2;

        allGudges += score;

        if((allGudges + academyPoints) > nominationPoints) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${(allGudges + academyPoints).toFixed(1)}!`);
             break;
        }
    }

    if ((allGudges + academyPoints) <= nominationPoints) {
        let difference = Math.abs(allGudges + academyPoints - nominationPoints);
        console.log(`Sorry, ${name} you need ${difference.toFixed(1)} more!`);
    }
}

oscars([
    "Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"
])

oscars (["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

