<template>
    <div v-if="goodMusicList.length>0">
        <MusicListView type="精选歌单" :goodlist="goodMusicList"/>
        <MusicListView type="猜你想听" :likelist="likeMusicList"/>


    </div>
   
</template>

<script>
import MusicListView from "./MusicListView";

export default {
    name:"goodMusicListData",
    data(){
        return{
            goodMusicList:[],
            likeMusicList:[],
           }
        
    },
    mounted(){
        this.$api.getGoodMusicList({
        limit:6            
        }).then(response =>{
            console.log(response);
            this.goodMusicList = response.data.playlists
        }),

        this.$api.getLikeMusicList({
        limit:6            
        }).then(response =>{
            console.log(response);
            this.likeMusicList = response.data.result
        })
    },
    
    components:{
        MusicListView,
    },

   
        

   
}
</script>
<style>

</style>
