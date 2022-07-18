<template>
    
    
    <div class="collection-block" >
        <div class="block-padding" v-if="$route.params.type=='精选歌单'">
            <div class="tittle header">
                <router-link tag="span" to="/">&lt;</router-link>
                <h3>精选歌单-更多</h3>
                          
            </div>
            <div class="list clearfix" >
                <div class="moreitem" 
                v-for="(item1, index) in moreGoodData" :key="index"
                :class="{'clear-padding':index%2 != 1}">
                    <div class="img-warpper">
                        <img :src="item1.coverImgUrl" alt="">
                    </div>
                    <div class="gray">
                        {{item1.name}}
                    </div>                    
                </div>
            </div>
        </div>
        <div class="block-padding" v-if="$route.params.type=='猜你想听'">
            <div class="tittle header">
                <router-link tag="span" to="/">&lt;</router-link>
                <h3>猜你想听-更多</h3>
            </div>
            <div class="list clearfix">
                <div class="moreitem" 
                v-for="(item2, index) in moreLikeData" :key="index"
                :class="{'clear-padding':index%2!=1}">
                    <div class="img-warpper">
                        <img :src="item2.picUrl" alt="">
                    </div>
                    <div class="gray">
                        {{item2.name}}
                    </div>                    
                </div>
            </div>
        </div>        
    </div>
    <div>
            加载更多
    </div>

</template>
<script>

export default {
   data() {
      return {
        moreGoodData:[],
        moreLikeData:[],
        offset:0

      }
   },
   mounted(){
    this.http(this.offset);
    
    //节流（只触发最后一次）与防抖（触发一次后后续触发排队）
    var timer =null;
    //下拉加载更多，通过页面滚动到底触发
    const viewHeight =document.documentElement.clientHeight;
    console.log(viewHeight);

    window.addEventListener("scroll",()=>{
        let scrollHeight =document.documentElement.scrollHeight;
        let scrollTop = document.documentElement.scrollTop;
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            if(scrollHeight - scrollTop  <= viewHeight){
            console.log(scrollHeight,scrollTop);
            console.log("需要加载")
            //做网络请求拿到新的数据
            this.http(this.offset)
        };
        },300)
        
    })

    },
   
   methods:{
    http(offset){
    this.$api.getGoodMusicList({
        type:this.$route.params.type,
        limit:10,
        offset:offset          
        }).then(response =>{
            console.log(response);
            this.moreGoodData = response.data.playlists;
            this.offset += 10;
        }),
    this.$api.getLikeMusicList({
        type:this.$route.params.type,
        limit:10,
        offset:offset          
        }).then(response =>{
            console.log(response);
            this.moreLikeData = response.data.result;
            this.offset += 15;

        });
    },
    cutString(str){
        if(str.length>8){
            return str.substring(0,8)+"..."
        }
        return str;
    }
   }
}
</script>
<style scoped>
.header{
    widows: 100%;
    background-color: #fff;
    text-align: center;
    clear: both;
    
}
.header span{
    display: block;
    font-weight: bold;
    font-size: 20px;
    float: left;
}


</style>>


