<template>
  <div id="app">
    <header class="header">
      <x-header title="张晓敏 13床"></x-header>
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      <tabbar class="tabbar">
        <tabbar-item v-for="(item,index) in tabbarData" :key="index" :link="item.link">
          <img :src="item.icon" alt="" slot="icon">
          <img :src="item.iconActive" alt="" slot="icon-active">
          <span slot="label">{{item.label}}</span>
        </tabbar-item>
      </tabbar>
    </footer>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem, XHeader} from 'vux'
  
  export default {
    name: 'App',
    components: {XHeader, Tabbar, TabbarItem},
    data() {
      return {
        tabbarData: [
          {
            icon: require("./assets/img/icon_conversition_normal.png"),
            iconActive: require("./assets/img/icon_conversition_pressed.png"),
            label: "会话",
            link: "/message"
          },
          {
            icon: require("./assets/img/tabbar_circle_normal.png"),
            iconActive: require("./assets/img/tabbar_circle_pressed.png"),
            label: "首页",
            link: "/patientlist"
          },
          {
            icon: require("./assets/img/tabbar_mine_normal.png"),
            iconActive: require("./assets/img/tabbar_mine_pressed.png"),
            label: "我的",
            link: "/me"
          }
        ]
      }
    },
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  
  .app {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
  
  .main {
    margin-top: 50px;
    margin-bottom: 60px;
  }
</style>
