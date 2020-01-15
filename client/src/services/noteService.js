import axios from 'axios';

export default {
	getAll: async () => {
		let res = await axios.get('/notes');
		return res.data || [];
	}
}
