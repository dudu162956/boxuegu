define(["jquery","cookie"],function ($) {
	$(function(){
		//�ж��û��Ƿ��¼�ˣ����û�е�¼�������ص���¼ҳ
		//�ж��û��Ƿ��¼�����ݣ����ͨ�����̨�����������ѯ���û��Ƿ��¼����������Ͻ�������

		//�ڱ�����Ŀ�����Ǿ�ʹ��PHPSESSID����Ϊ�ж��Ƿ��¼�����ݼ���
		//�����cookie��PHPSESSID����ô֤���û��Ѿ���¼��
		//���û��PHPSESSID����֤���û�û�е�¼

		//������ڵ�¼ҳ��ִ�����������
		if (location.pathname!="/dashboard/login") {
			if (!$.cookie("PHPSESSID")) {
				location.href="/dashboard/login";
			}
			alert(1);
			//1.��cookie�л�ȡ�û�����õ��û���Ϣ
			var userinfo=JSON.parse($.cookie("userinfo"));
			console.log(userinfo);
			//2.ʹ��ģ�����潫������Ⱦ���û���Ϣ��ģ����ȥ
			var html=templete("profile_tpl",userinfo);
			$("#profile").html(html);
		}
	})
})