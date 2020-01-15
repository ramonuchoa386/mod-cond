import React, { Component } from 'react';

class AddNoteForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			noteTitle: '',
			noteContent: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();

		const form = {
			title: this.state.noteTitle,
			content: this.state.noteContent
		}

		console.log(form);

		this.setState({
			noteTitle: '',
			noteContent: ''
		})
	}

	render() {
		return (
			<form>
				<label>
					Title:
					<input name='noteTitle' value={this.state.noteTitle} onChange={e => this.handleChange(e)} />
				</label>
				<label>
					Content:
					<textarea name='noteContent' value={this.state.noteContent} onChange={e => this.handleChange(e)} />
				</label>
				<button onClick={(e) => this.onSubmit(e)}>Add</button> 
			</form>
		);
	}
}

export default AddNoteForm;
