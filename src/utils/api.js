//引入刚才的http.js文件
import https from './http.js';
	
	//设置个对象，就不用一个个暴露了，直接暴露对象
	let api = {};
	
	/* 登录接口 */
	api.login = params => https.post('/login/cellphone', params)
	
	//暴露出这个对象
	export default api;

