import * as config from '../config';

export default class Api {
	static headers() {
		return {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'dataType': 'json',
		}
	}

	static get(route) {
		return this.xhr(route, null, 'GET');
	}

	static put(route, params) {
		return this.xhr(route, params, 'PUT')
	}

	static post(route, params) {
		return this.xhr(route, params, 'POST')
	}

	static delete(route, params) {
		return this.xhr(route, params, 'DELETE')
	}

	static xhr(route, params, verb) {
		const host = config.CDNUriBase;
		const url = route;
		let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
		options.headers = Api.headers();
		return fetch(url, options)
			.then(resp => {
				let json;
				if (resp.ok) {
					json = resp.json();
					return json;
				}
				else {
					return Promise.reject(resp);
				}
			}).catch(ex => {
				throw ex;
			});
	}
}