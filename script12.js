var batwing = {
    status: "Ready",
    rescueBatman: function () {
        document.write("Locating his transponder ... initiating launch ...");
    }
}

if(batwing.status === "Ready"){
    batwing.rescueBatman();
}

var utilities = {
    printAllMembers: function(targetObject) {
        for(i in targetObject){
            document.write("<br />" + targetObject[i]);
        }
    }
}

// utilities.printAllMembers(batwing);

/*
var i_am_empty = {};

utilities.printAllMembers(i_am_empty);
*/

var planet = {
    id: 34,
    name: "Imtempesta Nox",
    faction: {
        factionId: 2,
        name: "Nex",
        notification: function() {
            document.write("Nex alliance ... unit");
        }
    },
    cities: [
        { locationID: 15, name: "Gladius"},
        { locationID: 16, name: "Chalybs"},
        { locationID: 17, name: "Ensis"}
    ]
}

//planet.faction.notification();

document.write(planet.cities[1].name);