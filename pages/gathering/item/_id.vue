<template>
    <div>
        活动详情
        {{item.id}}
        <hr>
        {{item.name}}
    </div>
</template>
<script>
import axios from 'axios'
export default {
    asyncData( {params}){
        return axios.get(`http://127.0.0.1:7300/mock/5b7bfe48019a2a1692614d8f/tensquare/gathering/${params.id}`)
        .then(resp=>{
            return {item: resp.data.data }
        })
    }
}
</script>

