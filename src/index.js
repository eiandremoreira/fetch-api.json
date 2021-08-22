const fetch = require('node-fetch');

async function get (url, parseAs = 'json', method = 'GET') {
	if (!typeof url !== 'string') return throw new Error('A URL precisa ser definida e deve ser do tipo STRING.');

	const request = await fetch(url, { method: method });
	return request[parseAs]?.() ?? request.json();
}

module.exports = {
	get
};
