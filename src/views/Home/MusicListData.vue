<template>
    <div v-if="goodMusicList.length>0">
        <MusicListView :musiclist="goodMusicList"/>
        <MusicListView :musiclist="likeMusicList"/>

    </div>
</template>
<script>
import MusicListView from "./MusicListView";
export default {
    name:"MusicListData",
    data(){
        return{
            goodMusicList:[],
            likeMusicList:[],
        }
    },
    created(){},
    mounted(){
        this.$api.getGoodMusicList({
        limit:9
            
        }).then(response =>{
            console.log(response);
            this.goodMusicList = response.data.playlists
        });

        this.$api.getLikeMusicList({
        limit:9
            
        }).then(response =>{
            console.log(response);
            this.likeMusicList = response.data.result
        })


      
        

    },
    components:{
        MusicListView
    }
}
</script>
<style>

</style>
