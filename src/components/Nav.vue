<template>
    <div>
        <ul class="top-nav">
            <li><router-link to="/" exact-active-class="active">首页</router-link></li>
            <li><router-link to="/topic">榜单</router-link></li>
            <li><router-link to="/search">搜索</router-link></li>
            <li><router-link to="/my">我的</router-link></li>

        </ul>
    </div>
    <div class="play">
        播放栏
    </div>
</template>


<script>
export default { }
</script>

<style scoped lang="less">
.top-nav{
    display: flex;
    background:#fff;
    li{
        flex: 1;
        text-align: center;
        padding-top: 10px;
        a{
            display: block;
            padding-bottom: 8px;

        }
        .active{
            border-bottom: 2px solid #dc8f8f;
        }
    }
}
.play {
    position: fixed;
    left: 0px;
    bottom: 0px;
    background: rgb(146, 164, 228);
    height: 13%;
    width: 100%;
}



</style>
