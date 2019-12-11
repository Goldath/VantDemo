<template>
  <div class="Main">
    <van-swipe :autoplay="3000" style="height:240px">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5eba71243eb1334ec59f01ee26fbbb52.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08c17b334292e67a41b8973489b9481a.jpg?w=2452&h=920"
      ]
    };
  }
};
</script>
<style scoped lang="less">
</style>