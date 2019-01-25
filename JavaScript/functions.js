function doTheThing(){
  let treadPattern = [];

  addRow();

  function addRow(){
    treadPattern.push(prompt("What's the treadle pattern for this row?"));
    makekMoreRows();
  }

function makekMoreRows(){
  let moreRows = prompt("Your pattern is: " + treadPattern + ". Do you want to add more rows? Type Yes or No.");
  if (moreRows == "Yes") {addRow();}
  else if (moreRows == "No"){treadCounter();}
  else do {
    moreRows = prompt("I didn't understand that answer. Please type Yes or No.");
    if (moreRows == "Yes") {addRow();}
    else if (moreRows == "No"){treadCounter();}
  }
  while (moreRows !="Yes" && moreRows != "No");
}

  function treadCounter() {
    let totalRows = treadPattern.length;
    let row = 0;
    let countRepeats = 1;
    let repeatPattern = prompt("How many times would you like to repeat the pattern?");
    counterCycle();

    function counterCycle() {
      let row = 0;
      while (row < totalRows && countRepeats <= repeatPattern) {
      alert("Row " + (row+1) + ": treadle " + treadPattern[row]);
      row++;
      }

      while (row == totalRows && countRepeats <= repeatPattern) {
        alert("Pattern repeated " + countRepeats + " times.");
        countRepeats++;
        counterCycle();

      }

    }
  }

  alert("Pattern complete!");


}
