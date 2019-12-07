#**项目名：myvantdemo**

#**项目涉及的技术：**

##vue、javascript、rem、vant

#**项目目录结构**

- Home.vue项目主入口
- common--公共组件域



姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟


(```)
  export default new Vuex.Store({
  state: {
    /* 错误的提示弹窗 */
    tipsErrorFlag:false,
    tipsErrorTxt:"",
    /* 正确的提示弹窗 */
    tipsSuccessTxt: "",
    tipsSuccessFlag: false,
    /* 普通的提示弹窗 */
    tipsTxt: "",
    tipsFlag: false,
    /* 节流阀弹窗 */
    closureFlag: true,
    /* 加载中 */
    loadingFlag:false,
  },
  mutations: {},
  actions: {}
});
(```)

[Markdown基本语法](https://www.jianshu.com/p/191d1e21f7ed)

