<template>
    <div>
        <!--中间布局-->
<div class="wrapper activities">
    <div class="activity-card-list">
        <div class="top-title">
            <h4 class="latest">最新活动</h4>
            <div class="cities">
                <span class="sui-dropdown dropdown-bordered select">
                    <span class="dropdown-inner">
                        <a id="drop12" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle">
                            <input value="hz" name="city" type="hidden"><i class="caret"></i><span>全部城市</span>
                        </a>
                        <ul id="menu12" role="menu" aria-labelledby="drop12" class="sui-dropdown-menu">
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);"
                                                       value="bj">北京</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);"
                                                       value="sb">成都</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);"
                                                       value="sb">广州</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);"
                                                       value="sb">深圳</a></li>
                            
                        </ul>
                    </span>
                </span>
            </div>
            <div class="types">
                <span class="sui-dropdown dropdown-bordered select">
                    <span class="dropdown-inner">
                        <a id="drop12" role="button" data-toggle="dropdown" href="#" class="dropdown-toggle">
                            <input value="hz" name="city" type="hidden"><i class="caret"></i><span>所选类型</span>
                        </a>
                        <ul id="menu12" role="menu" aria-labelledby="drop12" class="sui-dropdown-menu">
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);"
                                                       value="bj">全部类型</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);"
                                                       value="sb">线下活动</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);"
                                                       value="sb">线上活动</a></li>                        
                        </ul>
                    </span>
                </span>
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="activity-list" v-infinite-scroll="loadMore">
            <ul class="activity">

                <li class="activity-item" v-for="(item,index) in items" :key="index">
                    <div class="activity-inner">
                        <a href="http://"></a>
                        <div class="img">
                            <a :href="'/gathering/item/' + item.id" target="_blank">
                                <!-- <img src="~/assets/img/widget-activity1.png" alt=""> -->
                                <img :src="item.image" alt=""/>
                            </a>
                        </div>
                        <div class="text">
                            <p class="title" v-text="item.name">APMCon2017中国应用性能管理大会</p>
                            <div class="fl goin">
                                <p v-text="item.starttime">时间：2017-07-29 周六</p>
                                <p v-text="item.address">城市：广州</p>
                            </div>
                            <div class="fr btn">
                                <span class="sui-btn btn-bao">立即报名</span>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </li>

            </ul>

        </div>

    </div>
</div>
    </div>
</template>
<script>
import "~/assets/css/page-sj-activity-index.css";
import gatheringApi from "@/api/gathering";
export default {
  asyncData() {
    return gatheringApi.search(1, 12, { state: "1" }).then(resp => {
      return {
        items: resp.data.data.rows
      };
    });
  },
  data() {
    return {
      pageNo: 1
    };
  },
  methods: {
    loadMore() {
      this.pageNo++;
      gatheringApi.search(this.pageNo, 12, { state: "1" }).then(resp => {
        this.items = this.items.concat(resp.data.data.rows);
      });
    }
  }
};
</script>

