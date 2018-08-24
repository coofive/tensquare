<template>
    <div>
        活动列表
        <div v-for="(item,index) in items" :key="index">
            <nuxt-link :to="'/gathering/item/' + item.id">{{item.name}}</nuxt-link>
            
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  asyncData() {
    return axios
      .get(
        "http://127.0.0.1:7300/mock/5b7bfe48019a2a1692614d8f/tensquare/gathering"
      )
      .then(resp => {
        return { items: resp.data.data };
      });
  }
};
</script>

