<template>
  <div class="Home">
    <router-view class="centreContent" />
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/Home">
        <span>工作台</span>
        <i slot="icon" class="iconfont">&#xe70a;</i>
      </van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/Monitor">
        <span>监控</span>
        <i slot="icon" class="iconfont">&#xe790;</i>
      </van-tabbar-item>
      <van-tabbar-item replace to="/EnergyConsumption" info="3">
        <span>能耗</span>
        <i slot="icon" class="iconfont">&#xe636;</i>
      </van-tabbar-item>
      <van-tabbar-item replace to="/Mine" info="2">
        <span>我的</span>
        <i slot="icon" class="iconfont">&#xe60d;</i>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      // Toast("返回");
    }
  }
};
</script>
<style scoped lang="less">
.Home {
  height: 100vh;
  width: 100vw;
}
.centreContent {
  height: ~"calc(100vh - 50px)";
}
</style>
