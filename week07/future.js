var job = ["Student","Softwear Engineer","Chef","Trophery Wife"];
var city = ["Dallas","Oaxaca","Berlin","Seattle"];
var spouse = ["Wasim","Ryan Reynolds","Gong Yoo","Kit Harington"];
var numKids = [0, 3, 4, 6, 12];

var xx = Math.floor(Math.random() * 4)

function fortune(job,city,spouse,numKids) {

document.write("You will be a " + job + " in " + city +", and married to "+ spouse +" with " + numKids +" kids.");
}

fortune (job[xx],city[xx],spouse[xx],numKids[xx])
