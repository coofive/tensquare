<template>
 <div class="wrapper loginsign"> 
   <div class="item signup"> 
    <div class="form"> 
     <h3 class="loginsign-title">注册新账号</h3> 
     <form class="sui-form"> 
      <div class="control-group"> 
       <label for="inputname" class="control-label">登录名</label> 
       <div class="controls"> 
        <input type="text" id="inputname" v-model="pojo.loginname" placeholder="登录名" class="input-xlarge" /> 
       </div> 
      </div> 
      <div class="control-group"> 
       <label for="inputname" class="control-label">昵称</label> 
       <div class="controls"> 
        <input type="text" id="inputname" v-model="pojo.nickname" placeholder="真实姓名或常用昵称" class="input-xlarge" /> 
       </div> 
      </div> 
      <div class="different"> 
       <div class="radio-content"> 
        <div id="a1" class="phone"> 
         <div class="control-group number"> 
          <input type="text" v-model="pojo.mobile" placeholder="仅支持大陆手机号" class="input-xlarge" data-rules="required|mobile" /> 
         </div> 
         <div class="control-group code"> 
          <div class="input-append"> 
           <input id="appendedInputButton" v-model="code" type="text" placeholder="短信验证" class="span2 input-large msg-input" /> 
           <button type="button" class="sui-btn msg-btn" @click="sendsms" >获取验证码</button> 
          </div> 
         </div> 
         <div class="control-group"> 
          <label for="inputpassword" class="control-label">密码</label> 
          <div class="controls"> 
           <input type="text" id="inputpassword" v-model="pojo.password" placeholder="请输入6-16位密码" class="input-xlarge" /> 
          </div> 
         </div> 
        </div>         
       </div> 
      </div> 
      <div class="control-group btn-signup"> 
       <label class="control-label"></label> 
       <div class="controls"> 
        <label> <input type="checkbox" /><span class="type-text" style="font-size:12px;">同意协议并接受《服务条款》</span> </label> 
        <button type="button" class="sui-btn btn-danger btn-yes" @click="register">注 册</button> 
       </div> 
      </div> 
     </form> 
    </div> 
   </div> 
   <div class="item"> 
    <div class="form"> 
     <h3 class="loginsign-title">用户登录</h3> 
     <form class="sui-form login-form"> 
      <div class="control-group"> 
       <label for="inputname" class="control-label">手机号或Email：</label> 
       <div class="controls"> 
        <input v-model="mobile" type="text" id="inputname" placeholder="11位手机号或Email" class="input-xlarge" data-rules="required" /> 
       </div> 
      </div> 
      <div class="control-group"> 
       <label for="inputpassword" class="control-label">密码：</label> 
       <div class="controls"> 
        <input v-model="password" type="text" id="inputpassword" placeholder="输入登录密码" class="input-xlarge" /> 
       </div> 
      </div> 
      <div class="controls"> 
       <label> <input type="checkbox" name="remember-me" /><span class="type-text" style="font-size:12px;">记住登录状态</span> </label> 
       <button @click="login" type="submit" class="sui-btn btn-danger btn-yes">登 录</button> 
      </div> 
      <div class="other-methods"> 
      </div> 
     </form> 
     <!-- 扫码登录 -->
     <div id="weixin"></div>
    </div> 
   </div> 
  </div>   
</template>
<script>
import "~/assets/css/page-sj-person-loginsign.css";
import userApi from "@/api/user";
import { setUser } from "@/utils/auth";
export default {
  data() {
    return {
      pojo: {},
      code: "",
      mobile: "",
      password: ""
    };
  },
  methods: {
    sendsms() {
      userApi.sendsms(this.pojo.mobile).then(resp => {
        this.$message({
          message: resp.data.message,
          type: resp.data.flag ? "success" : "error"
        });
      });
    },
    register() {
      userApi.register(this.pojo, this.code).then(resp => {
        if (resp.data.flag) {
          this.$message({
            message: "注册成功",
            type: "success"
          });
          this.pojo = {};
        } else {
          this.$message({
            message: "注册失败",
            type: "error"
          });
        }
      });
    },
    login() {
      userApi.login(this.mobile, this.password).then(resp => {
        if (resp.data.flag) {
          // 保存用户信息
          setUser(
            resp.data.data.token,
            resp.data.data.name,
            resp.data.data.avatar
          );

          location.href = "/";
        } else {
          this.$message({
            message: resp.data.message,
            type: "error"
          });
          this.mobile = "";
          this.password = "";
        }
      });
    }
  },
  mounted() {
    var obj = new WxLogin({
      id: "weixin",
      appid: "wx3bdb1192c22883f3",
      scope: "snsapi_login",
      redirect_uri: "http://note.java.itcast.cn/weixinlogin"
    });
  },
  head: {
    script: [
      { src: "http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js" }
    ]
  }
};
</script>