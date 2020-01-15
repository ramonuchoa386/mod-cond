import React from 'react';

function NoteListItem(props) {
	return (
		<li className="list__item note">
			<h3 className="note__title">{props.noteTitle}</h3>
			<p className="note__content">{props.noteContent}</p>
		</li>
	);
}

export default NoteListItem;
