<template>
    <div>
        <MusicListView />
    </div>
</template>
<script>
import MusicListView from "./MusicListView.vue";
import { getMusicList } from "@/api/index";
export default {
    name:"MusicListData",
    created(){
        getMusicList()
    },
    components:{
        MusicListView
    }
}
</script>
<style>

</style>
