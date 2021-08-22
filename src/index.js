const fetch = require('node-fetch');

async function get (url, parseAs = 'json', method) {
	const request = await fetch(`${url}`, { method: method ?? 'GET' });
	return request[parseAs]?.() ?? request[parseAs].json();
}

module.exports = {
	get
};
