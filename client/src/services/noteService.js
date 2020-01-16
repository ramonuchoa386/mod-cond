import axios from 'axios';

export default {
	getAll: async () => {
		let res = await axios.get('/notes');
		return res.data || [];
	},

	addNote: async (data) => {
		axios.post('/notes', data);
	}
}
