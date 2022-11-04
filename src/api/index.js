const serverUrl = '/api/'

class api {
    async get(url, headers) {
        return await this.request('get', url, headers)
    }

    async post(url, headers, body) {
        return await this.request('post', url, body, headers)
    }

    async put(url, headers, body) {
        return await this.request('put', url, body, headers)
    }

    async delete(url, headers, body) {
        return await this.request('delete', url, body, headers)
    }

    async request(method, url, body, headers) {
        if (!headers) {
            headers = {}
        }
        headers["Content-Type"] = 'application/json'
        headers["Accept"] = 'application/json'
        let data = {
            method: method,
            headers: headers,
        }
        if (body) {
            data.body = JSON.stringify(body)
        }
        return await fetch(serverUrl + url, data)
            .then(response => response.json())
            .then((res) => {
                return res
            })
            .catch((err) => {
                return []
            })
    }
}

export default api
