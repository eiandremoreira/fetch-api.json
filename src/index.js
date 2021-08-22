const fetch = require('node-fetch');

async function get (url, parseAs = 'json', method = 'GET') {
	const request = await fetch(`${url}`, { method: method });
	return request[parseAs]?.() ?? request.json();
}

module.exports = {
	get
};
