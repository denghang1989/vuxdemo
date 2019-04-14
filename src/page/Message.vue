<template>
  <div class="message">
    <box gap="10px 10px">
      <x-button :link="link">确定</x-button>
    </box>
  </div>
</template>

<script>
  import XButton from "vux/src/components/x-button/index";
  import Box from "vux/src/components/box/index";
  
  export default {
    name: "Message",
    components: {Box, XButton},
    data() {
      return {
        link: "/patientDetail"
      }
    },
  }
</script>

<style scoped>
  .message {
    width: 100%;
    height: 100%;
    padding: 0;
  }
</style>
