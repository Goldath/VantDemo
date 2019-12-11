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
        "https://img.yzcdn.cn/vant/apple-4.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg"
      ]
    };
  }
};
</script>
<style scoped lang="less">
</style>