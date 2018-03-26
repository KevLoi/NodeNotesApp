//console.log('Starting notes.js')

const fs = require('fs');

var fetchNotes = () =>
{
	try
	{
		var notesString = fs.readFileSync('notesData.json');
		return JSON.parse(notesString);
	}
	catch (e)
	{
		return [];
	}
};

var saveNotes = (notes) =>
{
	fs.writeFileSync('notesData.json', JSON.stringify(notes));
};

var addNote = (title, body) =>
{
	// console.log('Adding note', title, body);
	var notes = fetchNotes();
	var note = 
	{
		title,
		body
	}	

	var duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0)
	{
		notes.push(note);
		saveNotes(notes);
		return note;
	}	
};

var getAll = () =>
{
	// console.log('Getting all notes');
	return fetchNotes();
};

var getNote = (title) =>
{
	// console.log('Getting note', title);
	var note = fetchNotes();
	var filteredNotes = note.filter((note) => note.title === title);

	return filteredNotes[0];
}

var removeNote = (title) =>
{
	// console.log('Removing note', title);
	var note = fetchNotes();
	var filteredNotes = note.filter((note) => note.title !== title);
	saveNotes(filteredNotes);

	return note.length !== filteredNotes.length;
}

var logNote = (note) =>
{
	// Break on this line and use repl to output note 
	debugger;
	// Use read command with title 
	console.log('Note read');
	console.log('--');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

module.exports = 
{ 
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
}

// Lecture up to 3-13

//console.log(module);

//module.exports.age = 20;

//module.exports.addNote = function()
//{
//	console.log('addNote');
//	return 'New Note';
//};

//module.exports.sum = function(a, b)
//{
//	console.log('Adding 9 + (-2)');
//	return a + b;
//}