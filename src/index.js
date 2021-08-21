const f = require('node-fetch');

async function get (url) {

	const request = await f(`${url}`);
	const data = await request.json();
	return data;

}

module.exports = {
	get
};
