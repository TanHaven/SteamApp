// 防止处理多次点击
function onlyOneClick(methods, info) {
    // methods是点击后需要执行的函数， info是函数需要传的参数
    let that = this;
    if (that.noClick) {
        // 第一次点击
        that.noClick= false;
        if((info && info !== '') || info ==0) {
            // info是执行函数需要传的参数
            methods(info);
        } else {
            methods();
        }
        setTimeout(()=> {
            that.noClick= true;
        }, 2000)
    } else {
        //  这里是重复点击的判断
		uni.showToast({
			title:"请勿重复点击",icon:"error"
		})
    }
}

//util.js文件主要写的是会经常使用到的工具类
//校验邮箱格式
function checkEmail(email){
	return RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/).test(email);
}
//校验手机格式
function checkMobile(mobile){
	return RegExp(/^1[34578]\d{9}$/).test(mobile);
}

//校验密码
function checkPassword(password){
	return RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\S]{5,18}$/).test(password)
}

//导出
export default {
    onlyOneClick,      // 禁止多次点击
	checkEmail,			//校验邮箱
	checkMobile,		//校验手机号
	checkPassword
}