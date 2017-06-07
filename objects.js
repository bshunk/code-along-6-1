const songMaker = {
	makeSongString: function(){
		return `"${song.title}" is from the album "${song.album}" by ${song.artist}`
	},
	makeSongCard: function() {
		return `<div class="song-card"><h2></h2></div>`
	}
};

let song1 = Object.create(songMaker);
song1.title = "Private Idaho";
song1.artist = "The B-52s";
console.log("song1", song1);

let song2 = Object.create(songMaker);
song2.title = "Shiny Happy People";
song2.artist = "REM";
console.log("song2", song2);










































// const song = {
// 	title: "Private Idaho", 
// 	artist: "The B-52s",
// 	plays: 120,
// 	album: "Wild Planet",
// 	bandMembers: [
// 	{name:"Fred", roles: {vocals: "lead", instrument: null} }
// 	// {"Cindy",
// 	// {"Ricky",
// 	// {"Keith",
// 	// {"Kate"}
// 	],	
// };


// const member = song.bandMembers[0];
// const vocalRole = member.roles.vocals;
// if(vocalRole) {
// 	console.log(`$member.name} was the ${vocalRole} singer on this track`);
// } else {
// 	console.log(`${member.name} did not sing on this track`);
// };


// console.log("Fred's vocals", song.bandMembers[0].roles.vocals);
// song["albumCoverColor"] = "red";
// console.log("the artist", song["artist"]);


// const record = "album";
// console.log("album?", song[record]);
// console.log(song.makeSongString());console.log("Fred's vocals", song.bandMembers[0].roles.vocals);
// song["albumCoverColor"] = "red";
// console.log("the artist", song["artist"]);


// console.log("album?", song[record]);
// console.log(song.makeSongString());




































// const song = {
// 	title: "Party Up",
// 	artist: "DMX",
// 	plays: 2000,
// 	album: "Run With The Wolf",
// 	bandMembers: [
// 	{name:"DMX", roles: {vocals: "lead", instrument: null} }
// 	// {"Rock",
// 	// {"XZibit",
// 	// {"DJ Khaled"}
// 	],
// 	makeSongString: function() {
// 		return `"${song.title}" is from the alumb "${song.album}" by ${song.artist}`
// 	}
// };


// const member = song.bandMembers[0];
// const vocalRole = member.roles.vocals;
// if(vocalRole) {
// 	console.log(`${member.name} was the ${vocalRole} singer on this track` );
// } else {
// 	console.log(`${member.name} did not sing on this track`);
// };


// console.log("DMX crushed it on the", song.bandMembers[0].roles.vocals);
// song["albumCoverColor"] = "red";
// console.log("the artist?", song["artist"]);


// const record = "album";

// console.log("the album?", song[record]);

// console.log(song.makeSongString());console.log("DMX's vocals", song.bandMembers[0].roles.vocals);

// song["alumbCoverColor"] = "red";

// console.log("the artist is the legend", song["artist"]);

// console.log("The jam", song.makeSongString());


// console.log("album?", song[record]);
// console.log(song.makeSongString());





































// PROTOTYPE CHAIN=LINKING ONE OBJECT TO ANOTHER (SOMEHOW)




// .REPEAT IS A METHOD THAT IS SUPER IMPORTANT!!!!!!!!!!!!	//






