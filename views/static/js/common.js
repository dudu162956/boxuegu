define(["jquery","cookie"],function ($) {
	$(function(){
		//判断用户是否登录了，如果没有登录，就跳回到登录页
		//判断用户是否登录的依据，最好通过向后台发送请求，向后询问用户是否登录，这才是最严谨的做法

		//在本次项目中我们就使用PHPSESSID来作为判断是否登录的依据即可
		//如果在cookie有PHPSESSID，那么证明用户已经登录了
		//如果没有PHPSESSID，就证明用户没有登录

		//如果不在登录页才执行下面的内容
		if (location.pathname!="/dashboard/login") {
			if (!$.cookie("PHPSESSID")) {
				location.href="/dashboard/login";
			}
			alert(1);
			//1.从cookie中获取用户储存好的用户信息
			var userinfo=JSON.parse($.cookie("userinfo"));
			console.log(userinfo);
			//2.使用模板引擎将对象渲染到用户信息的模板中去
			var html=templete("profile_tpl",userinfo);
			$("#profile").html(html);
		}
	})
})