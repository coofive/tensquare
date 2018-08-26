<template>
  <div>
      <header>
        <div class="activity-head">
          <div class="wrapper">
            <div class="sui-navbar">
                <div class="navbar-inner">
                  <a href="/" class="sui-brand"><img src="~/assets/img/asset-logo-black.png" alt="社交"/></a>
                  <ul class="sui-nav">
                    <router-link to="/" tag="li" active-class="active" exact><a>头条</a></router-link>
                    <router-link to="/qa" tag="li" active-class="active"><a>问答</a></router-link>
                    <router-link to="/gathering" tag="li" active-class="active"><a>活动</a></router-link>
                    <router-link to="/friends" tag="li" active-class="active"><a>交友</a></router-link>
                    <router-link to="/recruit" tag="li" active-class="active"><a>招聘</a></router-link>
                  </ul>
                  <form class="sui-form sui-form pull-left">
                    <input type="text" placeholder="输入关键词...">
                    <span class="btn-search fa fa-search"></span>
                  </form>
                  <div class="sui-nav pull-right info">
                      <li><a href="~/assets/other-notice.html" target="_blank" class="notice">通知</a></li>
                      <li class="hover">
                        <span class="fa fa-plus "></span>
                        <ul class="hoverinfo">
                          <li><i class="fa fa-share-alt" aria-hidden="true"></i> <a href="~/assets/headline-submit.html">去分享</a></li>
                          <li><i class="fa fa-question-circle" aria-hidden="true"></i> <a href="~/assets/qa-submit.html" target="_blank">提问题</a></li>
                          <li><i class="fa fa-comments" aria-hidden="true"></i><a href="~/assets/spit-submit.html" target="_blank">去吐槽</a></li>
                          <li><i class="fa fa-heartbeat" aria-hidden="true"></i> <a href="~/assets/makeFriends-submit.html" target="_blank">发约会</a></li>
                        </ul>
                      </li>
                      <!-- 判断用户是否登录 -->
                      <div class="sui-nav pull-right into" v-if="user.name === undefined">
                        <li><router-link to="/person/login">登录</router-link></li>
                      </div>
                      <div class="sui-nav pull-right into" v-else>
                        <li><a href="#" class="notice" v-text="user.name"></a></li>
                        <li><a href="#" class="homego"><img :src="user.avatar" width="50px" height="50px" :alt="user.name"></a></li>
                        <li><a @click="loginOut" class="notice">退出登录</a></li>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- 路由 -->
      <nuxt/>
      <footer>
        <!--底部版权-->
        <div class="footer">
            <div class="wrapper">
                <div class="footer-bottom">
            <div class="link">
              <dl>
                <dt>网站相关</dt>
                <dd>关于我们</dd>
                <dd>服务条款</dd>
                <dd>帮助中心</dd>
                <dd>编辑器语法</dd>
              </dl>
              <dl>
                <dt>常用链接</dt>
                <dd>传智播客</dd>
                <dd>传智论坛</dd>
              </dl>
              <dl>
                <dt>联系我们</dt>
                <dd>联系我们</dd>
                <dd>加入我们</dd>
                <dd>建议反馈</dd>
              </dl>
              <dl>
                <dt>关注我们</dt>
                <dd>微博</dd>
                <dd>twitter</dd>
              </dl>

              <div class="xuke">
                <h3>内容许可</h3>
                <p>除特别说明外，用户内容均采用知识共享署名-非商业性使用-禁止演绎4.0 国际许可协议 (CC BY-NC-ND 4.0) 进行许可</p>
                <p>本站由 传智研究院 提供更新服务</p>
              </div>
            </div>


            <p class="Copyright">Copyright © 2017 传智问答社区 当前版本 0.0.1</p>
          </div>
            </div>
        </div>

      </footer>
  </div>
</template>
<script>
import "~/assets/plugins/normalize-css/normalize.css";
import "~/assets/plugins/yui/cssgrids-min.css";
import "~/assets/plugins/sui/sui.min.css";
import "~/assets/plugins/sui/sui-append.min.css";
import "~/assets/plugins/font-awesome/css/font-awesome.min.css";
import "~/assets/css/widget-base.css";
import "~/assets/css/widget-head-foot.css";
import { getUser } from "@/utils/auth";
import { removeUser } from '@/utils/auth';
export default {
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.user = getUser();
  },
  methods: {
    loginOut(){
        // 清除用户登录信息
        removeUser();
        location.href = '/person/login'
    }
  }
};
</script>