<template>
    <div class="collection-block">
        <div class="block-padding">
            <div class="tittle">
                <h3>精选歌单</h3>
                <a href="#">更多</a>
            </div>
            <div class="list clearfix">
                <div class="item" 
                v-for="(item, index) in musiclist" :key="index"
                :class="{'clear-padding':index%3 != 1}">
                    <div class="img-warpper">
                        <img :src="item.coverImgUrl" alt="">
                    </div>
                    <div class="gray">
                        {{item.name}}
                    </div>                    
                </div>
            </div>
        </div>
       
     </div>
     
        <div class="block-padding">
            <div class="tittle">
                <h3>猜你想听</h3>
                <a href="#">更多</a>
            </div>
            <div class="list clearfix">
                <div class="item" 
                v-for="(item, index) in musiclist" :key="index"
                :class="{'clear-padding':index%3 != 1}">
                    <div class="img-warpper">
                        <img :src="item.picUrl" alt="">
                    </div>
                    <div class="gray">
                        {{item.name}}
                    </div>                    
                </div>
            </div>
        </div>
     
</template>
<script>
export default {
    name:"MusicListView",
    data(){
        return{
        }
    } ,
    props:{
        musiclist:{
            type:Array,
            default:function(){
                return []
            }
        }
    }
}
</script>


<style scoped>

    .list .item {
    float: left;
    width: 31.33%;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    }
   
    .collection-block{
        background-color: #f8f8f8;
        padding: 5px 0;
    }
    .block-padding{
        padding: 10px 17px;
        background-color: #fff;
    }
    .tittle{
        display: flex;
        margin: 14px 0 18px;
    }
    .tittle h3{
        flex: 1 1 0%;
        display: block;
        font-weight: 700;
        font-size: 20px;
    }
    .clear-padding{
        padding: 0 !important;
    }
    .main{
        margin-top: 4px;
        font-size: 12px;
    }
    .gray{
        font-size: 12px;
        color: #999;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        
    }
    .btn-more{
        font-size: 12px;
        text-align: right;
        color: #333;
    }

</style>
