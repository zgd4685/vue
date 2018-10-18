<template>
    <div class="app-container">
        <!--头部 header 区域-->
        <mt-header fixed title="vue项目牛刀小试"></mt-header>
        <!--中间 router-view 区域-->
        <div class="mui-content">
            <router-view></router-view>
        </div>
        <!--底部 tab-bar 区域-->
        <nav class="mui-bar mui-bar-tab">
            <router-link to="/tabbar" class="mui-tab-item mui-active">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link to="/tabbar-with-chat" class="mui-tab-item">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">消息</span>
            </router-link>
            <router-link to="/tabbar-with-contact" class="mui-tab-item">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">通讯录</span>
            </router-link>
            <router-link to="/tabbar-with-map" class="mui-tab-item">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </router-link>
        </nav>
    </div>
</template>

<script>

</script>

<style>
    .app-container{
        margin-top: 40px;
    }
</style>