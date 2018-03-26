// File System Module
const fs = require('fs');

// lodash Module
const _ = require('lodash');

const yargs = require('yargs');

// include notes.js
const notes = require('./notes.js');

const titleOption = 
{
	describe: 'Title of note',
	demand: true,
	alias: 't'
}

const bodyOption = 
{
	describe: 'Body of note',
	demand: true,
	alias: 'b'
}

const argv = yargs
	.command('add', 'Add a new note', 
	{
		title: titleOption,
		body: bodyOption
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note',
	{
		title: titleOption
	})
	.help()
	.argv;

var command = process.argv[2];
//console.log('Command:', command);
//console.log('Process', process.argv);
//console.log('Yargs', argv)

if(command === 'add')
{
	// console.log('Adding new note');
	var note = notes.addNote(argv.title, argv.body);

	if(note)
	{
		notes.logNote(note);
	}
	else
	{
		console.log('Note title taken');
	}
}
else if(command === 'list')
{
	//console.log('Listing all notes');
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s)`);
	allNotes.forEach((note) => notes.logNote(note));
}
else if(command === 'read')
{
	// console.log('Reading note');
	var note = notes.getNote(argv.title);

	if(note !== undefined)
	{
		notes.logNote(note);
	}
	else
	{
		console.log('Note not found');
	}
}
else if(command === 'remove')
{
	// console.log('Removing the note');
	notes.removeNote(argv.title);
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note was not removed';
	console.log(message);
}
else
{
	console.log('Command not recognized');
}

// Up to Section 3-12

// OS Module
//const os = require('os');

//var filteredArray = _.uniq(['Mike']);
//console.log(filteredArray);

//console.log(_.isString(true));
//console.log(_.isString('Kevin'));

//var result = notes.addNote();
//console.log(result);

//var sum = notes.sum(9, -2);
//console.log('Result: ' + sum);

// OS Module Example
//var user = os.userInfo();
//console.log(user);

// File System Example
//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);