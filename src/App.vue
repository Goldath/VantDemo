<template>
  <div id="app">
    <keep-alive :include="includeList">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      includeList: ['Home','MyUser'] //缓存组件列表   C 跳转到 A 时让 A 不缓存，即刷新
    };
  },
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* 引入阿里图标库 */
@font-face {
  font-family: 'iconfont';  /* project id 1555823 */
  src: url('//at.alicdn.com/t/font_1555823_u5p1uj939w.eot');
  src: url('//at.alicdn.com/t/font_1555823_u5p1uj939w.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1555823_u5p1uj939w.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1555823_u5p1uj939w.woff') format('woff'),
  url('//at.alicdn.com/t/font_1555823_u5p1uj939w.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1555823_u5p1uj939w.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
