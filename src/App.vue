<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

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
  font-family: "iconfont"; /* project id 1555823 */
  src: url("//at.alicdn.com/t/font_1555823_acn7z98d17f.eot");
  src: url("//at.alicdn.com/t/font_1555823_acn7z98d17f.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1555823_acn7z98d17f.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1555823_acn7z98d17f.woff") format("woff"),
    url("//at.alicdn.com/t/font_1555823_acn7z98d17f.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1555823_acn7z98d17f.svg#iconfont") format("svg");
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
