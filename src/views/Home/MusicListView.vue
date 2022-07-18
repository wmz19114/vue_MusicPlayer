<template>
    <div class="collection-block" >
        <div class="block-padding" v-show="goodlist.length!=0">
            <div class="tittle">
                <h3>精选歌单</h3>
                <router-link :to="`/more/${type}`" >更多</router-link>           
            </div>
            <div class="list clearfix" >
                <div class="item" 
                v-for="(item1, index) in goodlist" :key="index"
                :class="{'clear-padding':index%3 != 1}">
                    <div class="img-warpper">
                        <img :src="item1.coverImgUrl" alt="">
                    </div>
                    <div class="gray">
                        {{item1.name}}
                    </div>                    
                </div>
            </div>
        </div>
    
     
        <div class="block-padding" v-show="likelist.length!=0">
            <div class="tittle">
                <h3>猜你想听</h3>
                 <router-link :to="`/more/${type}`" >更多</router-link>           

            </div>
            <div class="list clearfix">
                <div class="item" 
                v-for="(item2, index) in likelist" :key="index"
                :class="{'clear-padding':index%3 != 1}">
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
</template>

<script>
export default {
    name:"MusicListView",
    data(){
        return{
        }
    } ,
    props:{
        goodlist:{
            type:Array,
            default:function(){
                return []
            }
        },
        likelist:{
            type:Array,
            default:function(){
                return []
            }
        },
        type:{
            type:String,
            default:"更多"
        }

    }
}
</script>



