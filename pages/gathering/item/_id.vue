<template>
    <div>
        <!--中间布局-->
        <div class="wrapper activities">
            <h1 v-text="item.name">APMCon2017中国应用性能管理大会</h1>
            <div class="img-text">
                <div class="left-img">
                    <!-- <img src="~/assets/img/widget-acti.png" alt=""/> -->
                    <img :src="item.image" alt=""/>
                </div>
                <div class="right-txt">
                    <p v-text="item.starttime">开始时间： 2017-07-07 08:00 周五</p>
                    <p v-text="item.endtime">结束时间： 2017-07-10 20:00 周一</p>
                    <p v-text="item.address">举办地点： 深圳市华侨城洲际酒店</p>
                    <p v-text="item.sponsor">主办方：infoQ</p>
                    <p>报名截止： {{item.enrolltime}}</p>
                    <div class="join">
                        <button class="sui-btn btn-danger">立即报名</button>
                        <span class="will">报名即将开始</span>
                    </div>
                </div>
            </div>
            <div class="simple-text">
                <div class="left-content">
                    <div class="content-item">
                        <div class="tit"><span>大会介绍</span></div>
                        <div class="text">
                            <h4>实践第一、案例为主</h4>
                            <p>ArchSummit 全球架构师峰会是 InfoQ 中国团队推出的面向高端技术管理者、架构师的技术大会，参会者中超过 50% 拥有 8 年以上的工作经验。ArchSummit
                                秉承“实践第一、案例为主”的原则，展示新技术在行业应用中的最新实践，技术在企业转型中的加速作用，帮助企业技术管理者、CTO、架构师做好技术选型、技术团队组建与管理，并确立技术对于产品和业务的关键作用。</p>
                        </div>
                    </div>
                    <div class="content-item">
                        <div class="tit"><span>议题简介</span></div>
                        <div class="text">
                            <h4>7月7日，星期五</h4>
                            <p>#区块链以及金融新技术</p>
                            <p>随着各国放宽金融法规，在 FinTech 创新上，尤其区块链领域正受到前所未有的支持，目前区块链技术有哪些最佳实践？如何替企业降低成本？金融新技术还有哪些玩法？我们将邀请研究 FinTech
                                的技术专家，一起看金融技术在这阶段的深度实践。</p>
                        </div>
                        <div class="text">
                            <p>#区块链以及金融新技术</p>
                            <p>随着各国放宽金融法规，在 FinTech 创新上，尤其区块链领域正受到前所未有的支持，目前区块链技术有哪些最佳实践？如何替企业降低成本？金融新技术还有哪些玩法？我们将邀请研究 FinTech
                                的技术专家，一起看金融技术在这阶段的深度实践。</p>
                        </div>
                        <div class="text">
                            <p>#区块链以及金融新技术</p>
                            <p>随着各国放宽金融法规，在 FinTech 创新上，尤其区块链领域正受到前所未有的支持，目前区块链技术有哪些最佳实践？如何替企业降低成本？金融新技术还有哪些玩法？我们将邀请研究 FinTech
                                的技术专家，一起看金融技术在这阶段的深度实践。</p>
                        </div>
                        <div class="text">
                            <p>#区块链以及金融新技术</p>
                            <p>随着各国放宽金融法规，在 FinTech 创新上，尤其区块链领域正受到前所未有的支持，目前区块链技术有哪些最佳实践？如何替企业降低成本？金融新技术还有哪些玩法？我们将邀请研究 FinTech
                                的技术专家，一起看金融技术在这阶段的深度实践。</p>
                        </div>
                        <div class="text">
                            <p>#区块链以及金融新技术</p>
                            <p>随着各国放宽金融法规，在 FinTech 创新上，尤其区块链领域正受到前所未有的支持，目前区块链技术有哪些最佳实践？如何替企业降低成本？金融新技术还有哪些玩法？我们将邀请研究 FinTech
                                的技术专家，一起看金融技术在这阶段的深度实践。</p>
                        </div>
                    </div>

                </div>
                <div class="right-intro">
                    <div class="content-item">
                        <div class="tit"><span>活动组织者</span></div>
                        <div class="text">
                            <p>主办方： {{item.sponsor}}</p>
                            <p>协办方：深圳文化厅</p>
                            <p>媒体方：传智新干线</p>
                        </div>
                    </div>
                    <div class="content-item">
                        <div class="tit"><span>相关链接</span></div>
                        <div class="text">
                            <p>活动官网： infoQ.com</p>
                        </div>
                    </div>
                    <div class="content-item">
                        <div class="tit"><span>分享扩散</span></div>
                        <div class="social-share"  
                            data-sites="weibo,wechat" 
                            data-url="http://www.itheima.com" 
                            :data-title="item.name">
                        </div> 
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import "~/assets/css/page-sj-activity-detail.css";
import gatheringApi from "@/api/gathering";
export default {
  asyncData({ params }) {
    return gatheringApi.findById(params.id).then(resp => {
      return { item: resp.data.data };
    });
  },
  head:{
      script: [{src: 'https://cdn.bootcss.com/social-share.js/1.0.16/js/social-share.min.js'}],
      link:[{el:'stylesheet' ,href: 'https://cdn.bootcss.com/social-share.js/1.0.16/css/share.min.css'}]
  }
};
</script>


