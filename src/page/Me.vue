<template>
  <div class="me">
    <x-button class="button" @click.native="showPlugin" type="primary">
      <span>消息提醒</span>
    </x-button>
  </div>
</template>

<script>
  import {XButton} from 'vux'

  export default {
    name: "Me",
    components: {XButton},
    methods: {
      showPlugin() {
        this.$vux.alert.show({
          title: 'VUX is Cool',
          content: 'Do you agree?',
          onShow() {
            console.log('Plugin: I\'m showing')
          },
          onHide() {
            console.log('Plugin: I\'m hiding now')
          }
        })
      }
    },
  }
</script>

<style scoped>
  .me {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .button {
    position: fixed;
    bottom: 10%;
  }
</style>
