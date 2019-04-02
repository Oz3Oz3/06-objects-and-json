var flickerObj = JSON.parse(jsonString);

for (var i=0; i<flickerObj.items.length; i++) {
	console.log(flickerObj.items[i].title +". "+ flickerObj.items[i].date_taken);
}; 
console.log("\n")

var links = []
for (var i=0; i<flickerObj.items.length; i++) {
	links.push (flickerObj.items[i].link);	
}

console.log(JSON.stringify(links)); 