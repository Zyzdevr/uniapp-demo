// /common/http.api.js

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
const install = (Vue, vm) => {
	vm.$u.api = {};
	// 此处没有使用传入的params参数
	vm.$u.api.getIndexData = (params = {}) => vm.$u.get('api/index', params);
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
}

export default {
	install
}
