<template>
    <div>
        <MusicListView />
    </div>
</template>
<script>
import MusicListView from "./MusicListView.vue";
export default {
    name:"MusicListData",
    created(){
        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type:1,
            size:6,
            offset:1
            
        }).then(res =>{
            console.log(res)
        })

    },
    components:{
        MusicListView
    }
}
</script>
<style>

</style>
