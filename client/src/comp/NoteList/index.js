import React, { useState, useEffect } from 'react';
import noteService from '../../services/noteService.js';
import NoteListItem from '../NoteListItem';

function NoteList() {
	const [notes, setNotes] = useState(null);

	useEffect(() => {
		if(!notes) {
			getNotes();
		}
	})

	const getNotes = async () => {
		let res = await noteService.getAll();
		setNotes(res);
	}

	const renderNotes = note => {
		return (
			<NoteListItem
				key={note._id}
				noteTitle={note.title}
				noteContent={note.content} />
		);
	};

	return (
		<ul className="list">
			{(notes && notes.length > 0) ? (
				notes.map(note => renderNotes(note))
			) : (
				<p>No notes found</p>
			)}
		</ul>
	);
}

export default NoteList;
