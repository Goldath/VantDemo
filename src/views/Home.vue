<template>
  <div class="home">
    <!-- <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" /> -->
    <router-view />
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">工作台</van-tabbar-item>
      <van-tabbar-item icon="search">监控</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">能耗</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="2">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      active: 0
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    onChange() {},
    onClickLeft() {
      // Toast("返回");
    }
  }
};
</script>
