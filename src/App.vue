<template>
  <div id="app">
    <x-header title="张晓敏 13床"></x-header>
    <router-view/>
    <tabbar>
      <tabbar-item v-for="(item,index) in tabbarData" :key="index" :link="item.link">
        <img :src="item.icon" alt="" slot="icon">
        <img :src="item.iconActive" alt="" slot="icon-active">
        <span slot="label">{{item.label}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem,XHeader} from 'vux'

  export default {
    name: 'App',
    components: {XHeader, Tabbar, TabbarItem},
    data() {
      return {
        tabbarData: [
          {icon: require("./assets/img/icon_conversition_normal.png"), iconActive: require("./assets/img/icon_conversition_pressed.png"), label: "会话", link: "/message"},
          {icon: require("./assets/img/tabbar_circle_normal.png"), iconActive: require("./assets/img/tabbar_circle_pressed.png"), label: "首页", link: "/patientlist"},
          {icon: require("./assets/img/tabbar_mine_normal.png"), iconActive: require("./assets/img/tabbar_mine_pressed.png"), label: "我的", link: "/me"}
        ]
      }
    },
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
