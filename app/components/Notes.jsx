import React from "react";
import uuid from "uuid";

const notes = [
	{
		id: uuid.v4(),
		task: "Learn React"
	},
	{
		id: uuid.v4(),
		task: "Do laundry"
	}
];

export default () => (
	<ul>{notes.map(note =>
		<li key={note.id}>{note.task}</li>
	)}</ul>
);