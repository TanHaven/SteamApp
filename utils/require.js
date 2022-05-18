let baseURL = ''
export const $http = function(url){
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + url,
			method: 'GET',
			header: {
				
			},
			data,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

export const $get = function(url, data = {}){
	return $http(url, 'GET', data)
}

export const $post = function(url, data = {}){
	return $http(url, 'POST', data)
}