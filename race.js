let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let runnersAge = 27;
if (earlyRegister === true && runnersAge >= 18) {
  console.log(raceNumber + 1000);
}

if (runnersAge >= 18 && earlyRegister === true) {
  console.log("You will race at 9:30am, " + (raceNumber + 1000));
} else {
  console.log("Your race time is at 11:00am, " + (raceNumber + 1000));
}

if (runnersAge <= 17) {
  console.log("You will race at 12:30pm, " + (raceNumber + 1000));
}
