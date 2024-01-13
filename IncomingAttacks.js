    /**
     START INCOMING ATTACK DETECTIONS
    */
// window.getRowProperty = function(row, property) {
//     return row.getElementsByClassName(property)[0].textContent;
// }

/**
 * actions to fetch data
 */

//process info

setInterval(function(){
    //todo : if already opened, then proceed
    document.getElementById("allianceIncomings").click(); 
    var incTable = document.getElementById("iaBody");
    console.log(incTable);
//close the incoming tab
var tableLength = incTable.rows.length;
var aArray = [];

for(var i = 0; i < tableLength; i++){
    var row = incTable.rows[i];
    var obj = {
        type : row.cells[1].textContent,
        defender : row.getElementsByClassName("playerblink")[0].textContent,
        target : row.getElementsByClassName("cityblink")[0].textContent,
        coords : row.getElementsByClassName("coordblink shcitt")[1].textContent,
        arrives : row.cells[5].textContent,
        attacker : row.getElementsByClassName("playerblink")[1].textContent,
        attackerAlliance : row.getElementsByClassName("allyblink")[0].textContent,
        attackerSource :  row.cells[8].textContent,
        attackerCoords : row.cells[9].textContent,
        attackerSpotted : row.cells[10].textContent,
        defenderTS :row.cells[11].textContent,
        attackerTS : row.cells[12].textContent,
        senatorClaim : row.cells[13].textContent + "%"
    }
    aArray.push(obj);
}

// TODO : build payload json
// POST Request with data


console.log(aArray);

//todo : if already opened, no need to close it
document.getElementById("aipxbutton").click();

 }, 60000);




 //temp1.rows[0]
 // example : incTable.rows[0].getElementsByClassName("playerblink")[0].textContent; = defender name

    /**
     END INCOMING ATTACK DETECTIONS
    */